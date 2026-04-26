import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Github, GitBranch, BarChart3, Code2 } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 70, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => setDisplay(Math.floor(latest)));
    return unsubscribe;
  }, [springValue]);

  return <span ref={ref}>{display}</span>;
}

function GithubSection({ data }) {
  const cards = [
    { label: "Contributions", value: 1287, icon: GitBranch },
    { label: "Repositories", value: 52, icon: Github },
    { label: "Top Languages", value: 8, icon: Code2 },
    { label: "Activity Score", value: 94, icon: BarChart3 },
  ];

  return (
    <Container id="github">
      <SectionHeading eyebrow="GitHub" title="Code Consistency and Open Source Presence" subtitle="Placeholder-driven cards ready for live GitHub API integration." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.article
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="glass rounded-2xl p-5"
            >
              <Icon size={18} className="text-cyan-400" />
              <p className="mt-3 font-display text-3xl font-bold text-base-900 dark:text-base-100">
                <Counter value={card.value} />
                {card.label === "Activity Score" ? "%" : "+"}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{card.label}</p>
            </motion.article>
          );
        })}
      </div>

      <a
        href={data.profileUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
      >
        Visit GitHub Profile
      </a>
    </Container>
  );
}

export default GithubSection;
