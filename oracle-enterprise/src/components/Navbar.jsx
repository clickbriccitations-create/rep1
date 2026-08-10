import { motion } from "framer-motion";
import {
  ChevronDown,
  Search,
  Menu,
  ArrowRight
} from "lucide-react";


const navItems = [
  
  "Services",
  "Industries",
  "Casestudies",
  "About Us"
];


export default function Navbar(){

return(

<motion.header

initial={{
y:-100,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

transition={{
duration:.7
}}

className="
fixed
top-0
left-0
w-full
z-50
px-4
"


>


<div className="
max-w-7xl
mx-auto
mt-6
">



<div

className="
relative

flex
items-center
justify-between

px-7
py-3

rounded-full

bg-slate-950/75

backdrop-blur-xl

border
border-white/10

shadow-[0_20px_60px_rgba(0,0,0,.35)]

"

>



{/* subtle glow */}

<div className="
absolute
inset-0
rounded-full
bg-gradient-to-r
from-blue-500/10
via-transparent
to-indigo-500/10
pointer-events-none
"/>








{/* LOGO */}



<div className="
relative
">



<h1

className="
text-3xl
font-black
tracking-tight
text-slate-900



"

>


Vertex


<span className="
text-blue-600

">

Consult UK Ltd.

</span>


</h1>




<p

className="
text-[11px]
tracking-wide
text-slate-600



"

>

Oracle Solutions • Enterprise Cloud

</p>



</div>









{/* NAV ITEMS */}



<nav className="
hidden
lg:flex
items-center
gap-7
relative
">


{

navItems.map((item)=>(


<div

key={item}

className="

group
relative

flex
items-center
gap-1

cursor-pointer

text-sm
font-semibold

text-slate-900

transition

hover:text-blue-black

"

>


{item}



<ChevronDown

size={14}

className="
opacity-80
"

/>





<span

className="
absolute

left-0

bottom-[-8px]

h-[2px]

w-0

bg-blue-400

transition-all

duration-300

group-hover:w-full

"

/>



</div>


))

}



</nav>









{/* RIGHT */}



<div className="
relative
flex
items-center
gap-3
">





<button

className="
hidden
md:flex

items-center
gap-2

rounded-full

bg-white

text-slate-900

px-5
py-2.5

text-sm
font-bold

hover:bg-blue-50

transition

shadow-lg

"

>


Schedule Consultation


<ArrowRight

size={16}

/>


</button>








<div

className="
hidden
lg:flex

w-10
h-10

rounded-full

bg-white/10

border
border-black/10

items-center
justify-center

text-black



hover:bg-white/20

transition

cursor-pointer

"

>


<Search size={17}/>


</div>








<div

className="
w-10
h-10

rounded-full

bg-white/10

border
border-black/10

flex
items-center
justify-center

text-black



cursor-pointer

hover:bg-white/20

transition

"

>


<Menu size={20}/>


</div>





</div>





</div>



</div>


</motion.header>


)

}