"use client";
import "@/app/globals.css";
import React from "react";
import TranslateResult from "@/app/_component/TranslateResult";
import TranslateForm from "@/app/_component/TranslateForm";

const NGROK_PREFIX = process.env.NEXT_PUBLIC_NGROK_PREFIX;

export default class Main extends React.Component<
  { language: string },
  { translatedText: string, loading: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { translatedText: "", loading: false };
  }

  handleTranslate = (originText: string) => {
    this.setState({ loading: true }); // 로딩 시작
    const url =
      this.props.language === "한국어"
        ? `${NGROK_PREFIX}translate/korean?originText=${originText}`
        : `${NGROK_PREFIX}translate/chinese?originText=${originText}`;

    fetch(url, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({ translatedText: json.translated_text, loading: false }); // 로딩 종료
      });
  };

  handleSetEnglish = () => {
    this.setState({ loading: true }); // 로딩 시작
    const url = `${NGROK_PREFIX}translate/english?originText=${this.state.translatedText}`;
    fetch(url, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({ translatedText: json.translated_text, loading: false }); // 로딩 종료
      });
  };

  render() {
    return (
      <div className="relative mx-8 flex h-full flex-col justify-between sm:flex-row">
        <TranslateForm onSubmit={this.handleTranslate} />
        {this.state.loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="loader"></div> {/* 로딩 화면 */}
          </div>
        )}
        <TranslateResult
          translatedText={this.state.translatedText}
          onSetEnglish={this.handleSetEnglish}
        />
      </div>
    );
  }
}