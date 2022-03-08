import { Link } from 'react-router-dom'
import styled, { css, DefaultTheme } from 'styled-components'

import { Props } from './index'

const LinkModifiers = {
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
}

export const LinkStyled = styled(Link)<Pick<Props, 'color'>>`
    text-decoration: none;
    font-weight: bold;
    font-size: 3.5rem;
    font-style: italic;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

  ${({ color, theme }) => css`
    ${!!color && LinkModifiers[color](theme)};
  `}
`
