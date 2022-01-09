import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { data } from 'autoprefixer'

export async function getStaticPaths() {
  const URL = `https://emailoctopus.com/api/1.5/campaigns?api_key=${process.env.EMAILOCTOPUS_API_KEY}`

  try {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response?.status >= 400) {
      console.log(response?.statusText)
      return
    }

    const data = await response.json()

    return {
      paths: data?.data?.map((campaign) => ({
        params: {
          id: campaign.id,
        },
      })),
      fallback: false,
    }
  } catch (error) {
    console.log(error)
    return
  }
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context

  const URL = `https://emailoctopus.com/api/1.5/campaigns/${id}?api_key=${process.env.EMAILOCTOPUS_API_KEY}`

  try {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response?.status >= 400) {
      console.log(response?.statusText)
      return
    }

    const data = await response.json()

    return {
      props: {
        content: data.content.html,
      },
    }
  } catch (error) {
    console.log(error)
    return
  }
}

export default function MailPage({ content }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  )
}
