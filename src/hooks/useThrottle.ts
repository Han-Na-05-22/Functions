import { useEffect, useRef, useState } from 'react';
import { useLoading } from 'store/common/state';

const useThrottle = <T>(value: T, limit: number = 200) => {
	const [throttledValue, setThrottledValue] = useState<T>(value);
	const { isLoading, showLoading, hiddenLoading } = useLoading();
	const lastRan = useRef<number>(Date.now());

	useEffect(() => {
		const handler = setTimeout(
			() => {
				if (Date.now() - lastRan.current >= limit) {
					showLoading();
					setThrottledValue(value);
					lastRan.current = Date.now();
				}
			},
			limit - (Date.now() - lastRan.current),
		);

		return () => {
			clearTimeout(handler);
			hiddenLoading();
		};
	}, [value, limit]);

	return throttledValue;
};

export default useThrottle;
