import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Database, BrainCircuit, Globe, Sparkles } from "lucide-react";
import Container from "../components/Container";
import profileImg from "../assets/profile.png";

const floatingIcons = [
  { Icon: Code2, className: "left-[12%] top-[30%]" },
  { Icon: Database, className: "left-[78%] top-[24%]" },
  { Icon: BrainCircuit, className: "left-[18%] top-[70%]" },
  { Icon: Globe, className: "left-[82%] top-[70%]" },
  { Icon: Sparkles, className: "left-[50%] top-[18%]" },
];

function useTyping(words, speed = 80, delay = 1400) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex === current.length) {
          setDeleting(true);
          return;
        }
        if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? speed / 2 : subIndex === current.length ? delay : speed
    );

    return () => clearTimeout(timeout);
  }, [words, index, subIndex, deleting, speed, delay]);

  return words[index].slice(0, subIndex);
}

function HeroSection({ data }) {
  const typedText = useTyping(data.hero.roles);

  return (
    <Container id="home" className="min-h-screen pt-28">
      <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-500"
          >
            Open To Internships & Full-time Roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display text-4xl font-bold leading-tight tracking-tight text-base-900 dark:text-base-50 sm:text-5xl lg:text-6xl"
          >
            Hello, I&apos;m <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-emerald-400 bg-clip-text text-transparent">
              {data.personal.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-5 h-8 text-lg font-semibold text-slate-700 dark:text-slate-200 sm:text-xl"
          >
            {typedText}
            <span className="ml-1 animate-pulse text-cyan-400">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-5 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg"
          >
            {data.hero.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110">
              View Projects
            </a>
            <a href={data.personal.resumeUrl} download className="glass rounded-xl px-5 py-3 text-sm font-semibold text-base-900 transition hover:border-sky-400/40 dark:text-base-100">
              Download Resume
            </a>
            <a href="#contact" className="rounded-xl border border-slate-500/30 px-5 py-3 text-sm font-semibold text-base-900 transition hover:border-sky-400 hover:text-sky-500 dark:text-base-100">
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glass relative overflow-hidden rounded-3xl p-3 shadow-glow">
            <div className="h-[430px] rounded-2xl border border-slate-300/10 bg-gradient-to-b from-slate-200/40 to-slate-50/20 p-6 dark:from-slate-700/20 dark:to-slate-900/30">
              <div className="h-full overflow-hidden rounded-xl">
                  <img
                    src={profileImg}
                    alt="Hitarth Kansara"
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
            </div>
          </div>
        </motion.div>

        {floatingIcons.map(({ Icon, className }, idx) => (
          <motion.div
            key={`${className}-${idx}`}
            className={`pointer-events-none absolute hidden rounded-full border border-slate-400/25 bg-slate-800/10 p-3 text-cyan-400/80 backdrop-blur md:block ${className}`}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon size={18} />
          </motion.div>
        ))}
      </div>
    </Container>
  );
}

export default HeroSection;
