import { RadioListProps } from 'components/common/RadioButton/interface';
import { ChangeEvent, useCallback, useState } from 'react';

type initValueType =
	| string
	| number
	| boolean
	| object
	| { [key: string]: any }
	| any[];

// input, radio button 관련 커스텀 훅
const useInputs = <T extends initValueType>(initValue: T) => {
	const [inputValue, setInputValue] = useState<T>(initValue);

	const onChangeInputValue = useCallback(
		(
			e: ChangeEvent<
				HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
			>,
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

	const onChangeCheckBox = (
		e: React.ChangeEvent<HTMLInputElement>,
		checkListName?: string,
		type?: string,
	) => {
		if (!e) {
			return;
		}

		const { name, checked } = e.target;

		setInputValue(
			(prev: T) =>
				({
					...(prev as object),
					[name]: checked,
				}) as T,
		);

		if (!type && checkListName) {
			const checkList = (inputValue as { [key: string]: any })[checkListName];

			if (Array.isArray(checkList)) {
				setInputValue(
					(prev: T) =>
						({
							...(prev as object),
							[checkListName]: checkList.map((i: any) => {
								if (name === i.label) {
									return { ...i, checked };
								}
								return i;
							}),
						}) as T,
				);
			} else if (typeof checkList === 'object') {
				setInputValue(
					(prev: T) =>
						({
							...(prev as object),
							[checkListName]: {
								...checkList,
								[name]: checked,
							},
						}) as T,
				);
			}
		}

		if (type === 'all' && checkListName) {
			setInputValue(
				(prev: T) =>
					({
						...(prev as object),
						[checkListName]: (prev as { [key: string]: any })[
							checkListName
						].map((check: { [key: string]: any }) => ({
							...check,
							checked,
						})),
					}) as T,
			);
		}
	};

	return {
		inputValue,
		setInputValue,
		onChangeInputValue,
		onChangeRadioButton,
		onChangeCheckBox,
	};
};

export default useInputs;
