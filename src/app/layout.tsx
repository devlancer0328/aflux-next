import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import Swiper from "@/components/Hero/Swiper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aflux® - przyszłość jest dziś",
  description:
    "Krem do ciała poprawiający jędrność i sprężystość skóry, wygładzający pory i nadający skórze świetlisty blask.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <header>
          <Header />
          <Swiper />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
