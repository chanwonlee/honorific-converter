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
          className="m-0.5 h-full w-20 rounded-full bg-blue-300 hover:bg-blue-400 focus:outline-none"
          onClick={handleClick}
        >
          변환
        </button>
      </div>
    </div>
  );
};
