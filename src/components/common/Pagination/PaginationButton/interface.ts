export interface PaginationButtonProps {
	className?: string;
	isActive?: boolean;
	disabled: boolean;
	children: React.ReactNode;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
