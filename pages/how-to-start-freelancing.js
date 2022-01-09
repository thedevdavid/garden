import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function HowToStartFreelancing({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      hmmmmm
    </>
  )
}

HowToStartFreelancing.getLayout = function getLayout(page) {
  return page
}
