import { ToggleProps } from './interface';
import * as S from './style';

const Toggle = ({
	className,
	label = null,
	isActive = false,
	onClick,
}: ToggleProps) => {
	return (
		<S.ToggleContainer className={className}>
			<div className="toggle-content">
				{label && <span className="label-text">{label}</span>}
				<button
					className={`toggle-button ${isActive ? 'active' : ''}`}
					onClick={onClick}
				></button>
			</div>
		</S.ToggleContainer>
	);
};

export default Toggle;
