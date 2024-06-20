import styled, { css } from 'styled-components';
import { ProgressBarStyleProps } from './interface';

export const ProgressBarContainer = styled.div<ProgressBarStyleProps>`
	border: 2px solid ${({ theme }) => theme.colors.PrimaryColor};
	overflow: hidden;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border-radius: 10px;

	.percentage {
		height: inherit;
		width: ${(props) => props.percentage}%;
		background: ${({ theme }) => theme.colors.PrimaryColor};
		border-radius: 10px 0px 0px 10px;
	}
`;
