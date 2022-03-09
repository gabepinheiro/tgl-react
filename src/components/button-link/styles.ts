import { Link } from 'react-router-dom'
import styled, { css, DefaultTheme } from 'styled-components'

import { Props } from './index'

const Modifiers = {
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
  `,
}

export const ButtonLinkStyled = styled(Link)<Pick<Props, 'color' | 'size'>>`
    border: 0;
    background-color: transparent;
    text-decoration: none;
    font-weight: bold;
    font-style: italic;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

  ${({ theme, color, size }) => css`
    ${!!color && Modifiers[color](theme)};
    ${!!size && Modifiers[size]}
  `}
`
