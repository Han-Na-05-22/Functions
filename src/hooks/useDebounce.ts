import { useEffect, useState } from 'react';
import { useLoading } from 'store/common/state';

const useDebounce = <T>(value: T, delay?: number) => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);
	const { isLoading, showLoading, hiddenLoading } = useLoading();

	useEffect(() => {
		const timer = setTimeout(() => {
			showLoading();
			setDebouncedValue(value);
		}, delay || 500);

		return () => {
			clearTimeout(timer);
			hiddenLoading();
		};
	}, [value, delay]);

	return debouncedValue;
};

export default useDebounce;