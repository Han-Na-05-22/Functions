import constants from '../constants/index';
import { useCallback, useState } from 'react';

interface UsePaginationType {
	nowPage: number;
	limit: number;
	total: number;
	perPage: number;
}

const usePagination = () => {
	const [page, setPage] = useState<UsePaginationType>({
		nowPage: 1,
		limit: constants.PAGINATION_LIMIT,
		total: 0,
		perPage: constants.PAGINATION_LIMIT,
	});

	const getPageInfo = (pageInfo: UsePaginationType) => {
		setPage(pageInfo);
	};

	const onChangePageNumber = (nowPage: number) => {
		setPage((prev) => ({
			...prev,
			nowPage,
		}));
	};

	const onChangePerPageNumber = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;
		const newPerPage = Number(value);

		setPage((prev) => ({
			...prev,
			nowPage: 1,
			perPage: newPerPage,
			limit: newPerPage,
		}));
	};

	const onAddPageNumber = useCallback(() => {
		setPage((prev) => ({
			...prev,
			nowPage: prev.nowPage + 1,
		}));
	}, []);

	const onMinusPageNumber = useCallback(() => {
		setPage((prev) => ({
			...prev,
			nowPage: prev.nowPage - 1,
		}));
	}, []);

	return {
		page,
		getPageInfo,
		onChangePageNumber,
		onChangePerPageNumber,
		onAddPageNumber,
		onMinusPageNumber,
	};
};

export default usePagination;
