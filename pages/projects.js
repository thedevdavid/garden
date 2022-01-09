import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Projects
        </h1>
        <p className="text-lg leading-7 text-gray-500">
          Things I've built in the past years and I'm proud of.
        </p>
      </div>
      <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-12">In Progress...</section>
    </>
  )
}

// Projects.getLayout = function getLayout(page) {
//   return page
// }
