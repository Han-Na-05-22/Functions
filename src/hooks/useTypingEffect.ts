import { useEffect, useState } from 'react';

const useTypingEffect = (text: string) => {
	const [typingText, setTypingText] = useState<any>('');
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		const typingInterval = setInterval(() => {
			setTypingText((prev: string) => {
				let result = prev.length !== 0 ? prev + text[count] : text[count];
				setCount(count + 1);

				if (count >= text.length) {
					setCount(0);
					setTypingText('');
				}

				return result;
			});
		}, 300);

		return () => {
			clearInterval(typingInterval);
		};
	}, [count, text]);

	return { typingText };
};

export default useTypingEffect;
