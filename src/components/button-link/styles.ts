import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { LinkModifiers } from '@/styles/link-modifiers'

import { Props } from './index'

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
    ${!!color && LinkModifiers[color](theme)};
    ${!!size && LinkModifiers[size]}
  `}
`
