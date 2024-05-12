"use client";
import "@/app/globals.css";
import { useState } from "react";

export default ({ onSubmit }: { onSubmit: (text: string) => void }) => {
  const [inputText, setInputText] = useState("");
  let [inputCount, setInputCount] = useState(0);

  const handleClick = () => {
    onSubmit(inputText);
  };

  const onInputHandler = (e: any) => {
    setInputCount(e.target.value.length);
  };

  return (
    <div className="mx-8 flex h-full w-full flex-col">
      <textarea
        className="flex-grow resize-none rounded-t-md border-l-2 border-r-2 border-t-2 p-10 text-xl focus:outline-none"
        value={inputText}
        maxLength={2000}
        onChange={(e) => {
          setInputText(e.target.value);
          onInputHandler(e);
        }}
      ></textarea>
      <div className="mb-8 flex h-16 justify-between rounded-b-md border-b-2 border-l-2 border-r-2">
        <p className="pl-2 pt-8">
          <span className="text-slate-500">{inputCount}</span>
          <span className="text-slate-500"> / 2000</span>
        </p>
        <button
          className="m-1 flex h-14 w-14 items-center justify-center rounded-full bg-blue-300 hover:bg-blue-400 focus:outline-none "
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 stroke-2"
          >
            <path d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};
