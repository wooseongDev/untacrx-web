import { css } from '@emotion/react';

const globalStyle = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');

  html {
    font-size: 16px;
    box-sizing: border-box;
    font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont,
      system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', sans-serif;
    color: #24243f;

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

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.875rem;
  }

  h6 {
    font-size: 0.75rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  input {
    outline: none;
  }
`;

export default globalStyle;
