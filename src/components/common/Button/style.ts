import styled, { css } from 'styled-components';
import { ButtonStyleProps } from './interface';

export const ButtonContainer = styled.button<ButtonStyleProps>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	padding: 8px 16px;
	background-color: #1ca76d;
	color: #fff;
	cursor: pointer;
	border: none;
	line-height: 1;

	&:hover {
		transition: 0.3s;
	}

	&:disabled {
		cursor: not-allowed;
	}

	/* button size */
	&.s {
		padding: 8px 16px;
		font-size: 14px;
	}

	&.m {
		padding: 10px 16px;
		font-size: 16px;
	}

	&.l {
		padding: 12px 16px;
		font-size: 18px;
	}

	${(props) =>
		props.buttonType === 'primary' &&
		css`
			background-color: ${({ theme }) => theme.colors.PrimaryColor};

			&:hover {
				background-color: ${({ theme }) => theme.colors.PrimaryHoverColor};
			}

			&:active {
				background-color: ${({ theme }) => theme.colors.PrimaryActiveColor};
			}

			&:disabled {
				background-color: ${({ theme }) => theme.colors.PrimaryDisabledColor};
			}

			&:focus {
				background-color: ${({ theme }) => theme.colors.PrimaryFocusColor};
			}
		`};

	${(props) =>
		props.buttonType === 'secondary' &&
		css`
			background-color: ${({ theme }) => theme.colors.SecondaryColor};

			&:hover {
				background-color: ${({ theme }) => theme.colors.SecondaryHoverColor};
			}

			&:active {
				background-color: ${({ theme }) => theme.colors.SecondaryActiveColor};
			}

			&:disabled {
				background-color: ${({ theme }) => theme.colors.SecondaryDisabledColor};
			}

			&:focus {
				background-color: ${({ theme }) => theme.colors.SecondaryFocusColor};
			}
		`};

	${(props) =>
		props.buttonType === 'danger' &&
		css`
			background-color: ${({ theme }) => theme.colors.DangerColor};

			&:hover {
				background-color: ${({ theme }) => theme.colors.DangerHoverColor};
			}

			&:active {
				background-color: ${({ theme }) => theme.colors.DangerActiveColor};
			}

			&:disabled {
				background-color: ${({ theme }) => theme.colors.DangerDisabledColor};
			}

			&:focus {
				background-color: ${({ theme }) => theme.colors.DangerFocusColor};
			}
		`};

	${(props) =>
		props.buttonType === 'warning' &&
		css`
			background-color: ${({ theme }) => theme.colors.WarningColor};

			&:hover {
				background-color: ${({ theme }) => theme.colors.WarningHoverColor};
			}

			&:active {
				background-color: ${({ theme }) => theme.colors.WarningActiveColor};
			}

			&:disabled {
				background-color: ${({ theme }) => theme.colors.WarningDisabledColor};
			}

			&:focus {
				background-color: ${({ theme }) => theme.colors.WarningFocusColor};
			}
		`};

	${(props) =>
		props.buttonType === 'success' &&
		css`
			background-color: ${({ theme }) => theme.colors.SuccessColor};

			&:hover {
				background-color: ${({ theme }) => theme.colors.SuccessHoverColor};
			}

			&:active {
				background-color: ${({ theme }) => theme.colors.SuccessActiveColor};
			}

			&:disabled {
				background-color: ${({ theme }) => theme.colors.SuccessDisabledColor};
			}

			&:focus {
				background-color: ${({ theme }) => theme.colors.SuccessFocusColor};
			}
		`};
`;
