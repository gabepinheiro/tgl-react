import { ButtonLink } from '../button-link'
import { AiOutlineArrowRight as ArrowRightIcon } from 'react-icons/ai'
import { CartItem } from '@/features/cart-slice'

import {
  GameAmount,
  GameCardContainer,
  GameCardContent,
  GameName,
  GameNumbers,
} from '../game-card'

import * as S from './styles'

type CartProps = {
  items: CartItem[] | null
}

export const Cart = ({ items }: CartProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Heading>Cart</S.Heading>

        <S.CartItems>
          {!items && <p>Carinho vazio.</p>}
          {!!items && items.map(item => (
            <S.CartItem key={item.id}>
              <GameCardContainer color={item.color} size='medium'>
                <GameCardContent>
                  <GameNumbers>
                    {item.numbers
                      .map(number => String(number)
                        .padStart(2, '0'))
                      .join(', ')}
                  </GameNumbers>
                  <S.GameNameAmountWrapper>
                    <GameName>{item.type}</GameName>
                    <GameAmount>R$ {item.price}</GameAmount>
                  </S.GameNameAmountWrapper>
                </GameCardContent>
              </GameCardContainer>
            </S.CartItem>
          ))}
        </S.CartItems>

        <S.TotalAmount>
          Cart <span>total: R$ 0,00</span>
        </S.TotalAmount>
      </S.Content>
      <S.ButtonSaveWrapper>
        <ButtonLink size='large'>
          Save <ArrowRightIcon />
        </ButtonLink>
      </S.ButtonSaveWrapper>
    </S.Wrapper>
  )
}
