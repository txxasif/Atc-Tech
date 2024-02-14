import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ATC Tech Limited",
  description: "ATC Tech Limited",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth `}>
        <section>
          <div className="fixed w-full z-10 bg-white ">
            <Navbar />
          </div>
          <div>{children}</div>
          <div>
            <Footer />
          </div>
        </section>
      </body>
    </html>
  );
}
