// id, name 등 유효성 검사 함수
export const textValidation = (value: string) => {
	return value.length !== 0;
};

// 이메일 유효성 검사 함수
export const emailValidation = (value: string) => {
	const regExp =
		/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

	return regExp.test(value);
};

// 패스워드 유효성 검사 함수
export const passwordValidation = (value: string) => {
	const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;

	return regExp.test(value);
};

// 휴대폰 번호 유효성 검사 함수
export const phoneValidation = (value: string) => {
	const regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

	return regExp.test(value);
};
