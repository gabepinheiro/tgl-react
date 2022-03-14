import { ButtonLink } from '../button-link'
import { AiOutlineArrowRight as ArrowRightIcon } from 'react-icons/ai'
import { Cart as CartState } from '@/features/cart-slice'

import {
  GameAmount,
  GameCardContainer,
  GameCardContent,
  GameName,
  GameNumbers,
} from '../game-card'

import * as S from './styles'
import { getCurrencyFormatted } from '@/utils/formats'

type CartProps = CartState

export const Cart = ({ items, totalValue }: CartProps) => {
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
                    <GameAmount>{getCurrencyFormatted(item.price)}</GameAmount>
                  </S.GameNameAmountWrapper>
                </GameCardContent>
              </GameCardContainer>
            </S.CartItem>
          ))}
        </S.CartItems>

        <S.TotalAmount>
          Cart <span>total: {getCurrencyFormatted(totalValue)}</span>
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
