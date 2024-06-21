import dayjs, { Dayjs } from 'dayjs';

// date 포맷 타입별 content
const dateFormatType = {
	year: 'YYYY',
	month: 'YYYY-MM',
	day: 'YYYY-MM-DD',
	hour: 'YYYY-MM-DD HH',
	min: 'YYYY-MM-DD HH:mm',
	sec: 'YYYY-MM-DD HH:mm:ss',
};

// 포맷 타입
type formatType = 'year' | 'month' | 'day' | 'hour' | 'min' | 'sec';

// 지정한 날짜 date 포맷
export const setDateFormatter = (
	date: string | Date | Dayjs,
	type: formatType,
) => {
	if (!date) {
		return;
	}

	const dayjsDate = dayjs(date);

	if (!dayjsDate.isValid()) {
		console.error('Invalid date provided');
		return;
	}

	return dayjsDate.format(dateFormatType[type]);
};

// 현재 날짜 date 포맷
export const currentDateFormatter = (type: formatType) => {
	if (!type) {
		return;
	}

	const currentDate = dayjs();

	return currentDate.format(dateFormatType[type]);
};
