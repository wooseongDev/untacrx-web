import { css } from '@emotion/react';

const globalStyle = css`
  html {
    font-size: 16px;
    box-sizing: border-box;
    * {
      line-height: 1.2;
      box-sizing: inherit;
    }
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
  }

  input {
    outline: none;
  }
`;

export default globalStyle;
