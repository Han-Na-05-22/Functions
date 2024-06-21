// 숫자를 천 단위로 콤마를 찍어 포맷팅
export const formatNumberWithCommas = (value: number | string) => {
	if (isNaN(Number(value))) {
		return value;
	}

	return Number(value).toLocaleString();
};
