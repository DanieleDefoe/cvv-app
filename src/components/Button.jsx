export default function Button({
  type = 'button',
  text,
  bg = 'bg-gray-800',
  handleClick,
}) {
  return (
    <button
      type={type}
      className={`${bg} w-full text-2xl py-3 px-4 rounded-lg text-gray-50 capitalize hover:opacity-70 transition-all ease-in-out duration-200`}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}
