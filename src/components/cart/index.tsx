import { ButtonLink } from '../button-link'
import { AiOutlineArrowRight as ArrowRightIcon } from 'react-icons/ai'

import * as S from './styles'

export const Cart = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Heading>Cart</S.Heading>
        <S.TotalAmount>
          Cart <span>total: R$ 7,00</span>
        </S.TotalAmount>
      </S.Content>
      <S.ButtonSaveWrapper>
        <ButtonLink color='greenLight' size='large'>
          Save <ArrowRightIcon />
        </ButtonLink>
      </S.ButtonSaveWrapper>
    </S.Wrapper>
  )
}
