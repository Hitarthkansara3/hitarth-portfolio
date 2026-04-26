import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

function ContactSection({ data }) {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <Container id="contact">
      <SectionHeading eyebrow="Contact" title="Let&apos;s Build Something Valuable" subtitle="Open to internships, freelance opportunities, and collaborative projects." />

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="glass rounded-2xl p-6"
        >
          <div className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
            <p className="inline-flex items-center gap-2"><Mail size={16} className="text-cyan-400" /> {data.email}</p>
            <p className="inline-flex items-center gap-2"><Phone size={16} className="text-cyan-400" /> {data.phone}</p>
            <p className="inline-flex items-center gap-2"><MapPin size={16} className="text-cyan-400" /> {data.location}</p>
          </div>

          <div className="mt-6 flex gap-3">
            <a href={data.social.github} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-400/30 p-2 text-slate-600 transition hover:text-sky-500 dark:text-slate-300">
              <Github size={18} />
            </a>
            <a href={data.social.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-400/30 p-2 text-slate-600 transition hover:text-sky-500 dark:text-slate-300">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${data.email}`} className="rounded-lg border border-slate-400/30 p-2 text-slate-600 transition hover:text-sky-500 dark:text-slate-300">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          onSubmit={onSubmit}
          className="glass rounded-2xl p-6"
        >
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={onChange}
              required
              placeholder="Name"
              className="w-full rounded-xl border border-slate-400/30 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-sky-500"
            />
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={onChange}
              required
              placeholder="Email"
              className="w-full rounded-xl border border-slate-400/30 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-sky-500"
            />
            <textarea
              name="message"
              value={formState.message}
              onChange={onChange}
              required
              rows="5"
              placeholder="Message"
              className="w-full rounded-xl border border-slate-400/30 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-sky-500"
            />
          </div>
          <button type="submit" className="mt-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110">
            Send Message
          </button>
        </motion.form>
      </div>
    </Container>
  );
}

export default ContactSection;
