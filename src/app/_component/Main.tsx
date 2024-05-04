"use client";
import "@/app/globals.css";
import React from "react";
import TranslateResult from "@/app/_component/TranslateResult";
import TranslateForm from "@/app/_component/TranslateForm";

export default class Main extends React.Component<
  {},
  { translatedText: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { translatedText: "" };
  }

  handleTranslate = (originText: string) => {
    const translatedText = "번역 ->" + ' "' + originText + '"';
    console.log(translatedText);
    this.setState({ translatedText });
  };

  render() {
    // @ts-ignore
    return (
      <div className="flex h-full justify-between">
        <TranslateForm onSubmit={this.handleTranslate} />
        <TranslateResult translatedText={this.state.translatedText} />
      </div>
    );
  }
}
