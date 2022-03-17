import { Form } from '@/components/form'
import { Input } from '@/components/input'
import { ButtonLink } from '@/components/button-link'

import {
  AiOutlineArrowRight as ArrowRightIcon,
  AiOutlineArrowLeft as ArrowLeftIcon,
} from 'react-icons/ai'
import { Heading } from '@/components/heading'
import { useNavigate } from 'react-router-dom'

function ResetPasswordPage () {
  const navigate = useNavigate()

  return (
    <>
      <Heading size='large'>Reset password</Heading>
      <Form>
        <Input placeholder='Email' />

        <ButtonLink
          color='greenLight'
          size='large'
        >
          Send link <ArrowRightIcon />
        </ButtonLink>
      </Form>
      <ButtonLink
        size='large'
        onClick={() => navigate(-1)}
      >
        <ArrowLeftIcon /> Back
      </ButtonLink>
    </>
  )
}

export default ResetPasswordPage
