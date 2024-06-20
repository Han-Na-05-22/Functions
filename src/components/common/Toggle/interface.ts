export interface ToggleProps {
	className?: string;
	label?: string | null;
	isActive?: boolean;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
