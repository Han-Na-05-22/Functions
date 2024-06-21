import { styled } from 'styled-components';
import { SkeletonStyleProps } from './interface';

export const SkeletonContainer = styled.div<SkeletonStyleProps>`
	display: inline-block;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border-radius: ${(props) => props.borderRadius};
	margin: 0.5em 0;
	animation: skeleton-animation 1.5s infinite ease-in-out;
	background-color: #e0e0e0;

	@keyframes skeleton-animation {
		0% {
			background-color: #e0e0e0;
		}
		50% {
			background-color: #f0f0f0;
		}
		100% {
			background-color: #e0e0e0;
		}
	}
`;
