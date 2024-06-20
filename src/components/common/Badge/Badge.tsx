import { BadgeProps } from './interface';
import * as S from './style';
import SVG from 'react-inlinesvg';

const Badge = ({
	className,
	content,
	isRound = true,
	isIcon = true,
	iconSrc = '',
	type,
}: BadgeProps) => {
	return (
		<S.BadgeContainer
			className={`${className} ${isRound ? 'round' : ''}`}
			type={type}
		>
			<div className="badge-content">
				{isIcon && iconSrc && (
					<SVG src={`svg/${iconSrc}.svg`} className="badge-icon" />
				)}
				<span className="badge-text">{content}</span>
			</div>
		</S.BadgeContainer>
	);
};

export default Badge;
