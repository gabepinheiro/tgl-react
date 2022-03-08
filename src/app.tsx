import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const AuthPage = lazy(() => import('@/pages/auth-page'))
const HomePage = lazy(() => import('@/pages/home'))
const NewBetPage = lazy(() => import('@/pages/new-bet'))
const RegisterPage = lazy(() => import('@/pages/register'))
const ResetPasswordPage = lazy(() => import('@/pages/reset-password'))

export function App () {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/authentication' element={<AuthPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/reset-password' element={<ResetPasswordPage />} />
        <Route path='/new-bet' element={<NewBetPage />} />
        <Route path='*' element={<h1>Page not found!</h1>} />
      </Routes>
    </Suspense>
  )
}
