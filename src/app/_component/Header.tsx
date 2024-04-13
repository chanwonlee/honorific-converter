import '@/app/globals.css'

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex justify-between items-center p-5 md:flex-row">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {/*로고 들어갈 자리*/}
          <span className="ml-3 text-xl">projectName</span>
        </a>
        <button
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
               stroke="currentColor"
               className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>
          </svg>
        </button>
      </div>

    </header>
  )
}