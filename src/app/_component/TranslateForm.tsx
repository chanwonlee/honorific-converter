"use client";
import "@/app/globals.css";
import { useState } from "react";

export default ({ onSubmit }: { onSubmit: (text: string) => void }) => {
  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    onSubmit(inputText);
  };

  return (
    <div className="mx-8 flex h-full w-full flex-col">
      <textarea
        className="flex-grow resize-none rounded-t-md border-l-2 border-r-2 border-t-2 p-10 text-xl focus:outline-none"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>
      <div className="mb-8 flex h-16 justify-end rounded-b-md border-b-2 border-l-2 border-r-2">
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
