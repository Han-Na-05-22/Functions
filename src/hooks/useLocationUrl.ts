import { useLocation } from 'react-router-dom';

const useLocationUrl = () => {
	const location = useLocation();
	const pathnameArray = location.pathname.split('/').filter((path) => path);

	const locationContent = {
		hash: location.hash,
		key: location.key,
		pathname: location.pathname,
		search: location.search,
		state: location.state,
		pathnameArray: pathnameArray,
	};

	return locationContent;
};

export default useLocationUrl;
