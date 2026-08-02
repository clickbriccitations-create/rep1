import { motion } from "framer-motion";

const stats = [

{
title:"System Performance",
value:"98.6%",
growth:"+12.5%"
},

{
title:"Cloud Optimization",
value:"35%",
growth:"+18.2%"
},

{
title:"Automation",
value:"91%",
growth:"+22.1%"
}

];

export default function DashboardCard(){

return(

<motion.div

initial={{opacity:0,x:60}}

animate={{opacity:1,x:0}}

transition={{duration:.8}}

className="bg-white rounded-[43px] shadow-2xl p-8 w-[600px] border border-slate-200"

>

<div className="flex justify-between">

<div>

<h3 className="text-2xl font-bold">

Oracle Cloud

</h3>

<p className="text-slate-500">

Performance Overview

</p>

</div>

<div>

<select className="rounded-xl border px-3 py-2">

<option>

This Month

</option>

</select>

</div>

</div>

<div className="grid grid-cols-3 gap-5 mt-10">

{stats.map((item)=>(

<div

key={item.title}

className="bg-slate-50 rounded-3xl p-5"

>

<p className="text-slate-500 text-sm">

{item.title}

</p>

<h2 className="text-4xl font-bold mt-4">

{item.value}

</h2>

<p className="text-green-500 mt-3">

{item.growth}

</p>

<div className="mt-6 h-2 rounded-full bg-slate-200">

<div className="w-4/5 h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"/>

</div>

</div>

))}

</div>

<div className="grid grid-cols-2 gap-6 mt-8">

<div className="bg-slate-50 rounded-3xl p-6">

<h3 className="font-bold">

Workloads

</h3>

<div className="mt-6 flex justify-center">

<div className="w-40 h-40 rounded-full border-[14px] border-indigo-500 relative">

<div className="absolute inset-0 flex items-center justify-center">

<div>

<h2 className="text-4xl font-bold text-center">

245

</h2>

<p className="text-sm text-slate-500">

Active

</p>

</div>

</div>

</div>

</div>

</div>

<div className="bg-slate-50 rounded-3xl p-6">

<h3 className="font-bold">

AI Recommendations

</h3>

<div className="space-y-4 mt-6">

<div className="bg-white rounded-xl p-3">

Optimize 15 Databases

</div>

<div className="bg-white rounded-xl p-3">

Rightsize Compute

</div>

<div className="bg-white rounded-xl p-3">

Reduce Cloud Costs

</div>

</div>

</div>

</div>

</motion.div>

)

}