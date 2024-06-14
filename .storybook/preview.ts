import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/assets/styles/theme'; // 테마 파일 경로
import { GlobalStyle } from '../src/assets/styles/global';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

export const decorators = [
	withThemeFromJSXProvider({
		themes: {
			light: theme,
			dark: theme,
		},
		defaultTheme: 'light',
		Provider: ThemeProvider,
		GlobalStyles: GlobalStyle,
	}),
];
const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
