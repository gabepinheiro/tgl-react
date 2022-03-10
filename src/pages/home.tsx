import { GameButton } from '@/components/game-button'
import {
  GameCardContainer,
  GameName,
  GameNumbers,
  GameCardContent,
  GameDate,
  GameAmount,
} from '@/components/game-card'

function HomePage () {
  return (
    <>
      <h1>Home Page</h1>
      <GameButton color='#7F3992' selected>Lotofácil</GameButton>
      <GameButton color='#01AC66'>Mega-Sena</GameButton>
      <GameButton color='#F79C31'>Lotomania</GameButton>

      <div style={{ margin: '3.2rem' }}>
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
        <br />
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
        <br />
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
      </div>
    </>
  )
}

export default HomePage
