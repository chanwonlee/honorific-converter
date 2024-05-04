"use client";
import "@/app/globals.css";
import CopyText from "@/app/_component/Copy";

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
