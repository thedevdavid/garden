import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'

export default function Mentoring() {
  return (
    <>
      <PageSEO
        title={`Mentoring - ${siteMetadata.author}`}
        description={`Mentoring - ${siteMetadata.author}`}
      />
      <div className="divide-y max-w-6xl mx-auto">
        <div className="mt-24 text-center">
          <h1 className="text-lg font-extrabold">
            If you'd be interested in getting some guidance from me about any of the following
            topics, feel free to hit me up on{' '}
            <Link className="text-primary-500 underline" href="https://twitter.com/iamdavidlevai">
              Twitter DMs
            </Link>
            .
          </h1>
          <ul className="mt-4 list-disc">
            <li className="list-item mt-2">• Growing as a freelancer developer</li>
            <li className="list-item mt-2">• Growing as an indie developer</li>
            <li className="list-item mt-2">• Building production-ready SaaS</li>
            <li className="list-item mt-2">• Building a digital product agency</li>
          </ul>
          <p className="mt-24">
            This page is currently a draft. Look back later to see what's changed.{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
