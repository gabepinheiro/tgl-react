import { Form } from '@/components/form'
import { Input } from '@/components/input'
import { Link } from '@/components/link'

import {
  AiOutlineArrowRight as ArrowRightIcon,
  AiOutlineArrowLeft as ArrowLeftIcon,
} from 'react-icons/ai'

import * as S from './styles'

function AuthPage () {
  return (
    <>
      <S.Heading>Authentication</S.Heading>
      <Form>
        <Input placeholder='Name' />
        <Input placeholder='Password' />

        <S.LinkWrapper>
          <Link to='/' color='greenLight'>Log In <ArrowRightIcon /></Link>
        </S.LinkWrapper>
      </Form>

      <Link to='/authentication'><ArrowLeftIcon /> Back</Link>
    </>
  )
}

export default AuthPage
