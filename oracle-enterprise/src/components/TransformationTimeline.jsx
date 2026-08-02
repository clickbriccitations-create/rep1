import { motion } from "framer-motion";
import { stages } from "./StageData";

export default function TransformationTimeline({
  activeStage,
  setActiveStage,
}) {
  return (
    <div className="relative w-full">

      {/* Progress Line */}

      <div className="absolute top-8 left-0 right-0 h-1 rounded-full bg-slate-200"/>

      <motion.div
        className="absolute top-8 left-0 h-1 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500"
        animate={{
          width: `${((activeStage)/(stages.length-1))*100}%`
        }}
        transition={{
          duration:.6
        }}
      />

      <div className="relative flex justify-between">

        {stages.map((stage,index)=>{

          const Icon=stage.icon;
          const active=index===activeStage;

          return(

            <motion.div

              key={stage.id}

              whileHover={{y:-6}}

              onClick={()=>setActiveStage(index)}

              className="cursor-pointer flex flex-col items-center w-52"

            >

              <motion.div

                animate={{
                  scale:active?1.1:1,
                  backgroundColor:active?"#4f46e5":"#ffffff"
                }}

                transition={{duration:.3}}

                className={`w-16 h-16 rounded-full border-4 flex items-center justify-center shadow-lg
                ${active
                ?"border-indigo-300 text-white"
                :"border-slate-200 text-slate-500 bg-white"
                }`}

              >

                <Icon size={28}/>

              </motion.div>

              <motion.h3

                animate={{
                  color:active?"#4f46e5":"#334155"
                }}

                className="mt-5 font-bold text-lg"

              >

                {stage.title}

              </motion.h3>

              <p className="text-center mt-2 text-sm text-slate-500">

                {stage.subtitle}

              </p>

            </motion.div>

          )

        })}

      </div>

    </div>
  )

}