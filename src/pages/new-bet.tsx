import { NumberButton } from '@/components/number-button'

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
    </>
  )
}

export default NewBetPage
