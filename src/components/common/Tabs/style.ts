import { styled } from 'styled-components';

export const TabsContainer = styled.div`
	display: flex;
	gap: 0px 8px;
	align-items: center;
	border-bottom: 1px solid #ccc;
	margin: 20px 0px;

	.tab-content {
		padding-bottom: 4px;
		.tab-text {
			transition: 0.2s;
			cursor: pointer;
			font-size: 12px;
		}

		&.active {
			border-bottom: 1.5px solid
				${({ theme }) => theme.colors.PrimaryActiveColor};
			color: ${({ theme }) => theme.colors.PrimaryActiveColor};
		}
	}
`;
