"use client";
import React, { useState } from "react";
import Header from "@/app/_component/Header";
import Footer from "@/app/_component/Footer";
import Main from "@/app/_component/Main";

export default function RootLayout() {
  const [language, setLanguage] = useState("한국어");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "한국어" ? "中文" : "한국어",
    );
  };

  return (
    <html suppressHydrationWarning>
      <body className="mx-auto flex w-full max-w-screen-2xl flex-col">
        <Header language={language} toggleLanguage={toggleLanguage} />
        <Main language={language} />
        <Footer />
      </body>
    </html>
  );
}
