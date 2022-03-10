import * as S from './styles'

type NumberButtonProps = {
  number: number
}

export const NumberButton = ({ number }: NumberButtonProps) => {
  const newNumber = String(number).padStart(2, '0')

  return (
    <S.Wrapper>
      {newNumber}
    </S.Wrapper>
  )
}
