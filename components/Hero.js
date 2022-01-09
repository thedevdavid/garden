import Link from '@/components/Link'

const Hero = () => {
  return (
    <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          <iframe
            title="VideoAsk"
            src="https://www.videoask.com/flurdzt7t"
            allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"
            width="100%"
            height="560px"
            className="bg-black rounded-xl"
          ></iframe>
          <div className="order-first lg:order-last">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tighter font-black leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Building f*ckin’ cool digital products around the world 🌴.
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                I create videos, and write articles about how to build a business in software and
                travel around the world. React/Next.js, low-code, building businesses & apps,
                freelancing, productivity, digital nomad life, and some other seriously cool sh*t.
              </p>
              <Link
                href="/how-to-start-freelancing"
                className="inline-flex px-8 py-4 mt-6 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Start Freelancing in 2022
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
