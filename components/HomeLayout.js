import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import Footer from './Footer'
import MobileNav from './MobileNav'
import Hero from './Hero'

const HomeLayout = ({ isHome, children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <header className="border-black border-b mb-4">
        <div className="max-w-3xl mx-auto md:max-w-5xl lg:max-w-7xl flex items-stretch justify-between py-3">
          <div className="w-64">
            <Link href="/" aria-label="David Levai's Digital Garden">
              <div className="flex items-center justify-between">
                {/* <div className="mr-3">
                    <Logo />
                  </div> */}
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 text-xl font-bold text-gray-900 sm:p-4 border-black first:border-l border-r hover:bg-black hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <MobileNav />
          </div>
        </div>
      </header>
      <Hero />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default HomeLayout
