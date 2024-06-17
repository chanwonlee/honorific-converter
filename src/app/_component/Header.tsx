import "@/app/globals.css";

interface HeaderProps {
  language: string;
  toggleLanguage: () => void;
}

export default function Header({ language, toggleLanguage }: HeaderProps) {
  return (
    <header className="body-font text-gray-600">
      <div className="container mx-auto flex items-center justify-between p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
          {/* 로고 들어갈 자리 */}
          <span className="ml-3 text-xl">projectName</span>
        </a>
        <button
          className="mt-4 inline-flex items-center rounded-full border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0"
          onClick={toggleLanguage}
        >
          {language}
        </button>
      </div>
    </header>
  );
}
