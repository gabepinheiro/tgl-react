import { ButtonHTMLAttributes, ReactNode } from 'react'

import * as S from './styles'

export type ButtonProps = {
  children: ReactNode | ReactNode[]
  variant?: 'outline'
  color?: 'green'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, color = 'green', variant }: ButtonProps) => {
  return (
    <S.Wrapper color={color} variant={variant}>
      {children}
    </S.Wrapper>
  )
}
