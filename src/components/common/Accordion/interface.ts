interface AccordionListProps {
	id: number;
	title: string;
	content: string;
	isActive: boolean;
}

export interface AccordionProps {
	className?: string;
	accordionList: AccordionListProps[];
	isMultiple?: boolean;
}
