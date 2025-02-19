import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import footerImage from '@/assets/images/Vectors.png'
import Image from "next/image";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  bg-[#093545] flex flex-col text-white min-h-screen`}
      >
        <main className="flex-1">
        <div className="md:w-[80%] mx-auto px-5 sm:px-10 py-10">

        {children}
        </div>
        </main>
        <footer className="">
          <Image src={footerImage} alt="NOt loading" className="w-full" />
        </footer>
      </body>
    </html>
  );
}
