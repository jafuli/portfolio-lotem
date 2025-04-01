import 'normalize.css';
import { css } from '@emotion/react';

const globalStyles = css`
  @font-face {
    font-family: 'Matter';
    src: url('/fonts/Matter/Matter-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Matter';
    src: url('/fonts/Matter/Matter-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Matter';
    src: url('/fonts/Matter/Matter-Heavy.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  :root {
    --font-size: 16px;
    --primary-color: #0070f3;
    --secondary-color: #ff4081;
    --background-color: #f5f5f5;
    --text-color: #333;
  }

  body {
    font-family: 'Matter', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    overflow: hidden;
    height: 100%;
  }

  body {
    height: 100%;
    overflow: auto;
    font-family: 'Matter', sans-serif;
    font-size: 16px;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }
`;

export default globalStyles;
