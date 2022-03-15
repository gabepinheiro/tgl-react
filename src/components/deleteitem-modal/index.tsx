import Modal from 'react-modal'

import { Button } from '../button'

import * as S from './styles'

export type DeleteItemModalProps = {
  isOpen: boolean
  onRequestClose: () => void
  onDeleteItem: Function | undefined
}

Modal.setAppElement('[data-js=root]')

export const DeleteItemModal = ({
  isOpen,
  onRequestClose,
  onDeleteItem,
}: DeleteItemModalProps) => {
  const closeModal = () => {
    onRequestClose()
  }

  const handleClick = () => {
    if (onDeleteItem) {
      onDeleteItem()
      closeModal()
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <S.Content>
        <h2>Deseja realmente excluir o item ?</h2>
        <S.ButtonsWrapper>
          <Button onClick={handleClick}>Sim</Button>
          <Button variant='outline' onClick={closeModal}>Não</Button>
        </S.ButtonsWrapper>
      </S.Content>
    </Modal>
  )
}
