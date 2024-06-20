// badge type은 프로젝트 상황별로 달라질 수 있으므로 임의로 type1, type2... 로 설정
type BadgeTypes = 'type1' | 'type2' | 'type3' | 'type4' | 'type5';

export interface BadgeProps {
	className?: string;
	content: string;
	isRound?: boolean;
	isIcon?: boolean;
	iconSrc?: string;
	type: BadgeTypes;
}

export interface BadgeStyleProps {
	type: BadgeTypes;
}
