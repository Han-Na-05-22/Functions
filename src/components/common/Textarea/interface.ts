export interface TextareaProps {
	className?: string;
	name: string;
	value: string;
	label?: string | null;
	isRequired?: boolean;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
