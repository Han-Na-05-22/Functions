import { useEffect, useState } from 'react';
import useThrottle from './useThrottle';

interface WindowSize {
	width: number;
	height: number;
}

const useWindowSize = (limit: number) => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: typeof window !== 'undefined' ? window.innerWidth : 0,
		height: typeof window !== 'undefined' ? window.innerHeight : 0,
	});

	const throttledWindowSize = useThrottle<WindowSize>(windowSize, limit);

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return throttledWindowSize;
};

export default useWindowSize;
