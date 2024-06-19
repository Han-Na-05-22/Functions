import styled from 'styled-components';

export const TextareaContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px 0px;

	.label-container {
		.required {
			margin-right: 4px;
			font-size: 12px;
		}

		.label-text {
			font-size: 12px;
		}
	}

	.textarea-input {
		height: 150px;
		padding: 4px 0px 0px 4px;
		font-size: 12px;
	}
`;
