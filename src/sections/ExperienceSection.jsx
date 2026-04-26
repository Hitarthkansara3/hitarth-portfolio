import { motion } from "framer-motion";
import { BriefcaseBusiness, Calendar } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

function ExperienceSection({ data }) {
  return (
    <Container id="experience">
      <SectionHeading eyebrow="Experience" title="Internship Experience" subtitle="Hands-on work in AI data quality pipelines and NLP training support." />

      <div className="relative pl-6 sm:pl-10">
        <div className="absolute left-1 top-0 h-full w-px bg-gradient-to-b from-sky-500 to-emerald-500" />
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="glass relative rounded-2xl p-6"
        >
          <div className="absolute -left-[29px] top-8 h-4 w-4 rounded-full border-2 border-sky-500 bg-base-50 dark:bg-base-950" />
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-400/30 px-3 py-1 text-xs text-slate-600 dark:text-slate-300">
              <BriefcaseBusiness size={14} /> {data.role}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-400/30 px-3 py-1 text-xs text-slate-600 dark:text-slate-300">
              <Calendar size={14} /> {data.duration}
            </span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold text-base-900 dark:text-base-100">{data.company}</h3>
          <ul className="mt-5 grid gap-3 text-sm text-slate-700 dark:text-slate-300 sm:grid-cols-2">
            {data.highlights.map((point) => (
              <li key={point} className="rounded-xl border border-slate-400/20 px-4 py-3">{point}</li>
            ))}
          </ul>
        </motion.article>
      </div>
    </Container>
  );
}

export default ExperienceSection;
