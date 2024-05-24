"use client";
import "@/app/globals.css";
import CopyText from "@/app/_component/Copy";
import SendEmail from "@/app/_component/SendEmail";
// import Test from "@/app/_component/Test";

export default function TranslateResult({
  translatedText,
}: {
  translatedText: string;
}) {
  return (
    <div className="mx-8 flex h-full w-full flex-col">
      <div
        id="translateresult"
        className="mb-1 flex-grow resize-none rounded-md border-2 border-solid p-10 text-xl"
      >
        {translatedText}
      </div>
      <div className="mb-8 flex h-16 rounded-md border-2 border-gray-300">
        <CopyText />
        {/* <button className="flex h-full w-24 items-center justify-center rounded-l border border-gray-300 hover:bg-gray-200 focus:outline-none">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8 stroke-gray-500"
          >
            <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </button> */}
        <SendEmail />
        {/* <Test /> */}
        <button className="flex h-full w-24 items-center justify-center rounded-l border border-r-2 border-gray-300 hover:bg-gray-200 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8 stroke-gray-500"
          >
            <path d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
          </svg>
        </button>
      </div>
    </div>
  );
}
