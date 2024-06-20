import styled, { css } from 'styled-components';
import { TooltipStyleProps } from './interface';

export const TooltipContainer = styled.div<TooltipStyleProps>`
	position: relative;
	display: inline-block;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	padding: ${(props) => props.padding};
	font-size: 12px;

	.tooltip-title-content {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;

		.tooltip-title {
			cursor: pointer;
		}
	}

	.tooltip-box {
		position: absolute;
		top: 200%;
		opacity: 0;
		visibility: hidden;
		transition:
			opacity 0.2s ease-in-out,
			visibility 0.2s ease-in-out;
		background-color: #ddd;

		&::before {
			content: '';
			position: absolute;
			top: -5px;
			left: 50%;
			display: block;
			transform: translateX(-50%) rotate(-45deg);
			width: 8px;
			height: 8px;
			background-color: #ddd;
		}
		.tooltip-text {
			padding: 4px;
			color: #333;
		}
	}

	&:hover {
		.tooltip-box {
			opacity: 1;
			visibility: visible;

			.tooltip-text {
			}
		}
	}

	${(props) =>
		props.position === 'left' &&
		css`
			.tooltip-box {
				&::before {
					left: 5px;
					transform: translateX(0%) rotate(-45deg);
				}
			}
		`}

	${(props) =>
		props.position === 'right' &&
		css`
			.tooltip-box {
				&::before {
					left: 92.5%;
					transform: translateX(0%) rotate(-45deg);
				}
			}
		`}
`;
