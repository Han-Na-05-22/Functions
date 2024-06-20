import { TooltipProps } from './interface';
import * as S from './style';

const Tooltip = ({
	className,
	position = 'center',
	content,
	width,
	height,
	padding,
}: TooltipProps) => {
	return (
		<S.TooltipContainer
			className={className}
			position={position}
			width={width}
			height={height}
			padding={padding}
		>
			<div className="tooltip-title-content">
				<span className="tooltip-title">{content}</span>
			</div>
			<div className="tooltip-box">
				<p className="tooltip-text">{content}</p>
			</div>
		</S.TooltipContainer>
	);
};

export default Tooltip;
