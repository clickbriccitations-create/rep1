import { motion } from "framer-motion";

export default function FloatingBadge({
icon,
title,
className
}){

return(

<motion.div

animate={{
y:[0,-10,0]
}}

transition={{
repeat:Infinity,
duration:5
}}

className={`absolute bg-white rounded-3xl shadow-xl border border-slate-100 p-5 ${className}`}

>

<div className="text-3xl">

{icon}

</div>

<p className="mt-3 font-semibold">

{title}

</p>

</motion.div>

)

}