import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *{
        font-family: 'OrbitronMedium';
        background-color: rgba(255,255,255,0.8);
        box-sizing: border-box;
    }

    body{
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }
`;
