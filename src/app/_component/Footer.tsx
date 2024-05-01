import "@/app/globals.css";

export default function Footer() {
  return (
    <footer className="body-font text-gray-600">
      <div className="bg-gray-100">
        <div className="container mx-auto flex flex-col items-center px-5 py-6 sm:flex-row">
          <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
            {/*로고 들어갈 자리*/}
            <span className="ml-3 text-xl">projectName</span>
          </a>
          <p className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0">
            © 2024 projectName
          </p>
        </div>
      </div>
    </footer>
  );
}
