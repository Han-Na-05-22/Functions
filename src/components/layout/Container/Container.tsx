import { ContainerProps } from './interface';
import * as S from './style';

const Container = ({ className, children }: ContainerProps) => {
	return (
		<S.ContainerMainLayout className={className}>
			{children}
		</S.ContainerMainLayout>
	);
};

export default Container;
