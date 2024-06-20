import { useState } from 'react';
import { BasicListProps } from './interface';
import * as S from './style';
import BasicListItem from './BasicListItem/BasicListItem';

const BasicList = ({
	className,
	iconOrImg = 'icon',
	basicLists,
}: BasicListProps) => {
	const [lists, setLists] = useState(basicLists || []);

	return (
		<S.BasicListContainer className={className}>
			{lists.length !== 0 &&
				lists.map((list) => (
					<BasicListItem
						key={list.id}
						id={list.id}
						title={list.title}
						iconSrc={iconOrImg === 'icon' ? list.iconSrc : ''}
						imgSrc={iconOrImg === 'image' ? list.imgSrc : ''}
					/>
				))}
		</S.BasicListContainer>
	);
};

export default BasicList;
