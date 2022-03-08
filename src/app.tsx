import styled from 'styled-components'

export function App () {
  return (
    <Wrapper>
      <Heading>TGL</Heading>
      <h2>The greatest app for Lottery</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-family: Helvitica, sans-serif;
`

const Heading = styled.h1`
  font-size:3rem;
  color: #B5C401;
`
