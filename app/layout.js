import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { personalData } from "@/utils/data/personal-data";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";

import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ansul Menaria | Cloud Architect, DevOps Engineer & Full Stack Developer",
  description:
    "Who I am? I am Ansul Menaria (aka Anshul) from Udaipur, Rajasthan. An End-to-End Engineer who converts \"It works on my machine\" into industrial-grade production and transforms caffeine-fueled logic into unbreakable cloud systems.",
  keywords: [
    "Ansul Menaria",
    "Anshul Menaria",
    "MERN Developer",
    "Cloud Developer",
    "DevOps Engineer",
    "AWS",
    "Full Stack Portfolio",
    "Indian Developer",
    "Udaipur Developer",
  ],
  authors: [{ name: "Ansul Menaria (Anshul Menaria)" }],
  creator: "Ansul Menaria",
  publisher: "Ansul Menaria",
  metadataBase: new URL("https://ansulmenaria-portfolio.netlify.app"),
  verification: {
    google: "cnNdQJ-gkTA7Etyi9QZ0JlzvLqzNr2w3yDSshIqsH6g",
  },
  openGraph: {
    title: "Ansul Menaria | Cloud Architect, DevOps Engineer & Full Stack Developer",
    description:
      "Who I am? I am Ansul Menaria (aka Anshul) from Udaipur, Rajasthan. An End-to-End Engineer who converts \"It works on my machine\" into industrial-grade production and transforms caffeine-fueled logic into unbreakable cloud systems.",
    url: "https://ansulmenaria-portfolio.netlify.app",
    siteName: "Ansul Menaria Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: personalData.profile,
        width: 1200,
        height: 630,
        alt: "Ansul Menaria Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ansulmenaria-portfolio.netlify.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Extra meta for alias */}
        <meta name="author" content="Ansul Menaria (Anshul Menaria)" />
        <meta name="alias" content="Anshul Menaria" />
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  );
}
