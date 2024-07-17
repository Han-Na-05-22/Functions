import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *{
        margin:0; 
        padding:0;
        box-sizing:border-box;
        font-family: 'OrbitronMedium';
        background-color: rgba(255,255,255,0.8);
    };

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    };

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    body{
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }

    /* 텍스트 타이핑 css 효과 */
    .typing-text{
        width: 16ch;
        white-space: nowrap;
        overflow: hidden;
        border-right: .05em solid;
        animation: typing 8s steps(16),
                caret 1s steps(1) infinite;
    };

    @keyframes typing {
        from { width: 0 }
    }

    @keyframes caret {
        50% { border-right-color: transparent; }
    }
`;
