import { lazy } from 'react'

export const AuthPage = lazy(() => import('@/pages/auth-page'))
export const HomePage = lazy(() => import('@/pages/home'))
export const NewBetPage = lazy(() => import('@/pages/new-bet'))
export const RegisterPage = lazy(() => import('@/pages/register'))
export const ResetPasswordPage = lazy(() => import('@/pages/reset-password'))
