import styled, { css } from 'styled-components'
import { LinkModifiers } from '@/styles/link-modifiers'

import { ButtonLinkProps } from './index'

type WrapperProps = Pick<ButtonLinkProps, 'color' | 'size'>

export const Wrapper = styled.button<WrapperProps>`
    border: 0;
    background-color: transparent;
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
