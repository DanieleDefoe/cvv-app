export default function Footer() {
  return (
    <footer className="w-full py-4 px-5 bg-gray-800 justify-center items-center flex gap-4 rounded-t-2xl shadow-2xl">
      <small className="text-gray-50 text-xl">
        Copyright &copy; {new Date().getFullYear()} Abuzar Mamedov
      </small>
      <a className="bg-github block w-8 h-8 hover:opacity-70 transition-all duration-200 ease-in-out cursor-pointer"></a>
    </footer>
  )
}
