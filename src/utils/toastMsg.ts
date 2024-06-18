import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import constants from 'constants/index';

type toastMsgOptions = 'create' | 'update' | 'delete' | 'login' | 'join';

type toastMsgResultState = 'success' | 'failure';

const toastMsgContent = constants.TOAST_MESSAGES;
const duration = constants.AUTO_CLOSE_DURATION;

export const toastMsg = (
	option: toastMsgOptions,
	state: toastMsgResultState,
) => {
	const message = `${toastMsgContent[option]} ${state === 'success' ? '성공하였습니다.' : '실패하였습니다.'}`;

	return state === 'success'
		? toast.success(message, { autoClose: duration })
		: toast.error(message, { autoClose: duration });
};
