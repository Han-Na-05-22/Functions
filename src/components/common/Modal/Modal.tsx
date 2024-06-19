import Button from '../Button/Button';
import Overlay from '../Overlay/Overlay';
import { ModalProps } from './interface';
import * as S from './style';

const Modal = ({
	className,
	width = '360px',
	height = 'auto',
	title,
	children,
	buttonConfirmEvent,
	buttonCloseEvent,
}: ModalProps) => {
	return (
		<Overlay>
			<S.ModalContainer
				className={className}
				width={width}
				height={height}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="modal-header" />
				<div className="modal-container">
					<strong>{title}</strong>
					<div className="modal-content">{children}</div>
					<div className="modal-button-container">
						<Button onClick={buttonConfirmEvent}>Confirm</Button>
						<Button onClick={buttonCloseEvent}>Close</Button>
					</div>
				</div>
			</S.ModalContainer>
		</Overlay>
	);
};

export default Modal;
