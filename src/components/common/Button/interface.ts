type buttonStyleType =
	| 'primary'
	| 'secondary'
	| 'danger'
	| 'warning'
	| 'success';
type buttonSize = 's' | 'm' | 'l';

export interface ButtonProps {
	className?: string;
	children: React.ReactNode;
	width?: string;
	height?: string;
	size?: buttonSize;
	buttonType?: buttonStyleType;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonStyleProps {
	width?: string;
	height?: string;
	size?: buttonSize;
	buttonType?: buttonStyleType;
}
