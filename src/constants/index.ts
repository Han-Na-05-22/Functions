import instance from 'api/axios';
import { ApiMethodsType } from 'types';

const constants = {
	// api 호출 메소드
	API_METHODS: {
		get: ({ url, data }: ApiMethodsType) => instance.get(url, { params: data }),
		post: ({ url, data }: ApiMethodsType) => instance.post(url, data),
		put: ({ url, data }: ApiMethodsType) => instance.put(url, data),
		patch: ({ url, data }: ApiMethodsType) => instance.patch(url, data),
		delete: ({ url, data }: ApiMethodsType) => instance.delete(url, { data }),
	},
	PAGINATION_LIMIT: 10,
	PAGINATION_PER_PAGE: [10, 50, 100],
	AUTO_CLOSE_DURATION: 3000,
	TOAST_MESSAGES: {
		create: '생성에',
		update: '업데이트에',
		delete: '삭제에',
		login: '로그인에',
		join: '회원가입에',
	},
};

export default constants;
