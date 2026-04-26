import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CursorGlow() {
  const [cursor, setCursor] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX - 80, y: e.clientY - 80 });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[5] h-40 w-40 rounded-full bg-sky-400/15 blur-3xl"
      animate={{ x: cursor.x, y: cursor.y }}
      transition={{ type: "spring", damping: 22, stiffness: 180, mass: 0.3 }}
    />
  );
}

export default CursorGlow;
