import { App } from '@/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { GlobalStyles } from '@/styles/globals'
import { BrowserRouter } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'

import store from '@/store'

export function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <StoreProvider store={store}>
          <App />
        </StoreProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
