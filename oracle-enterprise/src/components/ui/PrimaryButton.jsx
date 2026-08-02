import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PrimaryButton({
  children,
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
      group
      inline-flex
      items-center
      gap-3
      rounded-full
      bg-gradient-to-r
      from-blue-600
      via-indigo-600
      to-cyan-600
      px-7
      py-4
      font-semibold
      text-white
      shadow-xl
      transition-all
      "
    >
      {children}

      <ArrowRight
        className="transition-transform duration-300 group-hover:translate-x-1"
        size={18}
      />
    </motion.button>
  );
}