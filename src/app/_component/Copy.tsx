import "@/app/globals.css";
import Swal from "sweetalert";
import { useEffect } from "react";

function showCustomAlert(title: string, message: string, type: string) {
  Swal(title, message, type);
}

export default function CopyText() {
  const handleClick = () => {
    try {
      const translateResult = document.getElementById("translateresult");

      if (translateResult?.innerText) {
        navigator.clipboard.writeText(translateResult.innerText);
        showCustomAlert(
          "복사에 성공하였습니다.",
          "번역 결과를 클립보드에 복사하였습니다.",
          "success",
        );
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

  return (
    <button
      className="h-full w-24 rounded-l border border-gray-300 hover:bg-gray-200 focus:outline-none"
      onClick={handleClick}
    >
      복사
    </button>
  );
}
