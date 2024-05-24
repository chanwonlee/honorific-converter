import "@/app/globals.css";
import Swal from "sweetalert";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next"); // Next.js에서 필요한 설정

function showCustomAlert(title: string, message: string, type: string) {
  Swal(title, message, type);
}

export default function CopyText() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
        setModalIsOpen(true); // 모달 열기
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
    <>
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Select Email Service"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>이메일 서비스를 선택하세요</h2>
        <div className="flex space-x-4">
          <button onClick={() => handleIconClick("https://mail.naver.com/")}>
            <img src="/icons/naver-icon.png" alt="Naver" className="h-8 w-8" />
          </button>
          <button onClick={() => handleIconClick("https://mail.daum.net/")}>
            <img src="/icons/daum-icon.png" alt="Daum" className="h-8 w-8" />
          </button>
          <button onClick={() => handleIconClick("https://mail.google.com/")}>
            <img
              src="/icons/google-icon.png"
              alt="Google"
              className="h-8 w-8"
            />
          </button>
        </div>
      </Modal>
    </>
  );
}
