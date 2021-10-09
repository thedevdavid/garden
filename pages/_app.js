import '@/css/tailwind.css'

import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PlausibleProvider from 'next-plausible'
import { useAnalytics } from '@/lib/analytics'
import { SEO } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'

export default function App({ Component, pageProps }) {
  useAnalytics()
  const { pathname } = useRouter()
  return (
    <PlausibleProvider domain="davidlevai.com">
      <ThemeProvider attribute="class" storageKey="iamdavidlevai-digital-garden">
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <LayoutWrapper isHome={pathname === '/'}>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </PlausibleProvider>
  )
}
