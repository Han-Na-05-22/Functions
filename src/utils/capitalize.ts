type capitalizeType = 'string' | 'array' | 'object';

// 제일 첫 글자를 대문자로 변환
export const capitalize = (
	value: string | any[] | Record<string, any>,
	type: capitalizeType,
	key?: string,
) => {
	let text;

	if (type === 'string' && typeof value === 'string') {
		text = value.charAt(0).toUpperCase();

		return text + value.slice(1);
	}

	if (
		type === 'object' &&
		typeof value === 'object' &&
		key &&
		!Array.isArray(value) &&
		typeof (value as Record<string, any>)[key] === 'string'
	) {
		text = (value as Record<string, any>)[key].charAt(0).toUpperCase();

		return {
			...value,
			[key]: text + (value as Record<string, any>)[key].slice(1),
		};
	}

	if (type === 'array' && Array.isArray(value) && key) {
		const result = value.map((data, idx) => {
			if (typeof data[key] === 'string') {
				return {
					...data,
					[key]: data[key].charAt(0).toUpperCase() + data[key].slice(1),
				};
			}
		});

		return result;
	}

	return value;
};
