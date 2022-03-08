import { Form } from '@/components/form'
import { Input } from '@/components/input'
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

      <Form style={{
        width: '357px',
        height: '337px',
        margin: '0 auto',
      }}
      >
        <Input placeholder='Name' />
        <Input placeholder='Password' />
      </Form>
    </>
  )
}

export default AuthPage
