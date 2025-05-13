import Script from "next/script";
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export const metadata = {
  title: "Ansul Menaria | Cloud Architect & Full Stack Developer",
  description:
    "Official portfolio of Ansul Menaria (also known as Anshul Menaria) - Cloud Architect & Full Stack Developer. Projects, blogs, skills, and experiences.",
  keywords:
    "Ansul Menaria, Anshul Menaria, Cloud Developer, MERN Stack, AWS, DevOps, Portfolio, Udaipur",
  authors: [{ name: "Ansul Menaria (Anshul Menaria)" }],
  robots: "index, follow",
  openGraph: {
    title: "Ansul Menaria | Cloud Architect & Full Stack Developer",
    description:
      "Portfolio of Ansul Menaria (aka Anshul Menaria) showcasing cloud projects, full-stack development, and professional experience.",
    type: "website",
    url: "https://ansulmenaria-portfolio.netlify.app/",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Ansul Menaria Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://ansulmenaria-portfolio.netlify.app/",
  },
  verification: {
    google: "HFyS21yEIAA-_WywtRCWPEqacmIWTByik46TSAKxARI",
  },
};

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  return data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
}

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      {/* ✅ Structured Data */}
      <Script
        id="schema-json"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ansul Menaria",
            alternateName: "Anshul Menaria",
            url: "https://ansulmenaria-portfolio.netlify.app/",
            sameAs: [
              "https://github.com/ansulmenaria",
              "https://www.linkedin.com/in/ansulmenaria",
            ],
            jobTitle: "Full Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance / REGex Software Services",
            },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Tech Educational Institute (if any)",
            },
            description:
              "Cloud & MERN Stack Developer from Udaipur, also known as Anshul Menaria, specializing in DevOps, AWS, and full-stack development.",
          }),
        }}
      />

      <main suppressHydrationWarning>
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Blog blogs={blogs} />
        <ContactSection />
      </main>
    </>
  );
}
