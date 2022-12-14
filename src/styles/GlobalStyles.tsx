import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 100%;
  }

  html {
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    color: var(--neutrals-text);
    background: var(--neutrals-background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.2);
    border-radius: 5px;
  }

  ::-webkit-scrollbar {
      width: 6px!important;
      height: 6px!important;
  }

  ::-webkit-scrollbar-track {
      background: hsla(0,0%,100%,.1);
  }

  .hidden {
    display: none;
    visibility: hidden;
  }
`;

export default GlobalStyles;
