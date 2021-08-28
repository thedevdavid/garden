import { XIcon } from '@heroicons/react/outline'

const SuccessMessage = ({ handleReset }) => (
  <p className="text-lg p-3 flex">
    <span>Success. Check your inbox and confirm your email.</span>
    <span className="self-center flex mr-1">
      <button
        onClick={() => handleReset()}
        className="bg-success text-white rounded-full h-4 w-4 mt-auto ml-1 hover:bg-red-500 transition-colors duration-200"
      >
        <XIcon className="h-2 w-2 mx-auto" />
      </button>
    </span>
  </p>
)

export default SuccessMessage
