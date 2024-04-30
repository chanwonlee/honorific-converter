import Header from "@/app/_component/Header";
import Footer from "@/app/_component/Footer";

export const metadata = {
  title: "project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className="mx-auto flex w-full max-w-screen-2xl flex-col">
        <Header />
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
