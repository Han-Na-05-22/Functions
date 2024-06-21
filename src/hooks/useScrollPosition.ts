import { useCallback, useEffect, useState } from 'react';
import useThrottle from './useThrottle';

const useScrollPosition = (limit: number) => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const throttledScrollPosition = useThrottle<number>(scrollPosition, limit);

	const handleScroll = useCallback(() => {
		setScrollPosition(window.scrollY);
	}, []);

	useEffect(() => {
		handleScroll();

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	return throttledScrollPosition;
};

export default useScrollPosition;
