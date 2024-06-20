import { BasicTableProps } from './interface';
import * as S from './style';

const BasicTable = ({ className, theadData, children }: BasicTableProps) => {
	return (
		<S.BasicTableContainer className={className}>
			<thead>
				<tr>
					{theadData.length !== 0 &&
						theadData.map((thead, idx) => <th key={idx}>{thead}</th>)}
				</tr>
			</thead>
			<tbody>{children}</tbody>
		</S.BasicTableContainer>
	);
};

export default BasicTable;
