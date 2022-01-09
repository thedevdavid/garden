import { XIcon } from '@heroicons/react/outline'

const SuccessMessage = ({ handleReset }) => (
  <p className="p-3 flex items-center justify-center">
    <span>Success. Check your inbox and confirm your email.</span>
    <span className="self-center text-center flex mr-1 items-center">
      <button
        onClick={() => handleReset()}
        className="bg-success text-white rounded-full h-4 w-4 mt-auto ml-1 hover:bg-red-500 transition-colors duration-200"
      >
        <XIcon className="h-4 w-4 mx-auto" />
      </button>
    </span>
  </p>
)

export default SuccessMessage
