import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

function ProgressBar({ label, value }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-slate-600 font-medium">{label}</span>

        <span className="font-bold text-indigo-600">{value}%</span>
      </div>

      <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500"
        />
      </div>
    </div>
  );
}

export default function TransformationCard({ stage }) {
  const Icon = stage.icon;

  return (
    <motion.div
      key={stage.id}
      initial={{
        opacity: 0,
        y: 30,
        scale: .95
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }}
      transition={{
        duration: .55
      }}
      className="relative overflow-hidden rounded-[36px] bg-white shadow-2xl border border-slate-200 p-10"
    >

      {/* Background Glow */}

      <div
        className={`absolute top-0 right-0 w-72 h-72 rounded-full bg-gradient-to-br ${stage.color} opacity-10 blur-3xl`}
      />

      {/* Header */}

      <div className="relative z-10 flex items-center justify-between">

        <div>

          <motion.div
            layout
            className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${stage.color} text-white flex items-center justify-center shadow-xl`}
          >

            <Icon size={38} />

          </motion.div>

          <h2 className="mt-8 text-4xl font-black text-slate-900">

            {stage.title}

          </h2>

          <p className="text-slate-500 mt-2 text-lg">

            {stage.subtitle}

          </p>

        </div>

        <div className="hidden md:block">

          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200">

            <p className="text-slate-500">

              Transformation Score

            </p>

            <h2 className="text-6xl font-black mt-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">

              {Math.round(
                (stage.stats.automation +
                  stage.stats.performance +
                  stage.stats.visibility) /
                  3
              )}

            </h2>

          </div>

        </div>

      </div>

      {/* Progress */}

      <div className="mt-12 space-y-8">

        <ProgressBar
          label="Automation"
          value={stage.stats.automation}
        />

        <ProgressBar
          label="Performance"
          value={stage.stats.performance}
        />

        <ProgressBar
          label="Business Visibility"
          value={stage.stats.visibility}
        />

      </div>

      {/* Features */}

      <div className="grid md:grid-cols-2 gap-4 mt-12">

        {stage.points.map((point) => (

          <motion.div
            whileHover={{
              x: 8
            }}
            key={point}
            className="flex items-center gap-3 bg-slate-50 rounded-2xl p-4"
          >

            <CheckCircle2
              className="text-indigo-600"
              size={20}
            />

            <span className="font-medium text-slate-700">

              {point}

            </span>

          </motion.div>

        ))}

      </div>

      {/* Bottom */}

      <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-8">

        <div>

          <p className="text-slate-500">

            Enterprise Transformation Journey

          </p>

          <h3 className="text-2xl font-bold mt-2">

            Ready for the Next Stage

          </h3>

        </div>

        <button className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-7 py-4 text-white font-semibold hover:scale-105 transition">

          Learn More →

        </button>

      </div>

    </motion.div>
  );
}