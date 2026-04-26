import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ProjectModal from "../components/ProjectModal";

const filters = ["All", "AI", "Web", "Analysis"];

function ProjectsSection({ data }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return data;
    return data.filter((project) => project.category === activeFilter);
  }, [activeFilter, data]);

  return (
    <Container id="projects">
      <SectionHeading eyebrow="Projects" title="Featured Work" subtitle="AI products, data science case studies, and full-stack applications with practical impact." />

      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeFilter === filter
                ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white"
                : "glass text-slate-700 hover:text-sky-500 dark:text-slate-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="glass group overflow-hidden rounded-2xl"
          >
            <div className="relative h-44 overflow-hidden border-b border-slate-400/15 bg-gradient-to-br from-slate-300/40 to-cyan-400/20 dark:from-slate-700/30 dark:to-cyan-700/20">
              <div className="grid h-full place-items-center text-sm text-slate-600 dark:text-slate-300">Project Image Placeholder</div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>

            <div className="p-5">
              <h3 className="font-display text-xl font-semibold text-base-900 dark:text-base-100">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded-full border border-sky-400/30 bg-sky-500/10 px-2.5 py-1 text-xs text-sky-500 dark:text-sky-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-500/30 px-3 py-2 text-xs font-semibold text-base-900 transition hover:border-sky-500 hover:text-sky-500 dark:text-base-100">
                  <Github size={14} /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-3 py-2 text-xs font-semibold text-white transition hover:brightness-110">
                  <ExternalLink size={14} /> Live Demo
                </a>
                <button
                  type="button"
                  className="rounded-lg border border-slate-500/30 px-3 py-2 text-xs font-semibold text-base-900 transition hover:border-emerald-400 hover:text-emerald-500 dark:text-base-100"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Container>
  );
}

export default ProjectsSection;
