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
  title: "Ansul Menaria | Cloud Architect, DevOps Engineer & Full Stack Developer",
  description:
    "Who I am? I am Ansul Menaria (aka Anshul) from Udaipur, Rajasthan. An End-to-End Engineer who converts \"It works on my machine\" into industrial-grade production and transforms caffeine-fueled logic into unbreakable cloud systems.",
  keywords:
    "Ansul Menaria, Anshul Menaria, Cloud Developer, MERN Stack, AWS, DevOps, Portfolio, Udaipur, Jaipur",
  authors: [{ name: "Ansul Menaria (Anshul Menaria)" }],
  robots: "index, follow",
  openGraph: {
    title: "Ansul Menaria | Cloud Architect, DevOps Engineer & Full Stack Developer",
    description:
      "Who I am? I am Ansul Menaria (aka Anshul) from Udaipur, Rajasthan. An End-to-End Engineer who converts \"It works on my machine\" into industrial-grade production and transforms caffeine-fueled logic into unbreakable cloud systems.",
    type: "website",
    url: "https://ansulmenaria-portfolio.netlify.app/",
    images: [
      {
        url: personalData.profile,
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
    google: "cnNdQJ-gkTA7Etyi9QZ0JlzvLqzNr2w3yDSshIqsH6g",
  },
};

async function getData() {
  if (!personalData.devUsername) {
    return [];
  }

  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
  if (!res.ok) {
    return [];
  }

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
            jobTitle: "DevOps Engineer | Cloud Architect | Full Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "ATV Tech Solutions/REGex Software Services",
            },
            alumniOf: {
              "@type": "University",
              name: "MohanLal Sukhadia University",
            },
            description:
              "Ansul Menaria (aka Anshul) from Udaipur, Rajasthan. Cloud Architect, DevOps Engineer & Full Stack Developer specializing in AWS, Azure, and MERN stack.",
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
