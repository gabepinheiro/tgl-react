import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type NumberButtonProps = {
  number: number
} & ButtonHTMLAttributes<HTMLButtonElement>

export const NumberButton = ({ number, ...props }: NumberButtonProps) => {
  const newNumber = String(number).padStart(2, '0')

  return (
    <S.Wrapper {...props}>
      {newNumber}
    </S.Wrapper>
  )
}
