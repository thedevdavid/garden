import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import HomeLayout from '@/components/HomeLayout'
import Tag from '@/components/Tag'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('content')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-7/12">
          <div className="pt-6 pb-8 space-y-2">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              ✍️ Latest braindumps
            </h2>
          </div>
          <ul className="">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags, readingTime } = frontMatter
              return (
                <Link
                  href={`/${slug}`}
                  key={slug}
                  className="flex group hover:bg-gray-100 bg-transparent bg-opacity-20 px-2 hover:rounded-xl transition duration-200"
                >
                  <li className="py-8 px-4">
                    <article>
                      <div className="space-y-2">
                        <div className="space-y-5 xl:col-span-3">
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                <Link href={`/${slug}`} className="text-gray-900">
                                  {title}
                                </Link>
                              </h2>
                              <div className="flex flex-wrap text-gray-400">
                                <span className="mr-2">{`${readingTime.text} //`}</span>
                                {tags.map((tag) => (
                                  <Tag key={tag} text={tag} />
                                ))}
                              </div>
                            </div>
                            <div className="prose text-gray-500 max-w-none">{summary}</div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </li>
                </Link>
              )
            })}
          </ul>
          {posts.length > MAX_DISPLAY && (
            <div className="flex justify-end text-base font-medium leading-6">
              <Link
                href="/content"
                className="text-primary-500 hover:text-primary-600"
                aria-label="all posts"
              >
                See all content &rarr;
              </Link>
            </div>
          )}
        </div>
        <div className="md:w-4/12 md:ml-auto">
          <div className="pt-6 space-y-2 md:space-y-5">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10  pb-8">
              🚨 Anybody asked?
            </h2>
            <h3 className="text-lg leading-7 font-extrabold">Where am I currently?</h3>
            <div className="prose">
              <ul className="my-2">
                <li className="">
                  <span>Los Angeles, USA</span>
                </li>
              </ul>
            </div>
            <Link href="/tags/digital-nomad" className="text-primary-500 hover:text-primary-600">
              My digital nomad diaries &rarr;
            </Link>
            <h3 className="text-lg leading-7 font-extrabold">What am I working on?</h3>
            <div className="prose">
              <ul className="my-2">
                <li className="">Scaling ScreamingBox</li>
                <li className="">418 Podcast</li>
              </ul>
            </div>
            <Link href="/projects" className="text-primary-500 hover:text-primary-600">
              See all of my projects &rarr;
            </Link>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-900 sm:py-16 lg:py-24 my-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-10 sm:gap-16 lg:grid-cols-2">
            <div>
              <div className="max-w-sm mx-auto bg-white xl:max-w-md rounded-2xl -rotate-3 h-96 w-[360px]">
                <Image
                  className="rounded-2xl"
                  src="/static/images/business-of-it.png"
                  layout="fill"
                  objectFit="cover"
                  quality={90}
                  alt="Screenshot of a Business of IT newsletter episode."
                />
              </div>
            </div>
            <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">
                The Business of IT
              </h2>
              <p className="mt-8 text-base font-normal leading-7 text-gray-300 prose">
                Each month, I publish a newsletter about entrepreneurship, programming, digital
                products, productivity, digital nomad life.
                <br />
                What it contains:
                <ul>
                  <li>a lesson from entrepreneurship</li>
                  <li>best travel finds in the current country</li>
                  <li>5 best finds in development, productivity, and business from last month</li>
                  <li>2-3 most recent tutorials, content, courses</li>
                  <li>status of my businesses and products, as well as how I'm building them</li>
                </ul>
              </p>
              <form
                action="http://business-of-it.davidlevai.com/add_subscriber"
                method="post"
                id="revue-form"
                name="revue-form"
                target="_blank"
                className="mt-16"
              >
                <label htmlFor="member_email" className="text-lg font-bold text-white font-pj">
                  Wanna join?
                </label>
                <div className="relative max-w-lg mx-auto mt-5 lg:mx-0">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative">
                    <input
                      type="email"
                      name="member[email]"
                      id="member_email"
                      placeholder="Enter your email address"
                      className="revue-form-field block w-full px-5 py-6 text-base font-normal text-white placeholder-gray-400 bg-gray-900 border border-transparent rounded-xl focus:border-white focus:ring-1 focus:ring-white focus:outline-none"
                      required
                    />
                    <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-3">
                      <button
                        type="submit"
                        className="
                          inline-flex
                          items-center
                          justify-center
                          w-full
                          px-8
                          py-4
                          text-base
                          font-bold
                          text-gray-900
                          transition-all
                          duration-200
                          bg-white
                          border border-transparent
                          sm:py-3 sm:w-auto
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
                          font-pj
                          hover:bg-opacity-90
                          rounded-xl"
                      >
                        Send me an episode
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="md:max-w-5xl lg:max-w-7xl mx-auto mt-16">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            🔥️ Who the f*ck is David?
          </h2>
        </div>

        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2 xl:sticky xl:top-0">
            <Image
              src="/static/images/david.png"
              alt="avatar"
              width="320px"
              height="320px"
              className="w-80 h-80 rounded-full hover:-rotate-2 duration-150 transition-all"
            />
            <div className="text-gray-500">Part-Time Creator & Full-Time COO</div>
            <div className="text-gray-500">ScreamingBox</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose max-w-none xl:col-span-2">
            <div className="pt-8 pb-8 prose max-w-none xl:col-span-2">
              <p>
                I'm a Part-Time Creator, digital nomad, and full-time COO @{' '}
                <Link target="_blank" rel="noopener noreferrer" href="https://screamingbox.com">
                  ScreamingBox
                </Link>
                .
              </p>
              <p>
                I write a bunch of stuff about{' '}
                <strong>building IT businesses and production-ready apps</strong>{' '}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/iamdavidlevai"
                >
                  Twitter
                </Link>
                ,{' '}
                <Link target="_blank" rel="noopener noreferrer" href="https://dvdlv.me/yt">
                  YouTube
                </Link>
                ,{' '}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://linkedin.com/in/iamdavidlevai"
                >
                  LinkedIn
                </Link>
                ,{' '}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tiktok.com/@iamdavidlevai"
                >
                  TikTok
                </Link>
                , and this blog.
              </p>
              <p>
                Since my teenage years, I have worked as a freelance full-stack developer mostly
                with startups and small businesses. In 2020 I decided to use this knowledge to scale
                a digital agency and try to build something for myself.{' '}
                <strong>
                  As of 2022, I'm building businesses in public, and helping developers become
                  entrepreneurs.
                </strong>
              </p>
              <h3>What's the point of doing these in public?</h3>
              <ul>
                <li>
                  I believe you can learn a lot by following other people's journeys. I'm following
                  a lot of other creators too.
                </li>
                <li>
                  Through social media and public building, I get to meet interesting people and we
                  can support each other.
                </li>
              </ul>
              <h3>What kind of stuff do you find here?</h3>
              <p>
                Videos, blogs, tips, and discussions. Learn how to build an international digital
                product agency, develop production-ready apps, and be mindful and productive as an
                IT entrepreneur.
              </p>
              <div className="flex justify-end text-base font-medium leading-6 not-prose">
                <Link
                  href="/about"
                  className="text-primary-500 hover:text-primary-600"
                  aria-label="about me"
                >
                  There's more about me this way &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>
}
