import { ProgressBarProps } from './interface';
import * as S from './style';

const ProgressBar = ({
	className,
	width = '200px',
	height = '24px',
	percentage,
}: ProgressBarProps) => {
	return (
		<S.ProgressBarContainer
			className={className}
			width={width}
			height={height}
			percentage={Math.round(percentage)}
		>
			<div className="percentage" />
		</S.ProgressBarContainer>
	);
};

export default ProgressBar;
