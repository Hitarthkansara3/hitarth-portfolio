import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

function CertificationsSection({ data }) {
  return (
    <Container id="certifications">
      <SectionHeading eyebrow="Certifications" title="Continuous Learning Highlights" subtitle="Recognized certifications in AI tools, coding proficiency, and technical fundamentals." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data.map((cert, index) => (
          <motion.article
            key={cert.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <Award size={20} className="text-emerald-400" />
            <h3 className="mt-4 font-display text-lg font-semibold text-base-900 dark:text-base-100">{cert.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{cert.issuer}</p>
          </motion.article>
        ))}
      </div>
    </Container>
  );
}

export default CertificationsSection;
