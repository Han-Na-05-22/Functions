import constants from '../constants/index';
import { useCallback, useState } from 'react';

interface usePaginationType {
	nowPage: number;
	limit: number;
	total: number;
	perPage?: number;
}

const usePagination = () => {
	const [page, setPage] = useState<usePaginationType>({
		nowPage: 1,
		limit: constants.PAGINATION_LIMIT,
		total: 0,
		perPage: constants.PAGINATION_LIMIT,
	});

	const getPageInfo = ({
		nowPage,
		limit,
		total,
		perPage,
	}: usePaginationType) => {
		setPage({
			nowPage: nowPage,
			limit: limit,
			total: total,
			perPage: perPage,
		});
	};

	const onChangePageNumber = (nowPage: number) => {
		setPage({
			...page,
			nowPage: nowPage,
		});
	};

	const onChangePerPageNumber = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;

		setPage({
			...page,
			nowPage: 1,
			perPage: Number(value),
			limit: Number(value),
		});
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
