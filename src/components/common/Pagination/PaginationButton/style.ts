import { styled } from 'styled-components';

export const PaginationButtonContainer = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	border: 1px solid #aaa;
	color: #aaa;
	cursor: pointer;
	transition: 0.2s;

	&.active {
		border: 1px solid #555;
		color: #555;
	}

	&:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	.pagination-icon {
		width: 20px;
		height: 20px;

		path {
			fill: #aaa;
			stroke: #aaa;
		}
	}
`;
