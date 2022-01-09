import Link from '@/components/Link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <span className="mr-3">{text.split(' ').join('-')}</span>
    </Link>
  )
}

export default Tag
