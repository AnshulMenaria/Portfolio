import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";

import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ansul Menaria | Cloud Architect & Full Stack Developer",
  description:
    "This is the official portfolio of Ansul Menaria (also known as Anshul Menaria), a Full Stack Developer with MERN stack, AWS, and DevOps expertise.",
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
    google: "HFyS21yEIAA-_WywtRCWPEqacmIWTByik46TSAKxARI",
  },
  openGraph: {
    title: "Ansul Menaria | Cloud Architect & Full Stack Developer",
    description:
      "Explore the portfolio of Ansul Menaria (Anshul Menaria) showcasing cloud projects, full-stack applications, and experience.",
    url: "https://ansulmenaria-portfolio.netlify.app",
    siteName: "Ansul Menaria Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://ansulmenaria-portfolio.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ansul Menaria Portfolio Image",
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
