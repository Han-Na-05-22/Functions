import { create } from 'zustand';

type loadingStateTypes = {
	isLoading: boolean;
	showLoading: () => void;
	hiddenLoading: () => void;
};

export const useLoading = create<loadingStateTypes>((set) => ({
	isLoading: false,
	showLoading: () =>
		set(() => ({
			isLoading: true,
		})),
	hiddenLoading: () =>
		set(() => ({
			isLoading: false,
		})),
}));
