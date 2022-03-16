import { css, DefaultTheme } from 'styled-components'

export const LinkModifiers = {
  black: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray600};
    &:visited {
      color: ${theme.colors.gray600};
    }
  `,
  greenLight: (theme: DefaultTheme) => css`
    color: ${theme.colors.greenLight};
    &:visited {
      color: ${theme.colors.greenLight};
    }
  `,
  medium: () => css`
    font-size: 2.0rem;

  `,
  large: () => css`
    font-size: 3.5rem;
    @media (max-width: 468px) {
      font-size: 2.4rem;
    }
  `,
}
