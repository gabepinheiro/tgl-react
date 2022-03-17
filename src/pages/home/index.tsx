import { useEffect, useState } from 'react'
import { getCurrencyFormatted } from '@/utils/formats'
import { api } from '@/services/api'
import { AxiosRequestConfig } from 'axios'
import { Bet } from '@/resources/types'
import { Game } from '@/features/games-slice'

import {
  GameCardContainer,
  GameName,
  GameNumbers,
  GameCardContent,
  GameDate,
  GameAmount,
  GameButton,
  Loading,
  CustomLink,
} from '@/components'
import { AiOutlineArrowRight as ArrowRightIcon } from 'react-icons/ai'

import * as S from './styles'
import { Heading } from '@/components/heading'

const fetchBets = async (config?: AxiosRequestConfig): Promise<Bet[]> => {
  return api.get('/bet/all-bets', { ...config })
    .then(res => res.data)
}

const fetchGames = async (): Promise<Game[]> => {
  return api.get('/cart_games')
    .then(res => res.data.types)
}

function HomePage () {
  const [bets, setBets] = useState<Bet[] | null>(null)
  const [games, setGames] = useState<Game[] | null>(null)
  const [loadingBets, setLoadingBets] = useState(true)
  const [loadingGames, setLoadingGames] = useState(false)
  const [filterTypes, setFilterTypes] = useState<string[]>([])

  useEffect(() => {
    const request = async () => {
      try {
        const bets = await fetchBets()
        const games = await fetchGames()
        setBets(bets)
        setGames(games)
      } catch (error) {

      } finally {
        setLoadingBets(false)
        setLoadingGames(false)
      }
    }
    request()
  }, [])

  useEffect(() => {
    setLoadingBets(true)
    const requestBetsFiltered = async () => {
      try {
        const bets = await fetchBets({
          params: {
            type: filterTypes,
          },
        })
        setBets(bets)
      } catch (error) {

      } finally {
        setLoadingBets(false)
      }
    }
    requestBetsFiltered()
  }, [filterTypes])

  const handleToggleFilterType = (type: string) => {
    setFilterTypes(state => {
      return state.includes(type)
        ? state.filter(item => item !== type)
        : state.concat(type)
    })
  }

  if (loadingBets || loadingGames) {
    return <Loading />
  }

  return (
    <S.Content>
      <S.ContainerRecentGames>
        <Heading upcase className='heading'>Recent games</Heading>
        <p className='filterTitle'>Filters</p>
        <S.ContainerGameButtons>
          <S.GameButtonsWrapper>
            {games && games.map(game => (
              <GameButton
                key={game.type}
                color={game.color}
                selected={!!filterTypes.includes(game.type)}
                onClick={() => handleToggleFilterType(game.type)}
                style={{ flexShrink: '0' }}
              >
                {game.type}
              </GameButton>
            ))}
          </S.GameButtonsWrapper>
        </S.ContainerGameButtons>

        <CustomLink
          color='greenLight'
          to='/new-bet'
          className='link-newbet'
          size='large'
        >
          New Bet <ArrowRightIcon />
        </CustomLink>
      </S.ContainerRecentGames>

      <S.ContainerBets>
        {!bets && <h3>Você ainda não possui apostas cadastradas.</h3>}

        {!!bets &&
          bets?.map(bet => {
            const gameColor =
              games?.find(game => game.type === bet.type.type)
                ?.color
            return (
              <GameCardContainer key={bet.id} color={gameColor!}>
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
            )
          })}
      </S.ContainerBets>
    </S.Content>
  )
}
export default HomePage
