import { TextareaProps } from './interface';
import * as S from './style';
const Textarea = ({
	className,
	name,
	value,
	label = null,
	isRequired = false,
	onChange,
}: TextareaProps) => {
	return (
		<S.TextareaContainer className={className}>
			{label && (
				<div className="label-container">
					{isRequired && <b className="required">*</b>}
					<label htmlFor={name} className="label-text">
						{label}
					</label>
				</div>
			)}
			<textarea
				name={name}
				className="textarea-input"
				id={name}
				value={value}
				onChange={onChange}
			/>
		</S.TextareaContainer>
	);
};

export default Textarea;
