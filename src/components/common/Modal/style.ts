import styled from 'styled-components';
import { ModalStyleProps } from './interface';

export const ModalContainer = styled.div<ModalStyleProps>`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
	background-color: #fff;
	border-radius: 5px;

	.modal-header {
		width: 100%;
		height: 32px;
		background-color: #1ca76d;
		border-radius: 5px 5px 0px 0px;
	}

	.modal-container {
		display: flex;
		flex-direction: column;
		gap: 16px 0px;
		padding: 20px;

		.modal-content {
		}

		.modal-button-container {
			display: flex;
			justify-content: flex-end;
			gap: 0px 12px;
			margin-top: 12px;
		}
	}
`;
