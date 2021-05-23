import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'

export default function SaasKit() {
  return (
    <>
      <PageSeo
        title={`SaaS Kit - ${siteMetadata.author}`}
        description={`Saas Kit - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/saas-kit`}
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
