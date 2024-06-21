// 랜덤 문자열을 생성 함수
export const generateRandomString = (length: number = 16) => {
	return Math.random()
		.toString(36)
		.substring(2, 2 + length);
};
