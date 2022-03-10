import { ReactNode } from 'react'
import * as S from './styles'

type GameCardContainerProps = {
  children: ReactNode
  color: string
}

export const GameCardContainer = ({
  children,
  color,
}: GameCardContainerProps) => {
  return (
    <S.Wrapper color={color}>
      {children}
    </S.Wrapper>
  )
}
