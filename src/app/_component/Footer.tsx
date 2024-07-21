import "@/app/globals.css";
import Image from "next/image";
import logo from "@/app/icons/logo.png";
import github from "@/app/icons/github.png";
import daumIcon from "@/app/icons/daum.png";

export default function Footer() {
  const handleIconClick = (url: string) => {
    window.window.open(url);
  };

  return (
    <footer className="body-font text-gray-600">
      <div className="bg-gray-100">
        <div className="container mx-auto flex flex-col items-center px-5 py-6 sm:flex-row">
          <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
            <Image src={logo} alt="logo" width={120} height={120} />
          </a>
          <p className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0">
            © 메일매일보고싶은교수님
          </p>
          <button
            onClick={() =>
              handleIconClick("https://github.com/chanwonlee/honorific-converter")
            }
            className="flex items-center justify-center rounded border border-gray-300 hover:bg-gray-200 focus:outline-none ml-6 border-none"
          >
            <Image src={github} alt="Daum" width={25} height={25}/>
          </button>
        </div>
      </div>
    </footer>
  );
}
