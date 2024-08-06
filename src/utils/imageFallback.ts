import constants from 'constants/index';

export const handleErrorImage = (
	e: React.SyntheticEvent<HTMLImageElement, Event>,
) => {
	e.currentTarget.src = constants.IMAGE_FALLBACK_URL;
};
