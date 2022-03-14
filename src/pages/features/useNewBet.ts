import { useEffect } from 'react'
import { selectCart } from '@/features/cart-slice'
import { fetchGames, selectGame, selectGames } from '@/features/games-slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

export const useNewBet = () => {
  const {
    types: games,
    isLoading,
    selectedGame,
  } = useAppSelector(selectGames)

  const { items: cartItems } = useAppSelector(selectCart)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGames())
  }, [dispatch])

  const onSelectedGame = (id: number) => {
    return () => { dispatch(selectGame(id)) }
  }

  return {
    games,
    cartItems,
    isLoading,
    selectedGame,
    onSelectedGame,
  }
}
