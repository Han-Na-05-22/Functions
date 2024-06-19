export interface ModalProps {
	className?: string;
	width?: string;
	height?: string;
	title: string;
	children: React.ReactNode;
	buttonConfirmEvent: (e: React.MouseEvent<HTMLButtonElement>) => void;
	buttonCloseEvent: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ModalStyleProps {
	width?: string;
	height?: string;
}
