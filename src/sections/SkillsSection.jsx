import { motion } from "framer-motion";
import { Code, Layers, BarChart3, Wrench } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

const categoryIcons = {
  Languages: Code,
  Frameworks: Layers,
  Libraries: BarChart3,
  Tools: Wrench,
};

function SkillsSection({ data }) {
  return (
    <Container id="skills">
      <SectionHeading eyebrow="Skills" title="Tech Stack and Tooling" subtitle="Strong foundation in programming, data workflows, ML tooling, and full-stack development." />

      <div className="grid gap-5 lg:grid-cols-2">
        {data.categories.map((category, index) => {
          const Icon = categoryIcons[category.name] || Code;
          return (
            <motion.article
              key={category.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="glass rounded-2xl p-6 transition hover:shadow-glow"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-sky-500/15 p-2 text-sky-500">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-xl font-semibold text-base-900 dark:text-base-100">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-slate-700 dark:text-slate-200">{skill.name}</span>
                      <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-300/30 dark:bg-slate-700/50">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Container>
  );
}

export default SkillsSection;
