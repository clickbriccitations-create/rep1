import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AICommandBox() {

    return (

        <motion.div

            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{delay:.8}}

            className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-3 flex items-center gap-4 w-full max-w-xl"

        >

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">

                <Sparkles size={22}/>

            </div>

            <div className="flex-1">

                <p className="text-indigo-600 font-semibold">

                    Ask our AI Assistant

                </p>

                <input

                    className="outline-none bg-transparent text-slate-600 w-full"

                    placeholder="How can Oracle Cloud reduce infrastructure costs?"

                />

            </div>

            <button className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 duration-300">

                <ArrowRight/>

            </button>

        </motion.div>

    )

}