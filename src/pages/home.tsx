import { GameButton } from '@/components/game-button'
import { useState } from 'react'

function HomePage () {
  return (
    <>
      <h1>Home Page</h1>
      <GameButton color='#7F3992' selected>Lotofácil</GameButton>
      <GameButton color='#01AC66'>Mega-Sena</GameButton>
      <GameButton color='#F79C31'>Lotomania</GameButton>
    </>
  )
}

export default HomePage
