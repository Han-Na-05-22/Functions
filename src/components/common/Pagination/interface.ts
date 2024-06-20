export interface PaginationProps {
	className?: string;
	nowPage: number;
	limit: number;
	totalPage: number;
	isPerPage?: boolean;
	perPage?: number;
	onClickPrevPageButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
	onClickNextPageButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
	onChangePage?: any;
	onChangePerPage?: any;
}
