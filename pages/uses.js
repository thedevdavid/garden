import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'

export default function Uses() {
  return (
    <>
      <PageSeo
        title={`Uses - ${siteMetadata.author}`}
        description={`Uses - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/uses`}
      />
      <div className="divide-y">
        <div className="mt-24 text-center">
          <h1>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </h1>
        </div>
      </div>
    </>
  )
}
