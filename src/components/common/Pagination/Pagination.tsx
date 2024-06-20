import { useEffect, useState } from 'react';
import PaginationButton from './PaginationButton/PaginationButton';
import { PaginationProps } from './interface';
import * as S from './style';
import SVG from 'react-inlinesvg';
import SelectBox from '../SelectBox/SelectBox';
import constants from 'constants/index';

const Pagination = ({
	className,
	nowPage,
	limit,
	totalPage,
	isPerPage = true,
	perPage = 0,
	onClickPrevPageButton,
	onClickNextPageButton,
	onChangePage,
	onChangePerPage,
}: PaginationProps) => {
	const [pageNum, setPageNum] = useState<number | null>(null);
	const offset = Math?.ceil(nowPage / limit);

	useEffect(() => {
		if (totalPage && limit && nowPage) {
			const result =
				limit * offset < totalPage
					? limit
					: totalPage - limit * Math?.floor(totalPage / limit);

			setPageNum(result);
		}
	}, [nowPage, perPage]);

	return (
		<S.PaginationContainer className={className}>
			{isPerPage && (
				<div className="per-page-content">
					<SelectBox
						label="Per Page"
						OptionArray={constants.PAGINATION_PER_PAGE}
						value={perPage}
						name="per-page"
						onChange={(e) => onChangePerPage(e)}
					/>
				</div>
			)}
			<PaginationButton
				onClick={onClickPrevPageButton}
				disabled={nowPage === 1}
			>
				<SVG src="svg/page-prev.svg" className="pagination-icon prev" />
			</PaginationButton>
			{pageNum &&
				Array(pageNum)
					.fill(null)
					.map((_, idx) => (
						<PaginationButton
							key={idx}
							onClick={() => onChangePage(limit * (offset - 1) + (idx + 1))}
							isActive={limit * (offset - 1) + (idx + 1) === nowPage}
							disabled={false}
						>
							{limit * (offset - 1) + (idx + 1)}
						</PaginationButton>
					))}

			<PaginationButton
				onClick={onClickNextPageButton}
				disabled={nowPage === totalPage}
			>
				<SVG src="svg/page-next.svg" className="pagination-icon next" />
			</PaginationButton>
		</S.PaginationContainer>
	);
};

export default Pagination;
