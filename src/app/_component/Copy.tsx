import "@/app/globals.css";
import Swal from "sweetalert";

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
        <path d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
      </svg>
    </button>
  );
}
