import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { api } from '@/services/api'
import { toast } from 'react-toastify'
import axios from 'axios'

import { Form } from '@/components/form'
import { Input } from '@/components/input'
import { ButtonLink } from '@/components/button-link'

import {
  AiOutlineArrowRight as ArrowRightIcon,
  AiOutlineArrowLeft as ArrowLeftIcon,
} from 'react-icons/ai'
import { Heading } from '@/components/heading'

type FormInputs = {
  name: string,
  email: string,
  password: string
}

const schema = yup.object({
  name: yup.string().required('Campo de nome é obrigatório'),
  email: yup.string().email().required('Campo de email é obrigatório'),
  password: yup.string().min(6).required('Campo de senha é obrigatório'),
})

function RegisterPage () {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    reset,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    formErrors.name && toast.error(formErrors.name.message)
    formErrors.email && toast.error(formErrors.email.message)
    formErrors.password && toast.error(formErrors.password.message)
  }, [formErrors])

  const onSubmit = async (data: FormInputs) => {
    const { name, email, password } = data
    try {
      const res = await api.post('/user/create', {
        name,
        email,
        password,
      })

      if (res.status === 200) {
        toast.success('Registro realizado com sucesso!', {
          onClose: () => {
            navigate('/authentication')
          },
        })
      }

      reset()
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return toast.error(error.response?.data.error.message)
      }
      const err = error as Error
      toast.error(err.message)
    }
  }

  return (
    <>
      <Heading size='large'>Registration</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type='text' placeholder='Name' {...register('name')} />
        <Input type='email' placeholder='Email' {...register('email')} />
        <Input type='password' placeholder='Password' {...register('password')} />

        <ButtonLink
          color='greenLight'
          size='large'
        >
          Register <ArrowRightIcon />
        </ButtonLink>
      </Form>

      <ButtonLink size='large' onClick={() => navigate(-1)}>
        <ArrowLeftIcon /> Back
      </ButtonLink>
    </>
  )
}

export default RegisterPage
