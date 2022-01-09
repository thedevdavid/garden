import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import HomeLayout from '@/components/HomeLayout'
import Tag from '@/components/Tag'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import SectionContainer from '@/components/SectionContainer'
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
      <div className="md:max-w-5xl lg:max-w-7xl mx-auto flex flex-row">
        <div className="w-7/12">
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
                  <li className="py-12 px-4">
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
                                {readingTime.text} //{' '}
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
        <div className="w-4/12 ml-auto">
          <div className="pt-6 space-y-2 md:space-y-5">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10  pb-8">
              🚨 Anybody asked?
            </h2>
            <h3 className="text-lg leading-7 font-extrabold">Where am I currently?</h3>
            <ul className="my-2">
              <li className="py-4 px-2 font-bold">Mexico City</li>
            </ul>
            <Link href="/tags/digital-nomad">My digital nomad diaries &rarr;</Link>
            <h3 className="text-lg leading-7 font-extrabold">What am I working on?</h3>
            <ul className="my-2">
              <li className="py-4 px-2 font-bold">Scaling ScreamingBox</li>
            </ul>
            <Link href="/projects">See all of my projects &rarr;</Link>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-900 sm:py-16 lg:py-24 my-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-10 sm:gap-16 lg:grid-cols-2">
            <div>
              <div className="max-w-sm mx-auto bg-white xl:max-w-md rounded-2xl -rotate-3">
                <div className="p-6 sm:px-10 sm:py-12">
                  <img
                    className="w-auto h-7"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/3/crowny-logo.svg"
                    alt
                  />
                  <blockquote className="mt-6">
                    <p className="text-lg font-normal leading-relaxed text-gray-900 font-pj">
                      “You made it so simple. My new site is so much faster and easier to work with
                      than my old site. I just choose the page, make the change.”
                    </p>
                  </blockquote>
                  <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/3/avatar-female.png"
                        alt
                      />
                      <div className="ml-3">
                        <p className="text-lg font-bold text-gray-900 font-pj">Jerome Bell</p>
                        <p className="text-base font-pj font-normal text-gray-600 mt-0.5">
                          CTO, Waverio
                        </p>
                      </div>
                    </div>
                    <img
                      className="w-auto h-12"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/3/signature.svg"
                      alt
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">
                The Business of IT
              </h2>
              <p className="mt-8 text-base font-normal leading-7 text-gray-300 font-pj">
                Curated content around the web, fresh content by me, inspiration, tips & tricks
                about being an entrepreneur and building a business in software development.
              </p>
              <form action="#" method="POST" className="mt-16">
                <label htmlFor className="text-lg font-bold text-white font-pj">
                  Wanna join?
                </label>
                <div className="relative max-w-lg mx-auto mt-5 lg:mx-0">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative">
                    <input
                      type="email"
                      name
                      id
                      placeholder="Enter your email address"
                      className="block w-full px-5 py-6 text-base font-normal text-white placeholder-gray-400 bg-gray-900 border border-transparent rounded-xl focus:border-white focus:ring-1 focus:ring-white focus:outline-none"
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
                                  rounded-xl
                              "
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
              className="w-80 h-80 rounded-full"
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
                I'm a Part-Time Creator and full-time COO @{' '}
                <Link target="_blank" rel="noopener noreferrer" href="https://screamingbox.com">
                  ScreamingBox
                </Link>
                .
              </p>
              <p>
                I create various types of content across{' '}
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
                , and this blog about{' '}
                <strong>building IT businesses and production-ready apps.</strong>
              </p>
              <p>
                Since my teenage years, I have worked as a freelance full-stack developer mostly
                with startups and small businesses. In 2020 I decided to use this knowledge to scale
                a digital agency and build open startups.
              </p>
              <h2 id="why-im-doing-these-in-public">
                <a href="#why-im-doing-these-in-public" aria-hidden="true" tabIndex="-1">
                  <span className="icon icon-link"></span>
                </a>
                Why I'm doing these in public?
              </h2>
              <ul>
                <li>
                  I believe that learning from others by following their journey is inspiring and
                  helpful. I too follow tens of creators on their journey.
                </li>
                <li>
                  By being active in social media, and building in public, I can meet with
                  interesting people, and support each other.
                </li>
              </ul>
              <h2 id="what-can-you-find-here">
                <a href="#what-can-you-find-here" aria-hidden="true" tabIndex="-1">
                  <span className="icon icon-link"></span>
                </a>
                What can you find here?
              </h2>
              <p>
                Vlogs, essays, tips, and discussions. About building an international digital
                product agency, building production-ready apps, and being mindful, productive as an
                entrepreneur in IT. If you have some more time, feel free to read about my
                background, knowledge, experience, and my why in the next few paragraphs:
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
