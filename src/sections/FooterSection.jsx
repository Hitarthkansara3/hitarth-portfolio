function FooterSection({ name }) {
  return (
    <footer className="border-t border-slate-400/15 px-4 py-8 text-center text-sm text-slate-600 dark:text-slate-300 sm:px-8">
      <p>&copy; 2026 {name}. Built with React + Tailwind + Framer Motion.</p>
    </footer>
  );
}

export default FooterSection;
