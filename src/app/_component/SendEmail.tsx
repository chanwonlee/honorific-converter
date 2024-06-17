import "@/app/globals.css";
import { useState } from "react";
import Image from "next/image";
import naverIcon from "../icons/naver.png";
import daumIcon from "../icons/daum.png";
import googleIcon from "../icons/google.png";

export default function SendEmail() {
  const [showIcons, setShowIcons] = useState(false);

  const handleClick = () => {
    setShowIcons((prev) => !prev);
  };

  const handleIconClick = (url: string) => {
    window.window.open(url);
  };

  return (
    <div className="relative">
      <button
        className="flex h-full w-24 items-center justify-center rounded-l border border-gray-300 hover:bg-gray-200 focus:outline-none"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-8 w-8 stroke-gray-500"
        >
          <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      </button>

      {showIcons && (
        <div className="absolute -right-20 top-16 flex h-20 w-60 space-x-2 rounded-md border border-gray-300 bg-white p-2 shadow-md">
          <button
            onClick={() => handleIconClick("https://mail.naver.com/v2/new")}
            className="flex items-center justify-center rounded border border-gray-300 hover:bg-gray-200 focus:outline-none"
          >
            <Image src={naverIcon} alt="Naver" width={500} height={500} />
          </button>

          <button
            onClick={() =>
              handleIconClick("https://mail.daum.net/top/INBOX?composer")
            }
            className="flex items-center justify-center rounded border border-gray-300 hover:bg-gray-200 focus:outline-none"
          >
            <Image src={daumIcon} alt="Daum" width={500} height={500} />
          </button>

          <button
            onClick={() =>
              handleIconClick(
                "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new",
              )
            }
            className="flex items-center justify-center rounded border border-gray-300 hover:bg-gray-200 focus:outline-none"
          >
            <Image src={googleIcon} alt="Google" width={500} height={500} />
          </button>
        </div>
      )}
    </div>
  );
}
