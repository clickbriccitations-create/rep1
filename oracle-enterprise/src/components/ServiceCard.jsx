import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({
    icon,
    title,
    description,
    color
}) {

    return (

        <motion.div

            whileHover={{
                y:-12,
                scale:1.02
            }}

            transition={{
                duration:.35
            }}

            className="group relative bg-white rounded-[30px] p-8 border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl duration-500"

        >

            <div

                className={`absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 ${color}`}

            />

            <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-indigo-600 group-hover:rotate-6 duration-500">

                    {icon}

                </div>

                <h3 className="mt-8 text-2xl font-bold">

                    {title}

                </h3>

                <p className="mt-5 text-slate-600 leading-8">

                    {description}

                </p>

                <button className="mt-8 flex items-center gap-3 text-indigo-600 font-semibold">

                    Learn More

                    <ArrowRight
                        className="group-hover:translate-x-2 duration-300"
                        size={18}
                    />

                </button>

            </div>

        </motion.div>

    );

}