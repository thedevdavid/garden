import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { usePlausible } from 'next-plausible'

export const useAnalytics = () => {
  const plausible = usePlausible()
  const router = useRouter()

  useEffect(() => {
    // if (process.env.NODE_ENV === 'production') {
    //   Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
    //     includedDomains: ['davidlevai.com', 'www.davidlevai.com', '*.davidlevai.com'],
    //     url: 'https://peacock.davidlevai.com/script.js',
    //   })
    // }

    function onRouteChangeComplete() {
      plausible('screenView')
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])
}
