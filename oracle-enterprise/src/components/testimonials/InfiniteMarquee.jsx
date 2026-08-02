import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

function MiniCard({ item }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="
        group
        relative
        flex-shrink-0
        w-[380px]
        rounded-[30px]
        border
        border-slate-200
        bg-white/90
        backdrop-blur-xl
        p-8
        shadow-[0_20px_60px_rgba(15,23,42,.08)]
        overflow-hidden
      "
    >
      {/* Glow */}

      <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-[90px]" />

      <div className="relative z-10">

        {/* Stars */}

        <div className="flex gap-1 text-yellow-400">

          {[1,2,3,4,5].map((star)=>(

            <Star
              key={star}
              size={16}
              fill="currentColor"
            />

          ))}

        </div>

        {/* Quote */}

        <Quote
          size={32}
          className="mt-6 text-blue-500 opacity-30"
        />

        <p className="mt-4 text-slate-700 leading-8 line-clamp-4">

          "{item.quote}"

        </p>

        {/* Footer */}

        <div className="flex items-center mt-8 gap-4">

          <img
            src={item.image}
            alt={item.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg"
          />

          <div>

            <h4 className="font-bold">

              {item.name}

            </h4>

            <p className="text-sm text-slate-500">

              {item.designation}

            </p>

          </div>

        </div>

        {/* Company */}

        <div className="mt-6 flex items-center justify-between">

          <span className="text-xs uppercase tracking-[4px] text-blue-600 font-semibold">

            {item.company}

          </span>

          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">

            {item.industry}

          </span>

        </div>

      </div>
    </motion.div>
  );
}

export default function InfiniteMarquee({ testimonials }) {

  const cards = [...testimonials, ...testimonials];

  return (

    <div className="relative overflow-hidden py-8">

      {/* Left Fade */}

      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-white via-white/80 to-transparent" />

      {/* Right Fade */}

      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-white via-white/80 to-transparent" />

      <motion.div

        className="flex gap-8"

        animate={{
          x: ["0%", "-50%"],
        }}

        transition={{
          duration: 32,
          ease: "linear",
          repeat: Infinity,
        }}

      >

        {cards.map((item, index)=>(

          <MiniCard

            key={`${item.id}-${index}`}

            item={item}

          />

        ))}

      </motion.div>

    </div>

  );

}