import { motion } from "framer-motion";

export default function IndustryCard({
  industry,
  active,
  onClick,
}) {

  const Icon = industry.icon;

  return (

    <motion.div

      whileHover={{x:10}}

      onMouseEnter={onClick}

      className={`cursor-pointer rounded-2xl p-5 transition-all duration-300

      ${
        active
          ? "bg-white shadow-xl border-l-4 border-indigo-600"
          : "hover:bg-white"
      }

      `}

    >

      <div className="flex items-center gap-4">

        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${industry.color} text-white flex items-center justify-center`}>

          <Icon size={26}/>

        </div>

        <div>

          <h3 className="font-bold text-xl">

            {industry.title}

          </h3>

          <p className="text-slate-500 text-sm mt-1">

            {industry.stats}

          </p>

        </div>

      </div>

    </motion.div>

  )

}