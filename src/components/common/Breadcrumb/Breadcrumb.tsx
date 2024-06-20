import useLocationUrl from 'hooks/useLocationUrl';
import * as S from './style';
import { useEffect, useState } from 'react';

const Breadcrumb = () => {
	const { pathname, pathnameArray } = useLocationUrl();
	const [breadcrumbs, setBreadcrumbs] = useState<any[]>([]);

	useEffect(() => {
		setBreadcrumbs(pathnameArray);
	}, [pathname]);

	return (
		<S.BreadcrumbContainer>
			{breadcrumbs.length !== 0 &&
				breadcrumbs[0] !== '' &&
				breadcrumbs.map((breadcrumb, idx) => (
					<div key={idx}>
						<span className="breadcrumb-text">{breadcrumb}</span>
						<div className="slash">
							{breadcrumbs.length > 0 &&
							idx === 0 &&
							idx !== breadcrumbs.length - 1
								? '/'
								: ''}
						</div>
					</div>
				))}
		</S.BreadcrumbContainer>
	);
};

export default Breadcrumb;
