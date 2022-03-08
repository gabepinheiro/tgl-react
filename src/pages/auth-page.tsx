import { Link } from '@/components/link'

function AuthPage () {
  return (
    <>
      <h1>Authentication Page</h1>
      <Link to='/' color='greenLight'>Log In</Link>
      <br />
      <Link to='/authentication'>Back</Link>
    </>
  )
}

export default AuthPage
