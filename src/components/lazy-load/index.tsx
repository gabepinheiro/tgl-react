import { useEffect } from 'react'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ easing: 'ease', speed: 800 })
NProgress.configure({ showSpinner: true })

export const LazyLoad = () => {
  useEffect(() => {
    NProgress.start()

    return () => {
      NProgress.done()
    }
  })

  return null
}
