import Head from "next/head";
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  const filtered = data
    .filter((item) => item?.cover_image)
    .sort(() => Math.random() - 0.5);

  return filtered;
}

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <Head>
        <title>Ansul Menaria | Cloud & MERN Stack Developer</title>
        <meta
          name="description"
          content="Official portfolio of Ansul Menaria - Cloud & MERN Stack Developer. Projects, blogs, skills, and experiences."
        />
        <meta
          name="keywords"
          content="Ansul Menaria, Anshul Menaria, Cloud Developer, MERN Stack, AWS, DevOps, Portfolio, Udaipur"
        />
        <meta name="author" content="Ansul Menaria" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Ansul Menaria | Cloud & MERN Stack Developer" />
        <meta
          property="og:description"
          content="Portfolio of Ansul Menaria showcasing cloud projects, full-stack development, and professional experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ansulmenaria-portfolio.netlify.app/" />
        <meta property="og:image" content="/og-image.jpg" /> {/* Replace with actual image if available */}

        <link rel="canonical" href="https://ansulmenaria-portfolio.netlify.app/" />
      </Head>

      <div suppressHydrationWarning>
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Blog blogs={blogs} />
        <ContactSection />
      </div>
    </>
  );
}
