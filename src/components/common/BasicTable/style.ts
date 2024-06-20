import styled from 'styled-components';

export const BasicTableContainer = styled.table`
	width: 100%;
	border-collapse: collapse;
	table-layout: auto;
	font-size: 12px;
	border: 1px solid #ddd;

	margin: 20px 0px;

	thead {
		width: 100%;
		border-bottom: 2px solid #ddd;

		tr {
			width: 100%;
			th {
				padding: 8px 16px;
				text-align: left;
			}
		}
	}

	tbody {
		width: 100%;
		tr {
			width: 100%;
			border-bottom: 1px solid #ddd;
			td {
				padding: 8px 16px;
			}
		}
	}
`;
