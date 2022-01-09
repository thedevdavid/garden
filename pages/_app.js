import '@/css/tailwind.css'
import '@/css/prism.css'
import Head from 'next/head'
import { useAnalytics } from '@/lib/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  useAnalytics()
  const getLayout = Component.getLayout || ((page) => <LayoutWrapper>{page}</LayoutWrapper>)
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
