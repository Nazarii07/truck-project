import { Inter } from "next/font/google";
import "./globals.css";
import { WavyBackground } from "@/components/ui/wavy-background";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Metadata } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mart Transit LLC",
  description:
    "Mart Transit LLC transport transfer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />;
      </Head>
      <body className={inter.className}>
       
        <main className="flex flex-col items-center w-full bg-contentBg">
            <Header />
            {children}
            <Footer />
          </main>
      </body>
    </html>
  );
}
