import { useEffect, useReducer } from 'react'
import { selectCart, addItemToCart } from '@/features/cart-slice'
import { fetchGames, selectGame, selectGames } from '@/features/games-slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { betInitialState, betReducer, ActionTypes } from './reducer'
import { toast } from 'react-toastify'

export const useNewBet = () => {
  const {
    types: games,
    isLoading,
    selectedGame,
  } = useAppSelector(selectGames)

  const { items: cartItems } = useAppSelector(selectCart)

  const appDispatch = useAppDispatch()

  const [currentBet, currentBetDispatch] = useReducer(betReducer, betInitialState)

  useEffect(() => {
    appDispatch(fetchGames())
  }, [appDispatch])

  useEffect(() => {
    currentBetDispatch({ type: ActionTypes.CLEAR_GAME })
    currentBetDispatch({
      type: ActionTypes.SET_REMAINING,
      payload: selectedGame?.max_number,
    })
  }, [currentBetDispatch, selectedGame])

  const onSelectedGame = (id: number) => {
    return () => { appDispatch(selectGame(id)) }
  }

  const onToggleNumber = (num: number) => {
    return () => {
      console.log('number:', num)
      const isNumberAdded = currentBet.numbers.includes(num)
      if (isNumberAdded) {
        return currentBetDispatch({ type: ActionTypes.REMOVE_NUMBER, payload: num })
      }

      if (currentBet.remaining === 0) {
        return toast.warn(`Todos os ${selectedGame?.max_number} números do jogo já foram selecionados!`)
      }

      return currentBetDispatch({ type: ActionTypes.ADD_NUMBER, payload: num })
    }
  }

  const getMsgRemainingNumbers = () => {
    const remaining = currentBet.remaining
    const verbe = remaining > 1 ? 'Restam' : 'Resta'
    const SingularOrPlural = remaining > 1 ? 'números' : 'número'

    return `${verbe} ${remaining} ${SingularOrPlural} para completar o jogo!`
  }

  const onAddToCart = () => {
    if (currentBet.remaining) {
      return toast.warn(getMsgRemainingNumbers())
    }

    const game = {
      id: String(Math.floor(Math.random() * 100)),
      game_id: selectedGame?.id!,
      numbers: currentBet.numbers.sort((a, b) => a - b),
      price: selectedGame?.price!,
      type: selectedGame?.type!,
      color: selectedGame?.color!,
    }

    appDispatch(addItemToCart(game))
    toast.success('Jogo adicionado no carrinho.')
    currentBetDispatch({
      type: ActionTypes.CLEAR_GAME,
      payload: selectedGame?.max_number,
    })
  }

  const onClearGame = () => {
    if (!currentBet.numbers.length) {
      return toast.warn('O jogo já está limpo')
    }
    currentBetDispatch({
      type: ActionTypes.CLEAR_GAME,
      payload: selectedGame?.max_number,
    })
  }

  const getRandomNumber = (range: number) => {
    return Math.ceil(Math.random() * range)
  }

  const getRandomNumbersBet = (range: number, maxNumber: number) => {
    let randomNumbers: number[] = []
    while (randomNumbers.length < maxNumber) {
      const random = getRandomNumber(range)
      const index = randomNumbers.indexOf(random)

      if (index === -1) {
        randomNumbers.push(random || getRandomNumber(range))
      } else {
        // eslint-disable-next-line no-loop-func
        randomNumbers = randomNumbers.filter(item => item !== randomNumbers[index])
      }
    }

    return randomNumbers
  }

  function hasDuplicateNumberArrays (arrOne: number[], arrTwo: number[]) {
    return arrOne.some(number => arrTwo.indexOf(number) !== -1)
  }

  const onCompleteGame = (): void => {
    if (!selectedGame) return

    const { range } = selectedGame
    const maxNumber = selectedGame.max_number
    const qtdSelectedNumbers = currentBet.numbers.length
    const currentNumbers = [...currentBet.numbers]

    if (qtdSelectedNumbers === maxNumber) {
      toast.warn(`Todos os ${maxNumber} números do jogo já foram selecionados!`)
      return
    }

    if (qtdSelectedNumbers < maxNumber) {
      const remainingNumbers = currentBet.remaining
      const randomNumbers = getRandomNumbersBet(range, remainingNumbers)
      if (hasDuplicateNumberArrays(currentNumbers, randomNumbers)) {
        return onCompleteGame()
      }
      currentBetDispatch({
        type: ActionTypes.SET_NUMBERS,
        payload: [...currentNumbers, ...randomNumbers],
      })
    }
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
    onCompleteGame,
  }
}
