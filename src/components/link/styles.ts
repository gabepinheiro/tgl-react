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
  ${({ color, theme }) => css`
    text-decoration: none;
    font-size: 3.5rem;
    font-weight: bold;
    font-style: italic;
    ${!!color && LinkModifiers[color](theme)};
  `}
`
