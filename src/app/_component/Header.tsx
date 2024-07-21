import "@/app/globals.css";
import Image from "next/image";
import logo from "@/app/icons/logo.png";

interface HeaderProps {
  language: string;
  toggleLanguage: () => void;
}

export default function Header({ language, toggleLanguage }: HeaderProps) {
  return (
    <header className="body-font text-gray-600">
      <div className="container mx-auto flex items-center justify-between p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
          <Image src={logo} alt="logo" width={180} height={100} className="ml-2 mt-1" />
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
