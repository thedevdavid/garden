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
              <Link href={siteMetadata.youtube}>YouTube</Link>,{' '}
              <Link href={siteMetadata.linkedin}>LinkedIn</Link>, and this blog about{' '}
              <strong>building IT businesses and production-ready apps.</strong>
            </p>
            <p>
              Since my teenage years, I have worked as a freelance full-stack developer mostly with
              startups and small businesses. In 2020 I decided to use this knowledge to scale a
              digital agency and build open startups.
            </p>
            <h2>Why I'm doing these in public?</h2>
            <ul>
              <li>
                I believe that learning from others by following their journey is inspiring and
                helpful. I too follow tens of creators on their journey.
              </li>
              <li>
                By being active in social media, and building in public, I can meet with interesting
                people, and support each other.
              </li>
            </ul>
            <h2>What you'll find here?</h2>
            <p>
              Vlogs, essays, tips, and discussions. About building an international digital product
              agency, building production-ready apps, and being mindful, productive as an
              entrepreneur in IT. If you have some more time, feel free to read about my background,
              knowledge, experience, and my why in the next few paragraphs:
            </p>
            <p>
              When I'm not creating content, or managing a business, I am a full-stack developer who
              started as a UI designer. Enthusiastic about growth mindset and self-development,
              passionate about digital marketing, and UX. Always on the lookout for how to maximize
              productivity and my teams' efficiency.
            </p>
            <p>
              <strong>My background as a Software Engineer:</strong> I create user-centered web and
              mobile applications using cutting-edge technologies like React Native, Flutter,
              GraphQL, and ESNext for almost 10 years. I love to learn new things by experimenting
              with state-of-the-art technologies (mostly JS-related).
            </p>
            <p>
              <strong>My background as a Content Creator:</strong> I like sharing my knowledge with
              others, so I write for several tech blogs and authoring my blog too. I also create
              content on LinkedIn, Twitter, and Youtube to teach software devs how to be successful
              as freelancers, and how to write truly production-ready apps.
            </p>
            <p>
              <strong>My background as a Manager:</strong> I've got experience in managing small &
              medium-sized product development teams by running a digital agency. We successfully
              finished several projects that were started from the ground up with lean, agile
              methods for multiple clients. I managed the projects from estimation & proposal,
              through design & development, to marketing & maintenance. Later, I joined an
              international digital product agency, ScreamingBox as a COO.
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}
