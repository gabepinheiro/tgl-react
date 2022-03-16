import { ButtonHTMLAttributes, ReactNode } from 'react'

import * as S from './styles'

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonLinkProps = {
  children: ReactNode
  color?: 'black' | 'greenLight'
  size?: 'medium' | 'large'
} & ButtonType

export const ButtonLink = ({
  children,
  color = 'black',
  size = 'medium',
  ...props
}: ButtonLinkProps) => {
  return (
    <S.Wrapper
      color={color}
      size={size}
      {...props}
    >
      {children}
    </S.Wrapper>
  )
}
