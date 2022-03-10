import { Button } from '@/components/button'
import { GameButton } from '@/components/game-button'
import { NumberButton } from '@/components/number-button'
import { RiShoppingCartLine as CartIcon } from 'react-icons/ri'

import * as S from './styles'

function NewBetPage () {
  const numbers = new Array(60).fill('').map((...args) => args[1] + 1)

  return (
    <S.Content>
      <S.Box style={{ gridColumn: '1/3' }}>
        <S.Heading
          upcase
          style={{ marginBottom: '3.0rem' }}
        >
          New bet <span>for Mega-Sena</span>
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
            <GameButton color='#7F3992'>Lotofácil</GameButton>
            <GameButton color='#01AC66' selected>Mega-Sena</GameButton>
            <GameButton color='#F79C31'>Lotomania</GameButton>
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
            Fill your bet Mark as many numbers as you want up to a maximum of 50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.
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
            <NumberButton key={number} number={number} />
          ))}
        </S.Box>

        <S.Box style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.6rem',
        }}
        >
          <Button variant='outline'>Complete game</Button>
          <Button variant='outline'>Clear game</Button>
          <Button style={{ marginLeft: 'auto' }}><CartIcon size={25} /> Add to cart</Button>
        </S.Box>
      </S.Box>
    </S.Content>
  )
}

export default NewBetPage
