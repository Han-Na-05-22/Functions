import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";


const container = document.getElementById('root');
const root = createRoot(container!); // '!' 연산자는 container가 null이 아님을 명시합니다.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
