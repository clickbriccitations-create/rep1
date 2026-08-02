import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { industries } from "./industryData";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";


export default function Industries(){

const [selected,setSelected]=useState(industries[0]);


return (

<section className="
py-20
bg-white
overflow-hidden
">


<div className="
max-w-7xl
mx-auto
px-8
">



{/* Header */}

<div className="
flex
flex-col
md:flex-row
md:items-end
md:justify-between
gap-6
">


<div>


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

Industry Solutions

</div>



<h2 className="
mt-5
text-4xl
md:text-5xl
font-black
tracking-tight
text-slate-900
">

Oracle Solutions

<span className="
block
text-blue-600
">

Built For Every Industry

</span>


</h2>


</div>



<p className="
max-w-md
text-slate-600
leading-7
">

We combine Oracle Cloud, AI, ERP and analytics
to solve complex challenges across industries.

</p>


</div>





{/* Main Content */}

<div className="
mt-12
grid
lg:grid-cols-[260px_1fr]
gap-8
">


{/* Industry Selector */}

<div className="
space-y-3
">


{industries.map((industry)=>{


const active =
selected.id===industry.id;


const Icon=industry.icon;



return(

<motion.button

key={industry.id}

onClick={()=>
setSelected(industry)
}


whileHover={{
x:6
}}


className={`
w-full
flex
items-center
gap-3
rounded-xl
p-3
text-left
transition-all

${
active
?
"bg-blue-50 border border-blue-200 shadow-sm"
:
"hover:bg-slate-50 border border-transparent"
}

`}


>


<div className={`
h-10
w-10
rounded-xl
bg-gradient-to-br
${industry.color}
flex
items-center
justify-center
text-white
`}>

<Icon size={18}/>

</div>



<div>

<p className="
font-semibold
text-sm
text-slate-800
">

{industry.title}

</p>


<p className="
text-xs
text-slate-500
">

{industry.stats}

</p>


</div>


</motion.button>


)


})}



</div>
      {/* ================= INDUSTRY DETAIL PANEL ================= */}


      <AnimatePresence mode="wait">


      <motion.div

      key={selected.id}

      initial={{
        opacity:0,
        x:40
      }}

      animate={{
        opacity:1,
        x:0
      }}

      exit={{
        opacity:0,
        x:-30
      }}

      transition={{
        duration:.4
      }}


      className="
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-slate-200
      bg-gradient-to-br
      from-slate-50
      via-white
      to-blue-50
      p-8
      shadow-[0_20px_60px_rgba(15,23,42,.08)]
      "

      >



      {/* Background glow */}

      <div

      className={`
      absolute
      right-0
      top-0
      h-64
      w-64
      rounded-full
      bg-gradient-to-br
      ${selected.color}
      opacity-10
      blur-3xl
      `}

      />




      <div className="
      relative
      "
      >



      {/* Top section */}


      <div className="
      flex
      items-start
      justify-between
      gap-5
      ">


      <div>


      <div className={`
      h-14
      w-14
      rounded-2xl
      bg-gradient-to-br
      ${selected.color}
      flex
      items-center
      justify-center
      text-white
      shadow-lg
      `}>

      <selected.icon size={26}/>

      </div>



      <h3 className="
      mt-5
      text-3xl
      font-black
      text-slate-900
      ">

      {selected.title}

      </h3>



      <p className="
      mt-2
      text-slate-600
      leading-7
      max-w-xl
      ">

      {selected.description}

      </p>


      </div>



      <div className="
      hidden
      md:flex
      items-center
      gap-2
      rounded-full
      bg-blue-50
      px-4
      py-2
      text-sm
      font-semibold
      text-blue-600
      ">

      <Sparkles size={16}/>

      Oracle Powered

      </div>


      </div>





      {/* Technology Stack */}


      <div className="
      mt-8
      ">


      <p className="
      text-xs
      uppercase
      tracking-[.25em]
      font-bold
      text-slate-400
      ">

      Oracle Solutions

      </p>



      <div className="
      mt-4
      grid
      grid-cols-2
      md:grid-cols-4
      gap-3
      ">


      {selected.modules.map((item)=>(


      <div

      key={item}

      className="
      rounded-xl
      bg-white
      border
      border-slate-200
      px-4
      py-3
      text-center
      text-sm
      font-semibold
      text-slate-700
      "

      >

      {item}

      </div>


      ))}



      </div>


      </div>






      {/* Outcomes */}


      <div className="
      mt-8
      flex
      flex-wrap
      gap-3
      ">


      <div className="
      flex
      items-center
      gap-2
      rounded-full
      bg-white
      border
      border-slate-200
      px-4
      py-2
      text-sm
      text-slate-600
      ">

      <CheckCircle2
      size={16}
      className="text-blue-600"
      />

      Cloud Modernization

      </div>



      <div className="
      flex
      items-center
      gap-2
      rounded-full
      bg-white
      border
      border-slate-200
      px-4
      py-2
      text-sm
      text-slate-600
      ">

      <CheckCircle2
      size={16}
      className="text-blue-600"
      />

      Intelligent Operations

      </div>



      <div className="
      flex
      items-center
      gap-2
      rounded-full
      bg-white
      border
      border-slate-200
      px-4
      py-2
      text-sm
      text-slate-600
      ">

      <CheckCircle2
      size={16}
      className="text-blue-600"
      />

      Enterprise Security

      </div>


      </div>





      {/* Button */}


      <button

      className="
      mt-8
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-gradient-to-r
      from-blue-600
      to-indigo-600
      px-6
      py-3
      text-black
      font-semibold
      shadow-lg
      hover:scale-105
      transition
      "

      >

      Explore Oracle Solutions

      <ArrowRight size={18}/>

      </button>



      </div>


      </motion.div>


      </AnimatePresence>



      

      </div> {/* closes grid */}

    </div> {/* closes max-w-7xl */}

  </section>

);

}