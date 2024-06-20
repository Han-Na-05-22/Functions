import { PaginationButtonProps } from './interface';
import * as S from './style';

const PaginationButton = ({
	className,
	isActive,
	disabled,
	children,
	onClick,
}: PaginationButtonProps) => {
	return (
		<S.PaginationButtonContainer
			className={`${className} ${isActive ? 'active' : ''}`}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</S.PaginationButtonContainer>
	);
};

export default PaginationButton;
