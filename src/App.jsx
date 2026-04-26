import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import LoadingScreen from "./components/LoadingScreen";
import BackToTop from "./components/BackToTop";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import GithubSection from "./sections/GithubSection";
import CertificationsSection from "./sections/CertificationsSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";
import { portfolioData } from "./data/content";

const sectionOrder = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "certifications",
  "contact",
];

function App() {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDarkPreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme || (isDarkPreferred ? "dark" : "light");
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1900);
    return () => window.clearTimeout(timer);
  }, []);

  const navItems = useMemo(
    () => sectionOrder.map((id) => ({ id, label: id.charAt(0).toUpperCase() + id.slice(1) })),
    []
  );

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <ScrollProgress />
      <CursorGlow />

      <div className="relative min-h-screen overflow-x-hidden bg-base-50 text-base-900 transition-colors duration-500 dark:bg-base-950 dark:text-base-100">
        <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(167,139,250,0.12),transparent_35%)]" />
        <div className="blob blob-one" />
        <div className="blob blob-two" />

        <Navbar navItems={navItems} theme={theme} onToggleTheme={toggleTheme} resumeUrl={portfolioData.personal.resumeUrl} />

        <motion.main
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <HeroSection data={portfolioData} />
          <AboutSection data={portfolioData.about} />
          <SkillsSection data={portfolioData.skills} />
          <ExperienceSection data={portfolioData.experience} />
          <ProjectsSection data={portfolioData.projects} />
          <GithubSection data={portfolioData.github} />
          <CertificationsSection data={portfolioData.certifications} />
          <ContactSection data={portfolioData.contact} />
        </motion.main>

        <FooterSection name={portfolioData.personal.name} />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
