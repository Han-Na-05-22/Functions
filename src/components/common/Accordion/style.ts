import { styled } from 'styled-components';

export const AccordionContainer = styled.div`
	.accordion-lists {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.accordion-list {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			gap: 24px 0px;
			width: 100%;
			padding: 0px 16px;
			transition: 0.3s;
			color: #fff;
			border: 1.5px solid ${({ theme }) => theme.colors.SecondaryHoverColor};
			background-color: ${({ theme }) => theme.colors.PrimaryActiveColor};
			box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
			border-radius: 5px;

			.accordion-title-content {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				padding: 16px 0px;

				cursor: pointer;

				.accordion-title {
					font-size: 12px;
				}

				.accordion-icon {
					width: 20px;
					height: 20px;

					path {
						fill: #fff;
						stroke: #fff;
					}
				}
			}
			.accordion-content {
				display: none;
				padding: 0px 0px 16px;
				font-size: 12px;
			}

			&.active {
				margin-bottom: 8px;

				.accordion-icon {
					transform: rotate(-180deg);
				}

				.accordion-content {
					display: inline-block;
				}
			}
		}
	}
`;
