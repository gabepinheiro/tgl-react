import { useNewBet } from '@/pages/features/new-bet/useNewBet'

import { Button } from '@/components/button'
import { Cart } from '@/components/cart'
import { GameButton } from '@/components/game-button'
import { NumberButton } from '@/components/number-button'
import { Loading } from '@/components/loading'
import { RiShoppingCartLine as CartIcon } from 'react-icons/ri'

import { theme } from '@/styles/theme'
import { Heading, Text } from '@/pages/pages-styles'
import * as S from './styles'

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
    onDeleteItemCart,
    onSaveBet,
  } = useNewBet()

  if (isLoading) {
    return <Loading />
  }

  const numbers =
    new Array(selectedGame?.range).fill(null).map((_, index) => index + 1)

  return (
    <S.Content>
      <S.ContainerNewBet>
        <Heading upcase>New bet <span>for {selectedGame!.type}</span></Heading>

        <S.ContainerChooseGame>
          <Text style={{
            fontSize: '1.7rem',
            fontWeight: 'bold',
            fontStyle: 'italic',
            marginBottom: '2.0rem',
          }}
          >
            Choose game
          </Text>
          <S.ContainerGameButtons>
            {games.map(game => (
              <GameButton
                key={game.type}
                color={game.color}
                selected={game.selected}
                onClick={onSelectedGame(game.id)}
                style={{ flexShrink: '0' }}
              >
                {game.type}
              </GameButton>
            ))}
          </S.ContainerGameButtons>
        </S.ContainerChooseGame>
        <S.BetDescription>
          <Text
            style={{
              fontSize: '1.7rem',
              fontWeight: 'bold',
              fontStyle: 'italic',
              lineHeight: '2.4rem',
            }}
          >
            Fill your bet
          </Text>
          <Text style={{
            fontSize: '1.7rem',
            fontStyle: 'italic',
            lineHeight: '2.4rem',
          }}
          >
            {selectedGame?.description}
          </Text>
        </S.BetDescription>
        <S.ContainerNumbers>
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
        </S.ContainerNumbers>
        <S.ContainerButtons>
          <Button variant='outline' onClick={onCompleteGame}>Complete game</Button>
          <Button variant='outline' onClick={onClearGame}>Clear game</Button>
          <Button
            className='btn-add-to-cart'
            onClick={onAddToCart}
          >
            <CartIcon size={25} /> Add to cart
          </Button>
        </S.ContainerButtons>
      </S.ContainerNewBet>
      <S.ContainerCart>
        <Cart
          items={cart.items}
          totalValue={cart.totalValue}
          onDeleteItem={onDeleteItemCart}
          onSaveBet={onSaveBet}
        />
      </S.ContainerCart>
      {/* <S.Box style={{ gridColumn: '1/3' }}>
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
          <S.Box style={{
            display: 'flex',
            gap: '2.5rem',
            overflowX: 'scroll',
            paddingBottom: '0.5rem',
          }}
          >
            {games.map(game => (
              <GameButton
                key={game.type}
                color={game.color}
                selected={game.selected}
                onClick={onSelectedGame(game.id)}
                style={{ flexShrink: '0' }}
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
        <Cart
          items={cart.items}
          totalValue={cart.totalValue}
          onDeleteItem={onDeleteItemCart}
          onSaveBet={onSaveBet}
        />
      </S.Box> */}
    </S.Content>
  )
}

export default NewBetPage
