import { LinkProps } from 'react-router-dom'
import { ReactNode } from 'react'

import * as S from './styles'

export type CustomLinkProps = {
  children: ReactNode
  color?: 'black' | 'greenLight'
  size?: 'medium' | 'large'
} & LinkProps

export const CustomLink = ({
  children,
  size = 'medium',
  color = 'black',
  ...props
}: CustomLinkProps) => {
  return (
    <S.Wrapper size={size} color={color} {...props}>
      {children}
    </S.Wrapper>
  )
}
