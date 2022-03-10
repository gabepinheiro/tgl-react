import { ReactNode, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type GameButtonProps = {
  children: ReactNode
  color: string
  selected?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const GameButton = ({
  children,
  color,
  selected = false,
  ...props
}: GameButtonProps) => {
  return (
    <S.Wrapper
      color={color}
      selected={selected}
      {...props}
    >
      {children}
    </S.Wrapper>
  )
}
