import { ChevronRightIcon } from '@heroicons/react/solid'
import { BookOpenIcon, VideoCameraIcon, CodeIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const links = [
  {
    title: 'Content',
    description: 'Read about the business of IT or how to build production-ready SaaS',
    icon: BookOpenIcon,
    route: '/content',
  },
  {
    title: 'Projects',
    description: 'My open-source and private projects',
    icon: CodeIcon,
    route: '/projects',
  },
  {
    title: 'YouTube',
    description: 'Tutorials, guides, and vlog',
    icon: VideoCameraIcon,
    route: 'https://dvdlv.me/yt',
  },
]

export default function FourOFour() {
  return (
    <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto py-16 sm:py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide">404 error</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            This page does not exist.
          </h1>
          <p className="mt-2 text-lg">The page you are looking for could not be found.</p>
        </div>
        <div className="mt-12">
          <h2 className="text-sm font-semibold tracking-wide uppercase">Popular pages</h2>
          <ul className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
            {links.map((link, linkIdx) => (
              <li key={linkIdx} className="relative py-6 flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50">
                    <link.icon className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-medium text-gray-900">
                    <span className="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <Link href="/" className="focus:outline-none">
                        <a>
                          <span className="absolute inset-0" aria-hidden="true" />
                          {link.title}
                        </a>
                      </Link>
                    </span>
                  </h3>
                  <p className="text-base">{link.description}</p>
                </div>
                <div className="flex-shrink-0 self-center">
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/" className="text-base font-medium">
              <a>
                Or go back home<span aria-hidden="true"> &rarr;</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
