import { useForm } from 'react-hook-form'
import * as Fathom from 'fathom-client'
import { ErrorMessage } from '@hookform/error-message'
import SuccessMessage from '@/components/SuccessMessage'

const EmailCTA = ({
  title = '100+ developers like you are already getting jacked 💪 on the business-side of software development.',
  description = 'Do you want to join them?',
  list = 'monthly',
  cta = 'Let me in!',
  embedded = false,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm()

  const subscribe = async ({ email }) => {
    const res = await fetch(`/api/emailoctopus?email=${email}&list=${list}`)
    if (res.ok) {
      Fathom.trackGoal('HJIZXWMZ', 0)
    }
    return res
  }

  const onSubmit = (data) => subscribe(data)

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 font-pj">{title}</h2>
          <p className="max-w-md mx-auto mt-5 text-base font-normal text-gray-600 font-pj">
            {description}
          </p>
        </div>
        <div className="relative max-w-lg mx-auto mt-14">
          <div className="absolute -inset-x-2 -inset-y-5">
            <div
              className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
              style={{
                background:
                  'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
              }}
            />
          </div>
          {isSubmitSuccessful ? (
            <SuccessMessage handleReset={reset} />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="block w-full px-5 py-6 text-base font-normal text-black placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none"
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

              <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-3">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    w-full
                    px-8
                    py-4
                    text-base
                    font-bold
                    text-white
                    transition-all
                    duration-200
                    bg-gray-900
                    border border-transparent
                    sm:w-auto sm:py-3
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                    font-pj
                    hover:bg-opacity-90
                    rounded-xl
                "
                >
                  {cta}
                </button>
              </div>
            </form>
          )}
        </div>
        <p className="mt-6 text-sm font-normal text-center text-gray-500 font-pj">
          No spam ever. I promise.
        </p>
      </div>
    </section>
  )
}

export default EmailCTA
