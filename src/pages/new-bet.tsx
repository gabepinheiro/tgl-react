import { useNewBet } from './features/new-bet/useNewBet'

import { Button } from '@/components/button'
import { Cart } from '@/components/cart'
import { GameButton } from '@/components/game-button'
import { NumberButton } from '@/components/number-button'
import { RiShoppingCartLine as CartIcon } from 'react-icons/ri'

import * as S from './styles'
import { theme } from '@/styles/theme'

function NewBetPage () {
  const {
    games,
    cart,
    currentBet,
    isLoading,
    selectedGame,
    onSelectedGame,
    onAddToCart,
    onToggleNumber,
    onClearGame,
    onCompleteGame,
  } = useNewBet()

  // TODO: Make Loading (Spinner) component
  if (isLoading) {
    return <p>Carregando..</p>
  }

  const numbers =
    new Array(selectedGame?.range).fill(null).map((_, index) => index + 1)

  return (
    <S.Content>
      <S.Box style={{ gridColumn: '1/3' }}>
        <S.Heading
          upcase
          style={{ marginBottom: '3.0rem' }}
        >
          New bet <span>for {selectedGame!.type}</span>
        </S.Heading>
        <S.Box style={{ marginBottom: '2.8rem' }}>
          <S.Text
            style={{
              fontSize: '1.7rem',
              fontWeight: 'bold',
              fontStyle: 'italic',
              marginBottom: '2.0rem',
            }}
          >
            Choose game
          </S.Text>
          <S.Box style={{ display: 'flex', gap: '2.5rem' }}>
            {games.map(game => (
              <GameButton
                key={game.type}
                color={game.color}
                selected={game.selected}
                onClick={onSelectedGame(game.id)}
              >
                {game.type}
              </GameButton>
            ))}
          </S.Box>
        </S.Box>
        <S.Box style={{ marginBottom: '2.6rem' }}>
          <S.Text
            style={{
              fontSize: '1.7rem',
              fontWeight: 'bold',
              fontStyle: 'italic',
              lineHeight: '2.4rem',
            }}
          >
            Fill your bet
          </S.Text>
          <S.Text style={{
            fontSize: '1.7rem',
            fontStyle: 'italic',
            lineHeight: '2.4rem',
          }}
          >
            {selectedGame?.description}
          </S.Text>
        </S.Box>
        <S.Box style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.2rem',
          marginBottom: '4.0rem',
        }}
        >
          {numbers.map((number) => (
            <NumberButton
              onClick={onToggleNumber(number)}
              key={number}
              number={number}
              style={{
                backgroundColor: currentBet.numbers.includes(number)
                  ? selectedGame?.color
                  : theme.colors.cyan,
              }}
            />
          ))}
        </S.Box>
        <S.Box style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.6rem',
        }}
        >
          <Button variant='outline' onClick={onCompleteGame}>Complete game</Button>
          <Button variant='outline' onClick={onClearGame}>Clear game</Button>
          <Button
            style={{ marginLeft: 'auto' }}
            onClick={onAddToCart}
          >
            <CartIcon size={25} /> Add to cart
          </Button>
        </S.Box>
      </S.Box>
      <S.Box style={{ gridColumn: '3/-1' }}>
        <Cart items={cart.items} totalValue={cart.totalValue} />
      </S.Box>
    </S.Content>
  )
}

export default NewBetPage
