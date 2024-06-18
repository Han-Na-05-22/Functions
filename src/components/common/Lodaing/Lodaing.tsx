import { useLoading } from 'store/common/state';
import Overlay from '../Overlay/Overlay';
import * as S from './style';
import { useEffect } from 'react';

const Loading = () => {
	const { isLoading, hiddenLoading } = useLoading();

	useEffect(() => {
		if (isLoading) {
			setTimeout(() => {
				hiddenLoading();
			}, 1000);
		}
	}, [isLoading]);

	return (
		<Overlay>
			<S.LoadingContainer>
				<div className="loading-spinner" />
			</S.LoadingContainer>
		</Overlay>
	);
};

export default Loading;
