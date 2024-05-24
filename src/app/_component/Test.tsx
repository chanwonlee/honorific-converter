import "@/app/globals.css";
import Swal from "sweetalert";
import { useState } from "react";

function showCustomAlert(title: string, message: string, type: string) {
  Swal(title, message, type);
}

export default function CopyText() {
  const [showIcons, setShowIcons] = useState(false);

  const handleClick = () => {
    try {
      const translateResult = document.getElementById("translateresult");

      if (translateResult?.innerText) {
        navigator.clipboard.writeText(translateResult.innerText);
        setShowIcons(true); // 아이콘 보이기
      } else {
        showCustomAlert(
          "복사에 실패하였습니다.",
          "번역 결과가 존재하지 않습니다.",
          "error",
        );
      }
    } catch (error) {
      showCustomAlert("Error", "관리자에게 문의 해 주세요.", "warning");
    }
  };

  const handleIconClick = (url: string) => {
    window.location.href = url;
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
        <div className="absolute left-0 top-full mt-2 flex space-x-2 rounded-md border border-gray-300 bg-white p-2 shadow-md">
          <button
            onClick={() => handleIconClick("https://mail.naver.com/")}
            className="flex items-center justify-center rounded border border-gray-300 p-2 hover:bg-gray-200 focus:outline-none"
          >
            <img src="/icons/naver-icon.png" alt="Naver" className="h-8 w-8" />
          </button>
          <button
            onClick={() => handleIconClick("https://mail.daum.net/")}
            className="flex items-center justify-center rounded border border-gray-300 p-2 hover:bg-gray-200 focus:outline-none"
          >
            <img src="/icons/daum-icon.png" alt="Daum" className="h-8 w-8" />
          </button>
          <button
            onClick={() => handleIconClick("https://mail.google.com/")}
            className="flex items-center justify-center rounded border border-gray-300 p-2 hover:bg-gray-200 focus:outline-none"
          >
            <img
              src="/icons/google-icon.png"
              alt="Google"
              className="h-8 w-8"
            />
          </button>
        </div>
      )}
    </div>
  );
}
