import styled, { css } from 'styled-components'
import { LinkModifiers } from '@/styles/link-modifiers'
import { Link } from 'react-router-dom'

import { CustomLinkProps } from '.'

type WrapperProps = Pick<CustomLinkProps, 'color' | 'size'>

export const Wrapper = styled(Link)<WrapperProps>`
  text-decoration: none;
  font-weight: bold;
  font-style: italic;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  ${({ theme, size, color }) => css`
    ${!!color && LinkModifiers[color](theme)};
    ${!!size && LinkModifiers[size]};
  `}
`
