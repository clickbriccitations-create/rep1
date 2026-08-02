import { motion } from "framer-motion";
import {
  Search,
  Cloud,
  Cpu,
  Sparkles,
} from "lucide-react";


const pillars = [

  {
    id:0,

    title:"Discover",

    subtitle:"Assess & Strategize",

    description:
      "Analyze your current enterprise landscape and identify opportunities for Oracle transformation.",

    icon:Search,

    color:
      "from-blue-600 to-cyan-500",

    outcomes:[
      "Cloud readiness assessment",
      "ERP modernization roadmap",
      "Business process analysis"
    ]

  },


  {
    id:1,

    title:"Migrate",

    subtitle:"Move to Oracle Cloud",

    description:
      "Seamlessly migrate applications, databases and workloads to secure Oracle Cloud infrastructure.",

    icon:Cloud,

    color:
      "from-indigo-600 to-blue-600",

    outcomes:[
      "OCI cloud migration",
      "Oracle database modernization",
      "Secure workload transition"
    ]

  },


  {
    id:2,

    title:"Modernize",

    subtitle:"Transform Operations",

    description:
      "Upgrade enterprise systems with Oracle Fusion applications and intelligent automation.",

    icon:Cpu,

    color:
      "from-violet-600 to-indigo-600",

    outcomes:[
      "Fusion ERP implementation",
      "Workflow automation",
      "Digital experience improvement"
    ]

  },


  {
    id:3,

    title:"Optimize",

    subtitle:"AI Powered Growth",

    description:
      "Continuously improve performance using analytics, AI and enterprise intelligence.",

    icon:Sparkles,

    color:
      "from-emerald-500 to-cyan-500",

    outcomes:[
      "AI-driven insights",
      "Advanced analytics",
      "Continuous optimization"
    ]

  }

];



export default function TransformationPillars({
  active,
  setActive
}){


return(

<div className="grid md:grid-cols-4 gap-6">


{pillars.map((item,index)=>{


const Icon=item.icon;

const selected=
active===index;


return(


<motion.button

key={item.id}

onClick={()=>
setActive(index)
}


whileHover={{
y:-8
}}

animate={{

scale:selected?1.04:1

}}

className={`
relative
text-left
rounded-3xl
p-6
border
transition-all
duration-300

${
selected
?
"border-blue-300 bg-white shadow-[0_25px_60px_rgba(37,99,235,.15)]"
:
"border-slate-200 bg-slate-50"
}

`}

>


{/* Active glow */}

{selected && (

<motion.div

layoutId="pillarGlow"

className="
absolute
inset-0
rounded-3xl
bg-blue-500/5
"

/>

)}



<div className="relative">


<div
className={`
h-14
w-14
rounded-2xl
flex
items-center
justify-center
text-white
bg-gradient-to-br
${item.color}
shadow-lg
`}
>

<Icon size={26}/>

</div>



<h3 className="
mt-6
text-xl
font-bold
text-slate-900
">

{item.title}

</h3>


<p className="
mt-1
text-sm
font-medium
text-blue-600
">

{item.subtitle}

</p>



<p className="
mt-4
text-sm
leading-6
text-slate-500
">

{item.description}

</p>



<div className="
mt-5
h-1
w-full
rounded-full
bg-slate-200
overflow-hidden
">


<motion.div

animate={{
width:selected
?
"100%"
:
"0%"
}}

transition={{
duration:.4
}}

className="
h-full
bg-gradient-to-r
from-blue-500
to-cyan-400
"

/>


</div>



</div>


</motion.button>


)


})}


</div>


)

}