import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchBets, selectBets } from '@/features/bets-slice'
import { selectGames, selectGame, fetchGames } from '@/features/games-slice'
import { getCurrencyFormatted } from '@/utils/formats'

import { Loading } from '@/components/loading'
import { ButtonLink } from '@/components/button-link'
import { GameButton } from '@/components/game-button'
import { Heading, Text } from '@/pages/pages-styles'

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

  if (isFetching || isLoading) {
    return <Loading />
  }

  return (
    <S.Content>
      {(bets && !isFetching) && (
        <>
          <S.ContainerRecentGames>
            <Heading upcase className='heading'>Recent games</Heading>
            <Text className='filterTitle'>Filters</Text>
            <S.ContainerGameButtons>
              <S.GameButtonsWrapper>
                {!isLoading && games.map(game => (
                  <GameButton
                    key={game.type}
                    color={game.color}
                    selected={game.selected}
                    onClick={onSelectedGame(game.id)}
                    style={{ flexShrink: '0' }}
                    disabled={bets.length === 0}
                  >
                    {game.type}
                  </GameButton>
                ))}
              </S.GameButtonsWrapper>
            </S.ContainerGameButtons>

            <ButtonLink
              color='greenLight'
              to='/new-bet'
              className='link-newbet'
              size='large'
            >
              New Bet <ArrowRightIcon />
            </ButtonLink>
          </S.ContainerRecentGames>

          <S.ContainerBets>
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
          </S.ContainerBets>
        </>
      )}
    </S.Content>
  )
}

export default HomePage
