"use client";
import React, { useState } from "react";
import Main from "@/app/_component/Main";
import Header from "@/app/_component/Header";
import Footer from "@/app/_component/Footer";

export default function Home() {
  const [language, setLanguage] = useState("한국어");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "한국어" ? "中文" : "한국어"
    );
  };

  return (
    <>
      <html>
      <body>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <Main language={language} />
      <Footer />
      </body>
      </html>
    </>
  );
}