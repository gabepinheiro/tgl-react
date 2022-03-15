import { useRef, useState } from 'react'
import { Cart as CartState, CartItem } from '@/features/cart-slice'
import { getCurrencyFormatted } from '@/utils/formats'

import { ButtonLink } from '../button-link'
import { DeleteItemModal } from '@/components/deleteitem-modal'

import { AiOutlineArrowRight as ArrowRightIcon } from 'react-icons/ai'
import { BsTrash as DeleteIcon } from 'react-icons/bs'

import {
  GameAmount,
  GameCardContainer,
  GameCardContent,
  GameName,
  GameNumbers,
} from '../game-card'

import * as S from './styles'
import { toast } from 'react-toastify'

type CartProps = {
  onDeleteItem: (id: string) => () => void
  onSaveBet: () => void
} & CartState

export const Cart = ({
  items,
  totalValue,
  onDeleteItem,
  onSaveBet,
}: CartProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const handleRefOnDeleteItem = useRef<Function>()

  const handleToggleDeleteItemModal = () => {
    setIsOpenModal(state => !state)
  }

  const handleDeleteItem = (item: CartItem) => {
    handleToggleDeleteItemModal()

    handleRefOnDeleteItem.current = () => {
      onDeleteItem(item.id)()
      toast.success(
        `Jogo: ${item.type} - ${item.numbers.join(', ')} foi deletado com sucesso.
      `)
    }
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.Heading>Cart</S.Heading>

        <S.CartItems>
          {!items && <p>Carinho vazio.</p>}
          {!!items && items.map(item => (
            <S.CartItem key={item.id}>
              <S.ButtonDelete onClick={() => handleDeleteItem(item)}>
                <DeleteIcon size={27} />
              </S.ButtonDelete>
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
        <ButtonLink size='large' onClick={onSaveBet}>
          Save <ArrowRightIcon />
        </ButtonLink>
      </S.ButtonSaveWrapper>

      <DeleteItemModal
        isOpen={isOpenModal}
        onRequestClose={handleToggleDeleteItemModal}
        onDeleteItem={handleRefOnDeleteItem.current}
      />
    </S.Wrapper>
  )
}
