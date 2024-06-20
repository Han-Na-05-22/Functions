import { useState } from 'react';
import { TabsProps } from './interface';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const Tabs = ({ className, tabList }: TabsProps) => {
	const navigate = useNavigate();

	const [tabs, setTabs] = useState(tabList || []);

	const moveToTab = (name: string) => {
		const result = tabs.map((tab, idx) => {
			if (tab.name === name) {
				return {
					...tab,
					isActive: true,
				};
			}

			return {
				...tab,
				isActive: false,
			};
		});

		setTabs(result);
	};

	return (
		<S.TabsContainer className={className}>
			{tabs.length !== 0 &&
				tabs.map((tab, idx) => (
					<div
						key={idx}
						className={`tab-content ${tab.isActive ? 'active' : ''}`}
					>
						<span
							className="tab-text"
							onClick={() => {
								moveToTab(tab.name);
								// 실제 사용 시 navigate 주석 제거 후 상황에 맞게 넣어줘야함
								// navigate(`/${tab.name}`);
							}}
						>
							{tab.name}
						</span>
					</div>
				))}
		</S.TabsContainer>
	);
};

export default Tabs;
