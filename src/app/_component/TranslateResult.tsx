"use client";
import "@/app/globals.css";
import CopyText from "@/app/_component/Copy";
import SendEmail from "@/app/_component/SendEmail";

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
        <SendEmail />
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
