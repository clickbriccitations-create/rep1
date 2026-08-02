import { motion } from "framer-motion";

export default function FeatureCard({
  title,
  description,
  gradient,
  children,
  large = false,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.35 }}
      className={`
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white
        p-8
        shadow-[0_20px_70px_rgba(15,23,42,.08)]
        ${large ? "min-h-[420px]" : "min-h-[240px]"}
      `}
    >
      {/* Glow */}
      <div
        className={`absolute -top-20 -right-20 w-56 h-56 rounded-full blur-[100px] opacity-20 bg-gradient-to-br ${gradient}`}
      />

      <div className="relative z-10">
        {children}

        <h3 className="mt-8 text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-4 text-slate-600 leading-8">
          {description}
        </p>
      </div>
    </motion.div>
  );
}