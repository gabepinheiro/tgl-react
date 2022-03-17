import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { LazyLoad } from '@/components/lazy-load'
import PublicPageLayout from '@/layout/public-page'
import { PrivatePage } from './layout/private-page'
import { Footer } from './layout/footer'

import { AuthPage, HomePage, NewBetPage, RegisterPage, ResetPasswordPage } from '@/pages'

export function App () {
  return (
    <Suspense fallback={<LazyLoad />}>
      <Routes>

        <Route element={<PublicPageLayout />}>
          <Route path='/authentication' element={<AuthPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />
        </Route>

        <Route element={<PrivatePage />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/new-bet' element={<NewBetPage />} />
        </Route>

        <Route path='*' element={<h1>Page not found!</h1>} />
      </Routes>

      <Footer />
    </Suspense>
  )
}
