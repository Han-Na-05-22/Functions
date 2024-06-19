import { RadioListProps } from 'components/common/RadioButton/interface';
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

	const onChangeRadioButton = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>, radioName: string) => {
			if (
				typeof initValue === 'object' &&
				Array.isArray((inputValue as { [key: string]: any })[radioName])
			) {
				const { name } = e.target;

				const changeRadioValue = (
					(inputValue as { [key: string]: any })[radioName] as any[]
				).map((radio: RadioListProps) => {
					if (radio.name === name) {
						return {
							...radio,
							checked: true,
						};
					}
					return {
						...radio,
						checked: false,
					};
				});

				setInputValue(
					(prev: T) =>
						({
							...(prev as object),
							[radioName]: changeRadioValue,
						}) as T,
				);
			}
		},
		[initValue, inputValue],
	);

	return {
		inputValue,
		setInputValue,
		onChangeInputValue,
		onChangeSelect,
		onChangeRadioButton,
	};
};

export default useInputs;
