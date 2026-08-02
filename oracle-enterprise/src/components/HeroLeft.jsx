import AICommandBox from "./AICommandBox";
import { motion } from "framer-motion";

export default function HeroLeft(){

return(

<div>

<motion.div

initial={{opacity:0}}

animate={{opacity:1}}

className="inline-flex bg-purple-100 text-indigo-700 px-5 py-2 rounded-full"

>

Trusted Oracle Cloud Partner

</motion.div>

<h1 className="text-7xl lg:text-[82px] font-black leading-tight mt-8">

Accelerating

<span className="block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-transparent bg-clip-text">

Enterprise Growth

</span>

with Oracle Cloud & AI

</h1>

<p className="mt-8 text-slate-600 text-xl leading-9 max-w-2xl">

Helping enterprises modernize legacy systems, migrate to Oracle Cloud Infrastructure, automate workflows, and build intelligent digital products.

</p>

<div className="flex flex-wrap gap-6 mt-8 text-slate-700">

<span>✔ Oracle Fusion</span>

<span>✔ Oracle ERP</span>

<span>✔ Oracle AI</span>

<span>✔ Oracle Cloud</span>

</div>

<div className="mt-10">

<AICommandBox/>

</div>

<div className="flex gap-5 mt-8">

<button className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4">

Schedule Consultation

</button>

<button className="rounded-full border border-indigo-200 px-8 py-4">

Explore Services

</button>

</div>

</div>

)
}