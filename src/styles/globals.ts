import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 1080px) {
      font-size: 56.25%;
    }

    @media (max-width: 720px) {
      font-size: 50%;
    }
  }

  ${({ theme }) => css`
    body {
      background-color:  ${theme.colors.mainBg};
      color: ${theme.colors.gray600};
      font-size: 1.6rem;
    }

    body, input, textarea, button {
      font-family: ${theme.font.family};
    }
  `}

  button {
    cursor: pointer;
  }
`
