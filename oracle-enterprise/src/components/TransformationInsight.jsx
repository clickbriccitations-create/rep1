import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from "lucide-react";


const insights = [

  {
    title:"Discover Your Transformation Roadmap",

    tag:"Assessment & Strategy",

    challenge:
      "Many enterprises struggle with outdated systems, disconnected processes and unclear modernization paths.",

    solution:
      "We analyze your technology landscape and create a practical Oracle transformation strategy aligned with business goals.",

    benefits:[
      "Cloud readiness assessment",
      "Application modernization roadmap",
      "Business process optimization"
    ],

    metric:
      "Clear transformation roadmap"

  },


  {
    title:"Migrate Securely to Oracle Cloud",

    tag:"Cloud Migration",

    challenge:
      "Legacy infrastructure limits scalability, security and operational efficiency.",

    solution:
      "Our Oracle specialists migrate workloads to Oracle Cloud Infrastructure with minimal disruption.",

    benefits:[
      "OCI migration planning",
      "Database modernization",
      "Secure cloud architecture"
    ],

    metric:
      "Faster & scalable infrastructure"

  },


  {
    title:"Modernize Enterprise Operations",

    tag:"Oracle Fusion Applications",

    challenge:
      "Traditional business processes prevent organizations from responding quickly.",

    solution:
      "We implement Oracle Fusion ERP, automate workflows and connect enterprise operations.",

    benefits:[
      "ERP transformation",
      "Process automation",
      "Connected business operations"
    ],

    metric:
      "Smarter business processes"

  },


  {
    title:"Optimize with AI & Analytics",

    tag:"Intelligent Enterprise",

    challenge:
      "Organizations need real-time insights to make faster decisions.",

    solution:
      "We combine Oracle analytics, AI and automation to continuously improve performance.",

    benefits:[
      "AI-powered insights",
      "Predictive analytics",
      "Continuous optimization"
    ],

    metric:
      "Data-driven decisions"

  }

];



export default function TransformationInsight({
  active
}){


const item=insights[active];


return(

<AnimatePresence mode="wait">


<motion.div

key={active}

initial={{
opacity:0,
y:25
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-25
}}

transition={{
duration:.45
}}


className="
relative
overflow-hidden
rounded-[32px]
border
border-slate-200
bg-white
shadow-[0_25px_70px_rgba(15,23,42,.08)]
p-10
"

>


{/* Background */}

<div className="
absolute
right-0
top-0
h-72
w-72
rounded-full
bg-blue-500/10
blur-3xl
"/>



<div className="
relative
grid
lg:grid-cols-3
gap-10
">


{/* Main */}

<div className="
lg:col-span-2
">


<div className="
inline-flex
rounded-full
bg-blue-50
px-4
py-2
text-sm
font-semibold
text-blue-600
">

{item.tag}

</div>



<h3 className="
mt-5
text-3xl
font-black
text-slate-900
">

{item.title}

</h3>



<div className="
mt-8
grid
md:grid-cols-2
gap-8
">


<div>

<p className="
text-sm
font-bold
uppercase
tracking-wider
text-slate-400
">

Business Challenge

</p>


<p className="
mt-3
text-slate-600
leading-7
">

{item.challenge}

</p>

</div>



<div>

<p className="
text-sm
font-bold
uppercase
tracking-wider
text-slate-400
">

Oracle Solution

</p>


<p className="
mt-3
text-slate-600
leading-7
">

{item.solution}

</p>

</div>


</div>



<div className="
mt-8
flex
flex-wrap
gap-3
">


{item.benefits.map((benefit)=>(


<div

key={benefit}

className="
flex
items-center
gap-2
rounded-full
bg-slate-50
px-4
py-2
text-sm
font-medium
text-slate-700
"

>

<CheckCircle2
size={16}
className="text-blue-600"
/>

{benefit}


</div>


))}


</div>


</div>




{/* Side Metric */}

<div className="
rounded-3xl
bg-gradient-to-br
from-blue-600
to-indigo-700
p-8
text-white
flex
flex-col
justify-between
">


<div>

<TrendingUp
size={32}
className="opacity-80"
/>


<h4 className="
mt-8
text-sm
uppercase
tracking-widest
opacity-70
">

Expected Impact

</h4>


<p className="
mt-4
text-2xl
font-bold
leading-tight
">

{item.metric}

</p>


</div>



<button

className="
mt-10
flex
items-center
justify-center
gap-2
rounded-full
bg-white
px-5
py-3
font-semibold
text-blue-700
hover:scale-105
transition
"

>

Explore Services

<ArrowRight size={18}/>

</button>



</div>


</div>



</motion.div>


</AnimatePresence>


)

}