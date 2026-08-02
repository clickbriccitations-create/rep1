import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ComparisonRow({

left,
right

}){

return(

<motion.div

whileHover={{scale:1.02}}

className="grid md:grid-cols-3 items-center gap-6 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl duration-300"

>

<div className="text-slate-500">

{left}

</div>

<div className="flex justify-center">

<ArrowRight className="text-indigo-500"/>

</div>

<div className="font-semibold text-indigo-700">

{right}

</div>

</motion.div>

)

}