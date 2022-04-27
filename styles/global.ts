import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`

  :root {
    font-size: 62.5%; // 10px

    @media (max-width: 800px) {
      font-size: 31.25%;
    }
  }

  html,
  body, body * {
    font-family: Helvetica, Arial, sans-serif;
    // 22/04/2022 -> adição do background para correção da linha branca
    background-color: ${colors.gray};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
