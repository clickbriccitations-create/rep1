import { motion } from "framer-motion";

export default function SectionHeading({

badge,
title,
highlight,
description,
center=true

}){

return(

<div className={`${center?"text-center":"text-left"} max-w-4xl ${center?"mx-auto":""}`}>

<motion.div

initial={{opacity:0,y:20}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.6}}

className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2"

>

<div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"/>

<span className="text-blue-700 font-semibold">

{badge}

</span>

</motion.div>

<motion.h2

initial={{opacity:0,y:30}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{delay:.15}}

className="mt-8 text-5xl md:text-6xl font-black tracking-tight leading-[1.05]"

>

{title}

<span className="block bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">

{highlight}

</span>

</motion.h2>

<motion.p

initial={{opacity:0}}

whileInView={{opacity:1}}

transition={{delay:.3}}

viewport={{once:true}}

className="mt-8 text-slate-600 text-xl leading-9"

>

{description}

</motion.p>

</div>

)

}