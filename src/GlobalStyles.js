import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        color: #404040;
        line-height: 24px;
        font-weight: 400;
        margin: 0;        
        padding: 60px 0 0;

        @media screen and (min-width: 1280px) {
            padding: 80px 0 0;
        }
    }
    button:focus{
        outline: none;
    }
    h1, h2, h3, h4, h5, h6 {
        color: #2acb35;
        margin: 0;
        font-weight: 600;
    }
    h1 {
        color: #fff;
        font-size: 50px;
        text-shadow: 0px 0px 4px rgba(0,0,0,0.7);
        line-height: 70px;
        text-align: center;
        padding: 20px;       

        @media screen and (min-width: 768px) {
            font-size: 60px;
        }
    }
    h2 {
        font-size: 30px;
        text-align: center;
        margin: 50px 0;
        line-height: 40px;
    }
    h3 {
        margin: 20px 0;
    }
    p {
        text-align: justify;
        padding-bottom: 20px;
        margin: 0;
    }
    a,
    a:hover,
    a:active,
    a:focus
    a.active {
        transition: all 0.5s ease 0s;
        text-decoration: none;
        outline: none;
        color: #2acb35;
    }
    img {
        max-width: 100%;
        height: auto;
    }
    i {
        font-style: normal;
    }
    ul,
    li {
        list-style: none;
        margin: 0;
        padding: 0;
        line-height: 28px;
    }
    .text-right {
        text-align: right;
    }
`;

export default GlobalStyles;
