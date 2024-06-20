import styled, { css } from 'styled-components';
import { BadgeStyleProps } from './interface';

export const BadgeContainer = styled.div<BadgeStyleProps>`
	display: inline-block;
	padding: 4px 8px;

	&.round {
		border-radius: 15px;
	}

	.badge-content {
		display: flex;
		align-items: center;
		gap: 0px 4px;
	}

	.badge-icon {
		width: 16px;
		height: 16px;

		path {
			stroke: #fff;
		}
	}

	.badge-text {
		font-size: 12px;
		color: #fff;
	}

	${(props) =>
		props.type === 'type1' &&
		css`
			background-color: ${({ theme }) => theme.colors.PrimaryActiveColor};
			border: 1px solid ${({ theme }) => theme.colors.PrimaryActiveColor};
		`}

	${(props) =>
		props.type === 'type2' &&
		css`
			background-color: ${({ theme }) => theme.colors.SecondaryActiveColor};
			border: 1px solid ${({ theme }) => theme.colors.SecondaryActiveColor};
		`}

        

	${(props) =>
		props.type === 'type3' &&
		css`
			background-color: ${({ theme }) => theme.colors.DangerActiveColor};
			border: 1px solid ${({ theme }) => theme.colors.DangerActiveColor};
		`}

        ${(props) =>
		props.type === 'type4' &&
		css`
			background-color: ${({ theme }) => theme.colors.WarningActiveColor};
			border: 1px solid ${({ theme }) => theme.colors.WarningActiveColor};
		`}

        ${(props) =>
		props.type === 'type5' &&
		css`
			background-color: ${({ theme }) => theme.colors.SuccessActiveColor};
			border: 1px solid ${({ theme }) => theme.colors.SuccessActiveColor};
		`}
`;
