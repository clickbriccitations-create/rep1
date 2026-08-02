import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  Cpu,
  ShieldCheck,
  Workflow,
  BarChart3,
  Sparkles,
} from "lucide-react";


const nodes = [
  {
    title:"Oracle Cloud",
    subtitle:"Infrastructure",
    icon:Cloud,
    x:50,
    y:10,
  },
  {
    title:"Fusion ERP",
    subtitle:"Business Suite",
    icon:Workflow,
    x:15,
    y:38,
  },
  {
    title:"AI",
    subtitle:"Machine Learning",
    icon:Cpu,
    x:85,
    y:38,
  },
  {
    title:"Oracle DB",
    subtitle:"Enterprise Data",
    icon:Database,
    x:22,
    y:75,
  },
  {
    title:"Analytics",
    subtitle:"Insights",
    icon:BarChart3,
    x:50,
    y:88,
  },
  {
    title:"Security",
    subtitle:"Zero Trust",
    icon:ShieldCheck,
    x:78,
    y:75,
  }
];



function Card({item}){

const Icon=item.icon;

return(

<motion.div

initial={{opacity:0,scale:.8}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:.5
}}

whileHover={{
y:-6,
scale:1.04
}}

className="
absolute
-translate-x-1/2
-translate-y-1/2
"

style={{
left:`${item.x}%`,
top:`${item.y}%`
}}

>


<div className="
flex
items-center
gap-3
rounded-2xl
bg-white
px-4
py-3
shadow-[0_15px_40px_rgba(0,0,0,.08)]
border
border-slate-100
">


<div className="
h-11
w-11
rounded-xl
bg-gradient-to-br
from-blue-600
to-cyan-400
flex
items-center
justify-center
text-white
">

<Icon size={20}/>

</div>


<div>

<p className="
text-[9px]
tracking-[.3em]
uppercase
text-slate-400
">

Oracle

</p>


<p className="
font-semibold
text-sm
text-slate-800
">

{item.title}

</p>


<p className="
text-xs
text-slate-500
">

{item.subtitle}

</p>


</div>


</div>


</motion.div>

)

}




export default function EnterpriseArchitecture(){


return(

<div className="
relative
w-full
h-[520px]
overflow-hidden
">


{/* glow */}

<div className="
absolute
right-20
top-20
h-72
w-72
rounded-full
bg-blue-400/20
blur-[100px]
"/>



{/* connections */}

<svg

className="
absolute
inset-0
w-full
h-full
"

viewBox="0 0 100 100"

>


{nodes.map((n,i)=>(


<motion.path

key={i}

d={`
M50 50
Q50 ${(n.y+50)/2}
${n.x} ${n.y}
`}

fill="none"

stroke="#60a5fa"

strokeWidth=".35"

initial={{
pathLength:0
}}

animate={{
pathLength:1
}}

transition={{
delay:i*.15,
duration:1
}}

/>


))}


</svg>



{/* center */}


<div className="
absolute
left-1/2
top-1/2
-translate-x-1/2
-translate-y-1/2
">


<motion.div

animate={{
scale:[1,1.08,1]
}}

transition={{
repeat:Infinity,
duration:4
}}

className="
h-32
w-32
rounded-full
bg-gradient-to-br
from-blue-600
to-cyan-400
shadow-[0_0_80px_rgba(37,99,235,.35)]
flex
items-center
justify-center
text-white
"


>

<Sparkles size={35}/>


</motion.div>


<div className="
absolute
top-36
left-1/2
-translate-x-1/2
text-center
w-52
">


<p className="
text-[10px]
tracking-[.4em]
text-blue-500
">

ORACLE

</p>


<h3 className="
font-bold
text-xl
text-slate-900
">

Enterprise Core

</h3>


</div>


</div>



{nodes.map((n)=>(

<Card
key={n.title}
item={n}
/>

))}



</div>


)

}