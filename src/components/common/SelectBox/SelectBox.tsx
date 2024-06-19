import { SelectBoxProps } from './interface';
import * as S from './style';

const SelectBox = ({
	className,
	OptionArray,
	label,
	name,
	value,
	onChange,
}: SelectBoxProps) => {
	return (
		<S.SelectBoxContainer className={className}>
			{label && (
				<div className="label-container">
					<span className="label-text">{label}</span>
				</div>
			)}
			<select
				className={`select-input ${name}`}
				name={name}
				id={name}
				value={value}
				onChange={onChange}
			>
				{OptionArray.length !== 0 &&
					OptionArray.map((option: any, idx: number) => (
						<option key={idx} value={option.value}>
							{option.name}
						</option>
					))}
			</select>
		</S.SelectBoxContainer>
	);
};

export default SelectBox;
