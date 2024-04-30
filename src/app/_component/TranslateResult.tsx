import "@/app/globals.css";

export default function TranslateResult() {
  return (
    <div className="mx-8 flex h-full w-full flex-col">
      <div className="mb-1 flex-grow resize-none rounded-md border-2 border-solid p-10 text-xl">
        안녕하세요 교수님 저는 홍길동입니다. 파이썬 수업을 듣는데 오늘 수업이
        너무 어렵습니다. 궁금한 점이 있는데 내일 몇 시에 시간이 되시나요? 만나서
        물어보고 싶습니다. 시간 말씀해주시면 찾아가겠습니다.
      </div>
      <div className="mb-8 flex h-16 rounded-md border-2 border-gray-300">
        <button className="h-full w-24 rounded-l border border-gray-300 hover:bg-gray-200 focus:outline-none">
          복사
        </button>
        <button className="h-full w-24 border border-gray-300 hover:bg-gray-200 focus:outline-none">
          메일
        </button>
        <button className="h-full w-24 border border-r-2 border-gray-300 hover:bg-gray-200 focus:outline-none">
          영문변환
        </button>
      </div>
    </div>
  );
}
