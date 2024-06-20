import styled from 'styled-components';

export const BasicListItemContainer = styled.li`
	display: flex;
	align-items: center;
	gap: 0px 4px;
	padding: 8px 16px;
	border-top: 1px solid #ddd;
	border-left: 1px solid #ddd;
	border-right: 1px solid #ddd;
	font-size: 12px;

	&:last-child {
		border-bottom: 1px solid #ddd;
	}

	.left-content {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		.left-content-icon {
			width: 16px;
			height: 16px;
		}

		.left-content-img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			object-fit: cover;
		}
	}

	.list-text-container {
		.list-text-title {
		}

		.list-text-content {
		}
	}
`;
