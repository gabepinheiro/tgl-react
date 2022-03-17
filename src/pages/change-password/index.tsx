import { useNavigate } from 'react-router-dom'

import { Form } from '@/components/form'
import { Input } from '@/components/input'
import { ButtonLink } from '@/components/button-link'
import { Heading } from '@/components/heading'

import {
  AiOutlineArrowRight as ArrowRightIcon,
  AiOutlineArrowLeft as ArrowLeftIcon,
} from 'react-icons/ai'

function ChangePasswordPage () {
  const navigate = useNavigate()

  return (
    <>
      <Heading size='large'>Change Password</Heading>
      <Form>
        <Input type='password' placeholder='New password' />
        <Input type='password' placeholder='Confirm password' />

        <ButtonLink
          color='greenLight'
          size='large'
        >
          Change <ArrowRightIcon />
        </ButtonLink>
      </Form>

      <ButtonLink size='large' onClick={() => navigate(-1)}>
        <ArrowLeftIcon /> Back
      </ButtonLink>
    </>
  )
}

export default ChangePasswordPage
