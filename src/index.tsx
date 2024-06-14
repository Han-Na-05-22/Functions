import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/global';
import theme from 'assets/styles/theme';

const container = document.getElementById('root');
const root = createRoot(container!); // '!' 연산자는 container가 null이 아님을 명시합니다.
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<GlobalStyle />
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
);
