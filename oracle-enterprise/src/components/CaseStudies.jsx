import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { caseStudies } from "./CaseStudyData";
import CaseStudyCard from "./CaseStudyCard";


export default function CaseStudies(){

const [active,setActive]=useState(0);


return (

<section className="
relative
py-20
bg-[#08111f]
overflow-hidden
">


{/* Background */}

<div className="
absolute
left-0
top-0
h-[500px]
w-[500px]
rounded-full
bg-blue-600/20
blur-[140px]
"/>


<div className="
absolute
right-0
bottom-0
h-[500px]
w-[500px]
rounded-full
bg-cyan-500/20
blur-[140px]
"/>




<div className="
relative
max-w-7xl
mx-auto
px-8
">



{/* HEADER */}


<div className="
text-center
max-w-3xl
mx-auto
">


<div className="
inline-flex
rounded-full
bg-white/10
border
border-white/20
px-4
py-2
text-sm
font-semibold
text-blue-300
">

Success Stories

</div>



<h2 className="
mt-5
text-4xl
md:text-5xl
font-black
text-white
">


Oracle Transformations

<span className="
block
text-cyan-400
">

Driving Enterprise Growth

</span>


</h2>



<p className="
mt-5
text-slate-300
leading-7
">

Real-world Oracle implementations helping
organizations modernize operations and unlock growth.

</p>


</div>





{/* TABS */}


<div className="
mt-10
flex
justify-center
flex-wrap
gap-3
">


{
caseStudies.map((study,index)=>(


<button

key={study.id}

onClick={()=>setActive(index)}

className={`
px-5
py-2.5
rounded-full
text-sm
font-semibold
transition

${
active===index

?

"bg-white text-slate-900 shadow-lg"

:

"bg-white/10 text-white hover:bg-white/20"

}

`}

>

{study.industry}


</button>


))
}



</div>





{/* CARD */}


<div className="
mt-10
">


<AnimatePresence mode="wait">


<motion.div

key={active}

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-20
}}

transition={{
duration:.4
}}

>


<CaseStudyCard

study={caseStudies[active]}

/>


</motion.div>



</AnimatePresence>


</div>





</div>



</section>


)

}