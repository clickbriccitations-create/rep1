import { motion } from "framer-motion";

export default function StatCard({number,label}){

return(

<motion.div

whileHover={{
y:-8
}}

className="bg-white rounded-3xl shadow-lg p-8 text-center border border-slate-200"

>

<h2 className="text-5xl font-black text-indigo-600">

{number}

</h2>

<p className="mt-3 text-slate-600">

{label}

</p>

</motion.div>

)

}