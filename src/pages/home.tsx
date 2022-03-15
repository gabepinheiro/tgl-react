import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchBets, selectBets } from '@/features/bets-slice'
import { selectGames, selectGame, fetchGames } from '@/features/games-slice'
import { getCurrencyFormatted } from '@/utils/formats'

import { ButtonLink } from '@/components/button-link'
import { GameButton } from '@/components/game-button'
import {
  GameCardContainer,
  GameName,
  GameNumbers,
  GameCardContent,
  GameDate,
  GameAmount,
} from '@/components/game-card'

import {
  AiOutlineArrowRight as ArrowRightIcon,
} from 'react-icons/ai'

import * as S from './styles'

function HomePage () {
  const { bets, isFetching } = useAppSelector(selectBets)
  const { types: games, selectedGame, isLoading } = useAppSelector(selectGames)
  const dispatch = useAppDispatch()

  const filteredBets = bets.filter(bet => bet.type.type === selectedGame?.type!)

  const onSelectedGame = (id: number) => {
    return () => {
      dispatch(selectGame(id))
    }
  }

  useEffect(() => {
    dispatch(fetchGames())
    dispatch(fetchBets())
  }, [dispatch])

  return (
    <S.Content>
      {isFetching && <p>Carregando...</p>}
      {(bets && !isFetching) && (
        <>
          <S.Box style={{ display: 'flex', alignItems: 'center' }}>
            <S.Heading upcase>Recent games</S.Heading>
          </S.Box>

          <S.Box style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }}>
            <S.Text style={{ fontSize: '1.7rem', fontStyle: 'italic' }}>Filters</S.Text>
            {!isLoading && games.map(game => (
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
          <S.Box style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
          >
            <ButtonLink
              style={{ fontSize: '2.4rem' }}
              color='greenLight'
              to='/new-bet'
            >
              New Bet <ArrowRightIcon />
            </ButtonLink>
          </S.Box>

          <S.Box
            style={{ gridColumn: '1/-1', display: 'flex', flexDirection: 'column', gap: '3.0rem' }}
          >
            {!bets.length && <h3>Você ainda não possui jogos cadastrados.</h3>}

            {(!isLoading && !filteredBets.length && !!bets.length) && (
              <h3>Você não possui aposta cadastrada com este jogo.</h3>
            )}

            {!isLoading && (
              filteredBets.map(bet => (
                <GameCardContainer key={bet.id} color={selectedGame?.color!}>
                  <GameCardContent>
                    <GameNumbers>{bet.choosen_numbers}</GameNumbers>
                    <div>
                      <GameDate>{(
                        new Date(bet.created_at)
                          .toLocaleDateString('pt-BR')
                        )}
                      </GameDate> {' - '}
                      <GameAmount>{getCurrencyFormatted(bet.price)}</GameAmount>
                    </div>
                    <GameName>{bet.type.type}</GameName>
                  </GameCardContent>
                </GameCardContainer>
              )))}
          </S.Box>
        </>
      )}
    </S.Content>
  )
}

export default HomePage
