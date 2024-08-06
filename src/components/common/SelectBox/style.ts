import styled from 'styled-components';

export const SelectBoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px 0px;

	.label-container {
		.label-text {
			line-height: 20px;
			color: ${({ theme }) => theme.colors.GrayscaleBorderColor50};
		}
	}

	.select-input {
		.react-select__control {
			border-radius: 8px;
		}
		.react-select__menu {
			border-radius: 8px;
			background-color: white;
			overflow-y: auto;
		}
		.react-select__option {
			display: flex;
			align-items: center;
		}
	}

	.check-icon {
		margin-right: 4px;
	}
`;
