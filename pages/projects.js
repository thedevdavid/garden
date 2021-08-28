import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700 max-w-6xl mx-auto">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Things I've built in the past years and I'm proud of.
          </p>
        </div>
        <div className="container py-12">
          <ul className="">
            {projectsData.map((d) => {
              return (
                <Link
                  href={d.href}
                  key={d.href}
                  className="flex group hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent bg-opacity-20 px-2 hover:rounded-xl transition duration-200"
                >
                  <li className="py-12">
                    <article>
                      <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-center gap-4">
                        <div className="flex justify-center items-center">
                          <Image
                            alt={d.title}
                            src={d.imgSrc}
                            className="object-cover object-center"
                            width={160}
                            height={90}
                          />
                        </div>
                        <div className="space-y-5 xl:col-span-3">
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                <Link href={d.href} className="text-gray-900 dark:text-gray-100">
                                  {d.title}
                                </Link>
                              </h2>
                            </div>
                            <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                              {d.description}
                            </div>
                          </div>
                          <div className="text-base font-medium leading-6">
                            <Link
                              href={d.href}
                              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                              aria-label={`Check out "${d.title}"`}
                            >
                              Read more &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
