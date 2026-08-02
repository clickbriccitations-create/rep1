import { motion } from "framer-motion";

const companies = [

"Oracle",

"Microsoft",

"AWS",

"Google Cloud",

"Deloitte",

"PwC",

"Infosys",

"Capgemini",

"TCS",

"Accenture"

];

export default function TrustedCompanies(){

return(

<section className="bg-white py-20">

<div className="max-w-7xl mx-auto">

<p className="text-center text-slate-500 uppercase tracking-[6px] mb-12">

Trusted by Enterprise Businesses Worldwide

</p>

<div className="overflow-hidden">

<motion.div

animate={{
x:["0%","-50%"]
}}

transition={{
repeat:Infinity,
duration:18,
ease:"linear"
}}

className="flex gap-24 whitespace-nowrap"

>

{[...companies,...companies].map((item,index)=>(

<div

key={index}

className="text-3xl font-bold text-slate-300"

>

{item}

</div>

))}

</motion.div>

</div>

</div>

</section>

)

}