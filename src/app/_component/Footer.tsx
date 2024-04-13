import '@/app/globals.css'

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            {/*로고 들어갈 자리*/}
            <span className="ml-3 text-xl">projectName</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 projectName
          </p>
        </div>
      </div>
    </footer>
  )
}