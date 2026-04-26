import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Rocket } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

const icons = [MapPin, GraduationCap, Briefcase, Rocket];

function AboutSection({ data }) {
  return (
    <Container id="about">
      <SectionHeading eyebrow="About" title="Engineer + Builder Mindset" subtitle="A practical and product-oriented developer focused on shipping useful AI and web solutions." />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="glass rounded-2xl p-6"
        >
          <p className="text-slate-700 dark:text-slate-300">{data.bio}</p>
          <div className="mt-6 space-y-3">
            {data.details.map((item, index) => {
              const Icon = icons[index];
              return (
                <div key={item.label} className="flex items-center gap-3 rounded-xl border border-slate-400/20 p-3">
                  <Icon size={16} className="text-cyan-400" />
                  <span className="text-sm text-slate-700 dark:text-slate-200">{item.value}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {data.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass rounded-2xl p-5"
            >
              <p className="font-display text-3xl font-bold text-sky-500">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default AboutSection;
