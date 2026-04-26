import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const value = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(value);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-emerald-400"
      style={{ width: `${progress}%` }}
    />
  );
}

export default ScrollProgress;
