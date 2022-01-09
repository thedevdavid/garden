import { useForm } from 'react-hook-form'
import * as Fathom from 'fathom-client'
import { ErrorMessage } from '@hookform/error-message'
import SuccessMessage from '@/components/SuccessMessage'
import { PageSEO } from '@/components/SEO'
import Footer from '@/components/Footer'
import Image from '@/components/Image'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

export default function BusinessOfIT() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm()

  const subscribe = async ({ email }) => {
    const res = await fetch(`/api/emailoctopus?email=${email}&list=monthly`)
    if (res.ok) {
      Fathom.trackGoal('HJIZXWMZ', 0)
    }
    return res
  }

  const onSubmit = (data) => subscribe(data)

  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description="Free 5 days email course for developers on how to get started in business."
      />
      <div className="">
        <header className="py-4 md:py-6">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <Link
                  href="/business-of-it"
                  title
                  className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 font-black text-xl"
                >
                  DevBizAcademy
                </Link>
              </div>
            </div>
          </div>
        </header>
        <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
              <div>
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl font-black tracking-tight leading-[0.9] text-gray-900 sm:text-5xl lg:text-6xl ">
                    Earn more, and learn more as an entrepreneur developer
                  </h1>
                  <p className="mt-2 text-lg text-gray-600 sm:mt-8 ">
                    For us, software developers, well-paying jobs are easy to find, but there’s a
                    downside – our time is spent building software according to someone else’s
                    vision rather than our own.
                  </p>
                  <p className="mt-8 text-gray-600 prose">
                    Each month, I publish a newsletter about entrepreneurship, programming, digital
                    products, productivity, digital nomad life.
                    <br />
                    What it contains:
                    <ul>
                      <li>a lesson from entrepreneurship</li>
                      <li>best travel finds in the current country</li>
                      <li>
                        5 best finds in development, productivity, and business from last month
                      </li>
                      <li>2-3 most recent tutorials, content, courses</li>
                      <li>
                        status of my businesses and products, as well as how I'm building them
                      </li>
                    </ul>
                  </p>
                  {isSubmitSuccessful ? (
                    <SuccessMessage handleReset={reset} />
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 sm:mt-10">
                      <div className="relative sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter email address"
                          className="block w-full px-4 py-5 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                          required
                          {...register('email', {
                            required: 'Email is required.',
                            pattern: {
                              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            },
                            message: 'Please enter a vaild email.',
                          })}
                          disabled={isSubmitting}
                        />
                        <ErrorMessage errors={errors} name="email" />
                        <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                          <button
                            disabled={isSubmitting}
                            type="submit"
                            className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600  hover:bg-gray-600"
                          >
                            Let me see!
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
                {/* <div className="flex mt-5 space-x-6 sm:space-x-8">
                  <div className="mt-5 sm:mt-10">
                    <div className="flex">
                      <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <blockquote className="mt-6">
                      <p className="text-lg font-bold text-gray-900 ">
                        One breakout sentence!
                      </p>
                      <p className="mt-3 text-base leading-7 text-gray-600 ">
                        Consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu,
                        aliquam nulla tincidunt gravida. Cursus convallis dolor semper pretium
                        ornare.
                      </p>
                    </blockquote>
                    <div className="flex mt-3">
                      <Image
                        width="24"
                        height="24"
                        className="flex-shrink-0 object-cover w-6 h-6 overflow-hidden rounded-full"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png"
                        alt=""
                      />
                      <p className="ml-2 text-base font-bold text-gray-900">Full Name</p>
                    </div>
                  </div>
                </div> */}
              </div>
              <div>
                <Image
                  width="680"
                  height="850"
                  className="w-full"
                  src="https://d33wubrfki0l68.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer cta={false} />
    </>
  )
}

BusinessOfIT.getLayout = function getLayout(page) {
  return page
}
