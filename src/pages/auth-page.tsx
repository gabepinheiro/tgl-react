import { Link } from '@/components/link'

import {
  AiOutlineArrowRight as ArrowRightIcon,
  AiOutlineArrowLeft as ArrowLeftIcon,
} from 'react-icons/ai'

function AuthPage () {
  return (
    <>
      <h1>Authentication Page</h1>
      <Link to='/' color='greenLight'>Log In <ArrowRightIcon /></Link>
      <br />
      <Link to='/authentication'><ArrowLeftIcon /> Back</Link>
    </>
  )
}

export default AuthPage
