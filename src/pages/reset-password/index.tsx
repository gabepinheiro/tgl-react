import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AxiosError } from 'axios'
import { api } from '@/services/api'
import * as yup from 'yup'
import { toast } from 'react-toastify'

import {
  Form,
  Input,
  ButtonLink,
  Heading,
} from '@/components'

import {
  AiOutlineArrowRight as ArrowRightIcon,
  AiOutlineArrowLeft as ArrowLeftIcon,
} from 'react-icons/ai'

type FormInputs = {
  email: string
}

const schema = yup.object({
  email: yup.string().email().required('Email é obrigatório'),
}).required()

function ResetPasswordPage () {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    formErrors.email && toast.error(formErrors.email.message)
  }, [formErrors])

  const onSubmit = async (data: FormInputs) => {
    try {
      const res = await api.post('/reset', {
        email: data.email,
      })

      const { name, token } = res.data
      toast.success(`Olá, ${name}. Informe sua nova senha.`)
      api.defaults.headers.common.Authorization = `${token}`

      navigate('/change-password')
    } catch (error) {
      const err = error as AxiosError
      if (err.response) {
        return toast.error(err.response.data.message)
      }

      toast.error(err.message)
    }
  }

  return (
    <>
      <Heading size='large'>Reset password</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder='Email' {...register('email')} />

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
