import "@/app/globals.css";
import TranslateForm from "@/app/_component/TranslateForm";
import TranslateResult from "@/app/_component/TranslateResult";

export default function Main() {
  return (
    <div className="flex h-full justify-between">
      <TranslateForm />
      <TranslateResult />
    </div>
  );
}
