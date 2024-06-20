import { styled } from 'styled-components';

export const ToggleContainer = styled.div`
	display: inline-block;
	margin-bottom: 20px;
	margin-left: 20px;

	.toggle-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px 0px;

		.label-text {
			font-size: 12px;
		}

		.toggle-button {
			position: relative;
			width: 64px;
			height: 24px;
			transition: background-color 0.3s;
			background-color: #ddd;
			border-radius: 25px;
			box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.5);
			cursor: pointer;

			&::after {
				content: '';
				display: block;
				position: absolute;
				left: -2px;
				top: -2px;
				width: 28px;
				height: 28px;
				transition:
					left 0.3s,
					background-color 0.3s;
				border-radius: 25px;

				background-color: #aaa;
			}

			&.active {
				background-color: ${({ theme }) => theme.colors.PrimaryDisabledColor};

				&::after {
					left: calc(100% - 26px);
					background-color: ${({ theme }) => theme.colors.PrimaryActiveColor};
				}
			}
		}
	}
`;
