import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

import AnimatedCounter from "./AnimatedCounter";


export default function CaseStudyCard({ study }) {


const Icon = study.icon;


return (


<motion.div

whileHover={{
y:-5
}}

transition={{
duration:.3
}}

className="
relative
overflow-hidden
rounded-[32px]
bg-white
border
border-slate-200
shadow-[0_25px_70px_rgba(15,23,42,.12)]
"

>


{/* Glow */}


<div

className={`
absolute
-right-20
-top-20
h-72
w-72
rounded-full
bg-gradient-to-br
${study.color}
opacity-10
blur-3xl
`}

/>




<div className="
relative
grid
lg:grid-cols-[1.2fr_.8fr]
gap-8
p-8
lg:p-10
">





{/* LEFT CONTENT */}



<div>



<div

className={`
h-14
w-14
rounded-2xl
bg-gradient-to-br
${study.color}
flex
items-center
justify-center
text-white
shadow-lg
`}

>


<Icon size={26}/>


</div>





<p className="
mt-5
text-xs
uppercase
tracking-[.25em]
font-bold
text-blue-600
">

{study.industry}

</p>





<h2 className="
mt-3
text-3xl
lg:text-4xl
font-black
leading-tight
text-slate-900
">

{study.title}

</h2>





<p className="
mt-4
text-slate-600
leading-7
max-w-xl
">

{study.description}

</p>





{/* Modules */}


<div className="
mt-6
flex
flex-wrap
gap-2
">


{
study.modules.slice(0,5).map((module)=>(


<div

key={module}

className="
flex
items-center
gap-2
rounded-full
bg-slate-50
border
border-slate-200
px-3
py-2
text-xs
font-semibold
text-slate-700
"

>


<CheckCircle2

size={14}

className="
text-blue-600
"

/>


{module}


</div>


))
}



</div>






<button

className="
mt-7
inline-flex
items-center
gap-2
rounded-full
bg-gradient-to-r
from-blue-600
to-indigo-600
px-6
py-3
text-white
font-semibold
shadow-lg
hover:gap-4
transition-all
"

>


View Case Study


<ArrowRight size={18}/>


</button>





</div>







{/* RIGHT IMPACT PANEL */}




<div className="
rounded-[28px]
bg-slate-950
p-6
text-white
flex
flex-col
justify-center
">





<div className="
flex
items-center
justify-between
">


<h3 className="
font-bold
text-lg
">

Business Impact

</h3>



<TrendingUp

className="
text-emerald-400
"

/>


</div>







<div className="
grid
grid-cols-2
gap-3
mt-6
">



{/* SAVINGS */}


<div className="
rounded-2xl
bg-white/10
p-4
">


<p className="
text-xs
text-slate-400
">

Savings

</p>


<AnimatedCounter

value={parseInt(study.metrics.savings)}

suffix="%"

className="
mt-2
text-3xl
font-black
text-emerald-400
"

/>



</div>







{/* ROI */}


<div className="
rounded-2xl
bg-white/10
p-4
">


<p className="
text-xs
text-slate-400
">

ROI

</p>


<h3 className="
mt-2
text-3xl
font-black
">

{study.metrics.roi}

</h3>


</div>







{/* TIMELINE */}


<div className="
rounded-2xl
bg-white/10
p-4
">


<p className="
text-xs
text-slate-400
">

Delivery

</p>


<h3 className="
mt-2
text-xl
font-bold
">

{study.metrics.timeline}

</h3>


</div>







{/* USERS */}


<div className="
rounded-2xl
bg-white/10
p-4
">


<p className="
text-xs
text-slate-400
">

Users

</p>


<h3 className="
mt-2
text-xl
font-bold
">

{study.metrics.users}

</h3>


</div>




</div>







<div className="
mt-5
rounded-2xl
bg-gradient-to-r
from-blue-600
to-indigo-600
p-4
">


<p className="
text-xs
uppercase
tracking-widest
opacity-80
">

Oracle Solution

</p>


<p className="
mt-1
font-bold
">

Cloud + ERP + AI Transformation

</p>


</div>





</div>






</div>


</motion.div>


);

}