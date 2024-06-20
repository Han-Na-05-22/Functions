interface BasicListsProps {
	id: number;
	title: string;
	content?: string;
	iconSrc?: string;
	imgSrc?: string;
}

type IconOrImgType = 'icon' | 'image' | null;

export interface BasicListProps {
	className?: string;
	isIconOrImg?: boolean;
	iconOrImg?: IconOrImgType;
	basicLists: BasicListsProps[];
}
