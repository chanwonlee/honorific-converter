import Header from "@/app/_component/Header";
import Footer from "@/app/_component/Footer";

export const metadata = {
  title: 'project',
}

export default function RootLayout({
children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
    <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
    <Header/>
    <div className='grow bg-amber-100'>{children}</div>
    <Footer/>
    </body>
    </html>
  )
}
