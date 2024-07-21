import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Mail",
  description: "Mail Service",
  icons: {
    icon: "/image/favicon.ico",
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="w-full flex-col flex">{children}</body>
    </html>
  );
}