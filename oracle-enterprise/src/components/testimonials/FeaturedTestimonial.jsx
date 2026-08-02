import { motion } from "framer-motion";
import {
  Play,
  Star,
  Quote,
} from "lucide-react";

import AnimatedCounter from "../AnimatedCounter";
import PrimaryButton from "../ui/PrimaryButton";


export default function FeaturedTestimonial({
  testimonial
}) {


return (

<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.6
}}

className="
relative
overflow-hidden
rounded-[32px]
bg-white
border
border-slate-200
shadow-[0_25px_70px_rgba(15,23,42,.08)]
"


>


{/* Glow */}

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
grid
lg:grid-cols-[380px_1fr]
gap-0
">



{/* VIDEO */}


<div className="
relative
h-[380px]
overflow-hidden
">


<video

autoPlay
muted
loop
playsInline

className="
absolute
inset-0
h-full
w-full
object-cover
"

>

<source
src={testimonial.video}
type="video/mp4"
/>

</video>



<div className="
absolute
inset-0
bg-gradient-to-t
from-black/70
to-transparent
"/>



<motion.button

whileHover={{
scale:1.1
}}

className="
absolute
left-1/2
top-1/2
-translate-x-1/2
-translate-y-1/2
h-20
w-20
rounded-full
bg-white
flex
items-center
justify-center
shadow-xl
"

>

<Play
fill="#2563eb"
className="text-blue-600 ml-1"
/>

</motion.button>



<div className="
absolute
bottom-6
left-6
text-white
">


<p className="
text-xs
uppercase
tracking-[.3em]
opacity-70
">

{testimonial.industry}

</p>


<h3 className="
mt-2
text-3xl
font-black
">

{testimonial.company}

</h3>


</div>


</div>






{/* CONTENT */}


<div className="
p-8
lg:p-10
flex
flex-col
justify-center
">


<div className="
flex
gap-1
text-yellow-500
">

{
[1,2,3,4,5].map((i)=>(

<Star
key={i}
size={16}
fill="currentColor"
/>

))
}

</div>




<Quote

size={40}

className="
mt-5
text-blue-600/30
"

/>



<h2 className="
mt-3
text-2xl
lg:text-3xl
font-black
leading-snug
text-slate-900
">

"{testimonial.quote}"

</h2>




<div className="
mt-5
">


<h4 className="
font-bold
text-lg
">

{testimonial.name}

</h4>


<p className="
text-sm
text-slate-500
">

{testimonial.designation}

</p>


</div>





{/* SMALL METRICS */}


<div className="
grid
grid-cols-2
gap-4
mt-7
">


<div className="
rounded-2xl
bg-slate-50
p-4
">

<AnimatedCounter

value={parseInt(testimonial.stats.savings)}

suffix="%"

className="
text-3xl
font-black
text-blue-600
"

/>

<p className="
text-xs
text-slate-500
mt-1
">

Cost Reduction

</p>

</div>




<div className="
rounded-2xl
bg-slate-50
p-4
">


<h3 className="
text-3xl
font-black
text-blue-600
">

{testimonial.stats.roi}

</h3>


<p className="
text-xs
text-slate-500
mt-1
">

ROI Improvement

</p>


</div>


</div>




<div className="
mt-6
flex
items-center
justify-between
gap-4
">


<div className="
flex
flex-wrap
gap-2
">

{
testimonial.technologies.slice(0,3).map((tech)=>(

<span

key={tech}

className="
rounded-full
bg-blue-50
px-3
py-1
text-xs
font-semibold
text-blue-700
"

>

{tech}

</span>

))
}

</div>



<PrimaryButton>

Watch Story

</PrimaryButton>


</div>



</div>



</div>



</motion.div>


)

}