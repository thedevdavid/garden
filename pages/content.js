import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('content')

  return { props: { posts } }
}

export default function Blog({ posts }) {
  return (
    <>
      <PageSeo
        title={`Content - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/content`}
      />
      <ListLayout posts={posts} title="All Posts" />
    </>
  )
}
