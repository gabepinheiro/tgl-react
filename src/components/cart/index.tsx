import { ButtonLink } from '../button-link'
import { AiOutlineArrowRight as ArrowRightIcon } from 'react-icons/ai'

import * as S from './styles'
import {
  GameAmount,
  GameCardContainer,
  GameCardContent,
  GameName,
  GameNumbers,
} from '../game-card'

const items = [
  {
    name: 'Lotofácil',
    amount: 2.50,
    numbers: [1, 2, 4, 5, 6, 7, 9, 15, 17, 20, 21, 22, 23, 24, 25],
    color: '#7F3992',
  },
  {
    name: 'Mega-Sena',
    amount: 2.50,
    numbers: [1, 2, 4, 5, 6, 7, 9, 15, 17, 20, 21, 22, 23, 24, 25],
    color: '#01AC66',
  },
  {
    name: 'Lotomania',
    amount: 2.50,
    numbers: [1, 2, 4, 5, 6, 7, 9, 15, 17, 20, 21, 22, 23, 24, 25],
    color: '#F79C31',
  },
]

export const Cart = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Heading>Cart</S.Heading>

        <S.CartItems>
          {items.map(item => (
            <S.CartItem key={item.name}>
              <GameCardContainer color={item.color} size='medium'>
                <GameCardContent>
                  <GameNumbers>
                    {item.numbers
                      .map(number => String(number)
                        .padStart(2, '0'))
                      .join(', ')}
                  </GameNumbers>
                  <S.GameNameAmountWrapper>
                    <GameName>{item.name}</GameName>
                    <GameAmount>R$ {item.amount}</GameAmount>
                  </S.GameNameAmountWrapper>
                </GameCardContent>
              </GameCardContainer>
            </S.CartItem>
          ))}
        </S.CartItems>

        <S.TotalAmount>
          Cart <span>total: R$ 7,00</span>
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
