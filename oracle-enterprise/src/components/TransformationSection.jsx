import { useState } from "react";
import TransformationPillars from "./TransformationPillars";
import TransformationInsight from "./TransformationInsight";


export default function TransformationSection(){

const [active,setActive]=useState(0);


return(

<section className="
py-24
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
max-w-3xl
">


<div className="
inline-flex
rounded-full
bg-blue-50
px-5
py-2
text-blue-600
font-semibold
text-sm
">

Oracle Transformation Framework

</div>


<h2 className="
mt-6
text-5xl
font-black
tracking-tight
text-slate-900
">


Modernizing Enterprises
<span className="
block
text-blue-600
">

with Oracle Cloud

</span>

</h2>


<p className="
mt-6
text-lg
leading-8
text-slate-600
">

We help enterprises migrate, modernize and optimize
their business platforms using Oracle Cloud,
Fusion Applications and intelligent automation.

</p>


</div>



{/* Pillars */}

<div className="
mt-16
">


<TransformationPillars

active={active}

setActive={setActive}

/>


</div>



{/* Insight */}

<div className="
mt-14
">

<TransformationInsight

active={active}

/>


</div>



</div>


</section>


)

}