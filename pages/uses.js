import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { software } from '@/data/usesData'
import Link from '@/components/Link'

export default function Uses() {
  return (
    <>
      <PageSEO title={`Uses - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Uses
        </h1>
        <p className="text-lg leading-7 text-gray-500">
          Software and hardware collection of things I'm using daily. Some of it are affiliate links{' '}
          <em>(marked by *)</em>. If you buy through them you won't pay more, but I'll get a small
          comission. This helps me deliver free content day by day.
        </p>
        <section>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-6 md:mt-12">
            <h2 className="text-2xl mb-0 font-extrabold leading-9 tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-4xl">
              Software
            </h2>
            <div className="grid grid-cols-1 gap-6 mt-2 sm:grid-cols-2 lg:grid-cols-3">
              {software.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="overflow-hidden bg-gray-100 rounded-xl p-4 hover:bg-gray-500 group transition duration-200 cursor-pointer"
                >
                  <div className="p-8">
                    <svg
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="leading-6 text-center text-gray-700 align-middle stroke-current w-12 h-12"
                    >
                      <path d="M4 17L10 11 4 5" />
                      <path d="M12 19L20 19" />
                    </svg>
                    <h3 className="mt-8 text-xl font-bold font-pj">{d.title}</h3>
                    <p className="mt-5 text-lg font-normal text-gray-700 font-pj">
                      {d.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
