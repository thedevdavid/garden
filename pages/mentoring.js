import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function Mentoring() {
  return (
    <>
      <PageSEO
        title={`Mentoring - ${siteMetadata.author}`}
        description={`Mentoring - ${siteMetadata.author}`}
      />
      <div className="divide-y max-w-6xl mx-auto">
        <div className="mt-24 text-center">
          <h1>
            This page is currently a draft. Look back later to see what's changed.{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </h1>
        </div>
      </div>
    </>
  )
}
