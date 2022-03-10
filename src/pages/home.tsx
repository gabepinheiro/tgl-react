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
  return (
    <S.Content>
      <S.Box style={{ display: 'flex', alignItems: 'center' }}>
        <S.Heading upcase>Recent games</S.Heading>
      </S.Box>

      <S.Box style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }}>
        <S.Text style={{ fontSize: '1.7rem', fontStyle: 'italic' }}>Filters</S.Text>
        <GameButton color='#7F3992' selected>Lotofácil</GameButton>
        <GameButton color='#01AC66'>Mega-Sena</GameButton>
        <GameButton color='#F79C31'>Lotomania</GameButton>
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
        <GameCardContainer color='#7F3992'>
          <GameCardContent>
            <GameNumbers>01,02,04,05,06,07,09,15,17,20,21,22,23,24,25</GameNumbers>
            <div>
              <GameDate>30/11/2020</GameDate> {' - '}
              <GameAmount>R$ 2,50</GameAmount>
            </div>
            <GameName>Lotofácil</GameName>
          </GameCardContent>
        </GameCardContainer>
        <GameCardContainer color='#01AC66'>
          <GameCardContent>
            <GameNumbers>01,02,04,05,06,07,09,15,17,20,21,22,23,24,25</GameNumbers>
            <div>
              <GameDate>30/11/2020</GameDate> {' - '}
              <GameAmount>R$ 2,50</GameAmount>
            </div>
            <GameName>Mega-Sena</GameName>
          </GameCardContent>
        </GameCardContainer>
        <GameCardContainer color='#F79C31'>
          <GameCardContent>
            <GameNumbers>01,02,04,05,06,07,09,15,17,20,21,22,23,24,25</GameNumbers>
            <div>
              <GameDate>30/11/2020</GameDate> {' - '}
              <GameAmount>R$ 2,50</GameAmount>
            </div>
            <GameName>Lotomania</GameName>
          </GameCardContent>
        </GameCardContainer>
      </S.Box>
    </S.Content>
  )
}

export default HomePage
