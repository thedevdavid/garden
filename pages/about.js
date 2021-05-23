import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'
import Link from '@/components/Link'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Creator & COO</div>
            <div className="text-gray-500 dark:text-gray-400">Currently @ ScreamingBox</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              I'm a Part-Time Creator and full-time COO @{' '}
              <Link href="https://screamingbox.com">ScreamingBox</Link>.
            </p>
            <p>
              I create various types of content across{' '}
              <Link href={siteMetadata.twitter}>Twitter</Link>,{' '}
              <Link href={siteMetadata.youtube}>YouTube</Link>, and this blog about{' '}
              <strong>building IT businesses and production-ready apps.</strong>
            </p>
            <p>
              I worked as a freelancer full-stack developer, spent my time working with startups and
              small businesses since my teenage years and now I started translating this knowledge
              into 2 things. <strong>Scaling a digital agency and building open startups.</strong>
            </p>
            <p>
              This page is currently a draft. Look back later to see what's changed.{' '}
              <span role="img" aria-label="roadwork sign">
                🚧
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
