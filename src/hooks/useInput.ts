import { useCallback, useState } from 'react';

type initValueType = string | number | boolean | object | any[];

const useInputs = <T extends initValueType>(initValue: T) => {
	const [inputValue, setInputValue] = useState<T>(initValue);

	const onChangeInputValue = useCallback(
		(
			e:
				| React.ChangeEvent<HTMLInputElement>
				| React.ChangeEvent<HTMLTextAreaElement>,
		) => {
			if (typeof initValue === 'string' || typeof initValue === 'number') {
				setInputValue(e.target.value as T);
			}

			if (typeof initValue === 'object') {
				const { name, value } = e.target;
				setInputValue(
					(prev: T) =>
						({
							...(prev as object),
							[name]: value,
						}) as T,
				);
			}

			if (Array.isArray(initValue)) {
				setInputValue((prev: T) => [...(prev as any[]), e.target.value] as T);
			}
		},
		[initValue],
	);

	const onChangeSelect = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			const { name } = e.target;

			const selectedValue = e.target.options[e.target.selectedIndex].value;

			setInputValue((prev: T) => ({
				...(prev as any),
				[name]: selectedValue,
			}));
		},
		[],
	);

	return {
		inputValue,
		setInputValue,
		onChangeInputValue,
		onChangeSelect,
	};
};

export default useInputs;
