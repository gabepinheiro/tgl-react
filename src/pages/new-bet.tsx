import { Button } from '@/components/button'
import { NumberButton } from '@/components/number-button'
import { RiShoppingCartLine as CartIcon } from 'react-icons/ri'

function NewBetPage () {
  const numbers = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
  ]

  return (
    <>
      <h1>New bet Page</h1>
      {numbers.map((number) => (
        <NumberButton key={number} number={number} />
      ))}
      <div>
        <Button variant='outline'>Complete game</Button>
        <Button variant='outline'>Clear game</Button>
        <Button><CartIcon size={25} /> Add to cart</Button>
      </div>
    </>
  )
}

export default NewBetPage
