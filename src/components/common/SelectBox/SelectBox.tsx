import SVG from 'react-inlinesvg';
import Select, { components } from 'react-select';
import { SelectBoxProps } from './interface';
import * as S from './style';

const SelectBox = ({
	className,
	OptionArray,
	label,
	name,
	value,
	placeholder,
	onChange,
}: SelectBoxProps) => {
	const options = OptionArray.map((option) => ({
		value: option.value,
		label: option.name ? option.name : option,
	}));

	const selectedValue = options.find((option) => option.value === value);

	const customStyles = {
		control: (provided: any) => ({
			...provided,
			borderRadius: '8px',
		}),
		menu: (provided: any) => ({
			...provided,
			borderRadius: '8px',
			backgroundColor: 'white',
			overflowY: 'auto',
		}),
		option: (provided: any, state: { isSelected: any }) => ({
			...provided,
			display: 'flex',
			alignItems: 'center',
			backgroundColor: state.isSelected ? '#e9ecef' : 'white',
			color: state.isSelected ? 'black' : 'inherit',
			':hover': {
				backgroundColor: '#F6F6F6',
			},
		}),
	};

	const CustomOption = (props: any) => {
		return (
			<components.Option {...props}>
				{props.isSelected && (
					<SVG src="/svg/check-icon.svg" className="check-icon" />
				)}
				{props.data.label}
			</components.Option>
		);
	};

	return (
		<S.SelectBoxContainer className={className}>
			{label !== null && (
				<div className="label-container">
					<span className="label-text">{label}</span>
				</div>
			)}
			<Select
				className={`select-input ${name}`}
				name={name}
				value={selectedValue}
				onChange={(selectedOption) =>
					onChange({
						target: {
							name,
							value: selectedOption ? selectedOption.value : '',
						},
					} as unknown as React.ChangeEvent<HTMLSelectElement>)
				}
				options={options}
				placeholder={placeholder}
				styles={customStyles}
				components={{ Option: CustomOption }}
			/>
		</S.SelectBoxContainer>
	);
};

export default SelectBox;
