import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Link from '@/components/Link'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <div className="max-w-6xl mx-auto">
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Recommended Reads
          </h2>
        </div>
        <div className="items-start space-y-2 grid xl:grid-cols-3 xl:gap-x-8 pt-12">
          <Link href="https://amzn.to/3kAFipE" className="h-72 mb-12 group">
            <div className="group-hover:bg-opacity-40 h-full w-full bg-gray-100 dark:bg-gray-800 rounded-xl relative p-4">
              <div className="absolute left-0 bottom-0 px-4 py-6">
                <p className="font-extrabold">Company of One</p>
                <p className="text-sm mt-2">Why Staying Small Is the Next Big Thing for Business</p>
                <p className="text-sm mt-2">Paul Jarvis</p>
                <p className="text-xs mt-2">2020</p>
              </div>
            </div>
          </Link>
          <Link href="https://amzn.to/3BobseK" className="h-72 mb-12 group">
            <div className="group-hover:bg-opacity-40 h-full w-full bg-gray-100 dark:bg-gray-800 rounded-xl relative p-4">
              <div className="absolute left-0 bottom-0 px-4 py-6">
                <p className="font-extrabold">Bigger Leaner Stronger</p>
                <p className="text-sm mt-2">
                  The simple science of building the ultimate male body
                </p>
                <p className="text-sm mt-2">Michael Matthews</p>
                <p className="text-xs mt-2">2019</p>
              </div>
            </div>
          </Link>
          <Link href="https://amzn.to/3DtRUHI" className="h-72 mb-12 group">
            <div className="group-hover:bg-opacity-40 h-full w-full bg-gray-100 dark:bg-gray-800 rounded-xl relative p-4">
              <div className="absolute left-0 bottom-0 px-4 py-6">
                <p className="font-extrabold">Show Your Work</p>
                <p className="text-sm mt-2">10 Ways to Share Your Creativity and Get Discovered</p>
                <p className="text-sm mt-2">Austin Kleon</p>
                <p className="text-xs mt-2">2014</p>
              </div>
            </div>
          </Link>
          <Link href="https://makebook.io/" className="h-72 mb-12 group">
            <div className="group-hover:bg-opacity-40 h-full w-full bg-gray-100 dark:bg-gray-800 rounded-xl relative p-4">
              <div className="absolute left-0 bottom-0 px-4 py-6">
                <p className="font-extrabold">M.A.K.E.</p>
                <p className="text-sm mt-2">The Indie maker handbook</p>
                <p className="text-sm mt-2">Pieter Levels</p>
                <p className="text-xs mt-2">2020</p>
              </div>
            </div>
          </Link>
          <Link href="https://amzn.to/3DtCDqr" className="h-72 mb-12 group">
            <div className="group-hover:bg-opacity-40 h-full w-full bg-gray-100 dark:bg-gray-800 rounded-xl relative p-4">
              <div className="absolute left-0 bottom-0 px-4 py-6">
                <p className="font-extrabold">4 Hour Workweek</p>
                <p className="text-sm mt-2">Escape 9-5, Live Anywhere, and Join the New Rich</p>
                <p className="text-sm mt-2">Timothy Ferriss</p>
                <p className="text-xs mt-2">2009</p>
              </div>
            </div>
          </Link>
          <Link href="https://amzn.to/3gItr85" className="h-72 mb-12 group">
            <div className="group-hover:bg-opacity-40 h-full w-full bg-gray-100 dark:bg-gray-800 rounded-xl relative p-4">
              <div className="absolute left-0 bottom-0 p-4">
                <p className="font-extrabold">Built to Sell</p>
                <p className="text-sm mt-2">Creating a Business That Can Thrive Without You</p>
                <p className="text-sm mt-2">John Warrillow</p>
                <p className="text-xs mt-2">2012</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
