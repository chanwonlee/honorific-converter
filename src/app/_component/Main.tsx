"use client";
import "@/app/globals.css";
import React from "react";
import TranslateResult from "@/app/_component/TranslateResult";
import TranslateForm from "@/app/_component/TranslateForm";

export default class Main extends React.Component<
  { language: string },
  { translatedText: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { translatedText: "" };
  }

  handleTranslate = (originText: string) => {
    if (this.props.language === "한국어") {
      const url =
        "http://localhost:8000/translate/korean?originText=" + originText;
      fetch(url, {
        method: "get",
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.setState({ translatedText: json.translated_text });
        });
      return;
    } else {
      const url =
        "http://localhost:8000/translate/chinese?originText=" + originText;
      fetch(url, {
        method: "get",
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.setState({ translatedText: json.translateText });
        });
    }
  };

  handleSetEnglish = () => {
    const url =
      "http://localhost:8080/english?originText=" + this.state.translatedText;
    fetch(url, {
      method: "get",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({ translatedText: json.translateText });
      });
  };

  render() {
    return (
      <div className="mx-8 flex h-full flex-col justify-between sm:flex-row ">
        <TranslateForm onSubmit={this.handleTranslate} />
        <TranslateResult
          translatedText={this.state.translatedText}
          onSetEnglish={this.handleSetEnglish}
        />
      </div>
    );
  }
}
