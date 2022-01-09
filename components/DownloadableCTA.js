import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import SuccessMessage from '@/components/SuccessMessage'

const DownloadableCTA = ({
  title = '100+ developers like you are already getting jacked on the business-side of software development.',
  description = 'Do you want to join them?',
  list = 'tailwind',
  cta = 'I want the free components!',
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm()

  const subscribe = async ({ email }) => {
    const res = await fetch(`/api/emailoctopus?email=${email}&list=${list}`)
    return res
  }

  const onSubmit = (data) => subscribe(data)

  return (
    <div className="not-prose text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block text-white">Hey there!</span>
                <span className="block text-white">I've made 6 glassmorph components</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-200">
                Available for free, usable by copy and paste. Leave your email address here and get
                instant access to them.
              </p>
              {isSubmitSuccessful ? (
                <SuccessMessage handleReset={reset} />
              ) : (
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full border-white px-5 py-3 placeholder-gray-600 font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-gray-800 text-black"
                    placeholder="Enter your email"
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                  >
                    {cta}
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="-mt-6 aspect-w-[5/3] md:aspect-[2/1]">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
              alt="Glassmorph components"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadableCTA
