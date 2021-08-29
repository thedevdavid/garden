import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import EmailCTA from '@/components/EmailCTA'

export default function Footer() {
  return (
    <footer className="mt-12">
      <EmailCTA />
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
          <SocialIcon kind="tiktok" href={siteMetadata.tiktok} size="6" />
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="flex mb-8 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Link
            className="hover:text-primary-600 dark:hover:text-primary-600 hover:underline"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-primary-600 dark:hover:text-primary-600 hover:underline"
            href="/content"
          >
            Content
          </Link>
          <Link
            className="hover:text-primary-600 dark:hover:text-primary-600 hover:underline"
            href="/tags"
          >
            Tags
          </Link>
          <Link
            className="hover:text-primary-600 dark:hover:text-primary-600 hover:underline"
            href="/about"
          >
            About Me
          </Link>
          <Link
            className="hover:text-primary-600 dark:hover:text-primary-600 hover:underline"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="hover:text-primary-600 dark:hover:text-primary-600 hover:underline"
            href="/mentoring"
          >
            Mentoring
          </Link>
          <Link
            className="hover:text-primary-600 dark:hover:text-primary-600 hover:underline"
            href="/saas-kit"
          >
            SaaS Kit
          </Link>
          <Link
            className="hover:text-primary-600 dark:hover:text-primary-600 hover:underline"
            href="/uses"
          >
            Uses
          </Link>
          <Link
            className="hover:text-primary-600 dark:hover:text-primary-600 hover:underline"
            href="/social"
          >
            Social
          </Link>
        </div>
      </div>
    </footer>
  )
}
