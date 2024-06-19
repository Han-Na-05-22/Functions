import { ButtonProps } from './interface';
import * as S from './style';

const Button = ({
	className,
	children,
	width = 'auto',
	height = 'auto',
	size = 'm',
	buttonType = 'primary',
	onClick,
}: ButtonProps) => {
	return (
		<S.ButtonContainer
			className={`${className} ${size}`}
			width={width}
			height={height}
			size={size}
			buttonType={buttonType}
			onClick={onClick}
		>
			{children}
		</S.ButtonContainer>
	);
};

export default Button;
