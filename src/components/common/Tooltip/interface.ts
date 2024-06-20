type TooltipPositionProps = 'left' | 'center' | 'right';

export interface TooltipProps {
	className?: string;
	position?: TooltipPositionProps;
	content: string;
	width?: string;
	height?: string;
	padding?: string;
}

export interface TooltipStyleProps {
	position?: TooltipPositionProps;
	width?: string;
	height?: string;
	padding?: string;
}
