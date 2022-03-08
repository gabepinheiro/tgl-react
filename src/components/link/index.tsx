import { ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'

import { LinkStyled } from './styles'

export type Props = {
  children: ReactNode
  color?: 'black' | 'greenLight'
} & LinkProps

export const Link = ({
  children,
  color = 'black',
  ...props
}: Props) => {
  return (
    <LinkStyled {...props} color={color}>
      {children}
    </LinkStyled>
  )
}
