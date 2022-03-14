import { useEffect, useReducer } from 'react'
import { selectCart } from '@/features/cart-slice'
import { fetchGames, selectGame, selectGames } from '@/features/games-slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { betInitialState, betReducer, ActionTypes } from './reducer'

export const useNewBet = () => {
  const {
    types: games,
    isLoading,
    selectedGame,
  } = useAppSelector(selectGames)
  const { items: cartItems } = useAppSelector(selectCart)
  const gamesDispatch = useAppDispatch()

  const [currentBet, currentBetDispatch] = useReducer(betReducer, betInitialState)

  useEffect(() => {
    gamesDispatch(fetchGames())
  }, [gamesDispatch])

  useEffect(() => {
    currentBetDispatch({ type: ActionTypes.CLEAR_GAME })
    currentBetDispatch({
      type: ActionTypes.SET_REMAINING,
      payload: selectedGame?.max_number,
    })
  }, [currentBetDispatch, selectedGame])

  const onSelectedGame = (id: number) => {
    return () => { gamesDispatch(selectGame(id)) }
  }

  const onToggleNumber = (num: number) => {
    return () => {
      const isNumberAdded = currentBet.numbers.includes(num)
      if (isNumberAdded) {
        return currentBetDispatch({ type: ActionTypes.REMOVE_NUMBER, payload: num })
      }

      if (currentBet.remaining === 0) {
        return alert('Jogo completo')
      }

      return currentBetDispatch({ type: ActionTypes.ADD_NUMBER, payload: num })
    }
  }

  const onAddToCart = () => {
    if (currentBet.remaining) {
      return alert(`Ainda restam ${currentBet.remaining} números para completar o jogo!`)
    }

    console.log('Jogo adicionado com succeso:', currentBet.numbers)
    currentBetDispatch({ type: ActionTypes.CLEAR_GAME, payload: selectedGame?.max_number })
  }

  const onClearGame = () => {
    if (!currentBet.numbers.length) {
      return alert('O jogo já está limpo')
    }
    currentBetDispatch({ type: ActionTypes.CLEAR_GAME, payload: selectedGame?.max_number })
  }

  return {
    games,
    cartItems,
    currentBet,
    currentBetDispatch,
    isLoading,
    selectedGame,
    onSelectedGame,
    onToggleNumber,
    onAddToCart,
    onClearGame,
  }
}
