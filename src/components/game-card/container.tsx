import { ReactNode } from 'react'
import * as S from './styles'

type GameCardContainerProps = {
  children: ReactNode
  color: string
  size?: 'medium' | 'large'
}

export const GameCardContainer = ({
  children,
  color,
  size = 'large',
}: GameCardContainerProps) => {
  return (
    <S.Wrapper color={color} size={size} data-cy='game-card'>
      {children}
    </S.Wrapper>
  )
}
