import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-base-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <div className="mx-auto mb-4 h-14 w-14 animate-spin rounded-full border-2 border-slate-700 border-t-cyan-400" />
        <p className="font-display text-sm tracking-[0.25em] text-slate-300">LOADING PORTFOLIO</p>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
