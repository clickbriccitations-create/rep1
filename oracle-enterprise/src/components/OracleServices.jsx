import {
Database,
Cloud,
BrainCircuit,
ShieldCheck,
Workflow,
BarChart3
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const services=[

{
title:"Oracle Cloud Infrastructure",
icon:<Cloud size={30}/>,
description:"Modernize infrastructure with secure, scalable OCI architecture and cloud-native deployments.",
color:"bg-gradient-to-br from-blue-50 to-indigo-100"
},

{
title:"Oracle ERP",
icon:<Workflow size={30}/>,
description:"Digitize finance, procurement and operations with Oracle Fusion ERP implementations.",
color:"bg-gradient-to-br from-violet-50 to-purple-100"
},

{
title:"Oracle AI Solutions",
icon:<BrainCircuit size={30}/>,
description:"Build intelligent enterprise workflows using Generative AI, automation and predictive analytics.",
color:"bg-gradient-to-br from-cyan-50 to-sky-100"
},

{
title:"Oracle Database",
icon:<Database size={30}/>,
description:"Performance tuning, migration, administration and high availability database solutions.",
color:"bg-gradient-to-br from-amber-50 to-orange-100"
},

{
title:"Managed Services",
icon:<ShieldCheck size={30}/>,
description:"24/7 monitoring, security, optimization and proactive enterprise support services.",
color:"bg-gradient-to-br from-green-50 to-emerald-100"
},

{
title:"Oracle Analytics",
icon:<BarChart3 size={30}/>,
description:"Transform enterprise data into actionable insights with Oracle Analytics Cloud.",
color:"bg-gradient-to-br from-pink-50 to-rose-100"
}

];

export default function OracleServices(){

return(

<section className="py-36 bg-white">

<div className="max-w-7xl mx-auto px-8">

<div className="text-center max-w-3xl mx-auto">

<div className="inline-flex px-5 py-2 rounded-full bg-indigo-100 text-indigo-600 font-semibold">

Oracle Services

</div>

<h2 className="text-6xl font-black mt-8 leading-tight">

Enterprise Solutions

<span className="block text-indigo-600">

Built Around Oracle

</span>

</h2>

<p className="mt-8 text-slate-600 text-xl leading-9">

From cloud migration to AI-powered automation, we deliver end-to-end Oracle consulting services that accelerate business transformation.

</p>

</div>

<div className="grid lg:grid-cols-3 gap-8 mt-24">

{services.map(service=>(

<ServiceCard

key={service.title}

{...service}

/>

))}

</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

{
[
["98%","Client Satisfaction"],
["150+","Projects Delivered"],
["24/7","Enterprise Support"],
["12+","Years Experience"]
].map(([number,label])=>(

<div
key={label}
className="rounded-3xl bg-slate-50 border border-slate-200 p-8 text-center hover:shadow-xl duration-300"
>

<h2 className="text-5xl font-black text-indigo-600">

{number}

</h2>

<p className="mt-4 text-slate-600">

{label}

</p>

</div>

))
}

</div>

</div>

</section>

)

}