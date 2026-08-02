import ComparisonRow from "./ComparisonRow";
import StatCard from "./StatCard";
import { ShieldCheck, Cloud, BrainCircuit, BadgeCheck } from "lucide-react";

const comparisons = [

["Legacy Infrastructure","Oracle Cloud Infrastructure"],

["Manual Business Operations","Oracle Fusion ERP Automation"],

["Fragmented Data","Unified Enterprise Analytics"],

["Reactive Decision Making","AI-Powered Predictive Insights"],

["High Infrastructure Costs","Optimized Cloud Architecture"],

["Slow Digital Transformation","Agile Enterprise Delivery"]

];

export default function WhyOracle(){

return(

<section className="py-36 bg-[#f8fbff]">

<div className="max-w-7xl mx-auto px-8">

<div className="text-center max-w-3xl mx-auto">

<div className="inline-flex bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full">

Why Oracle + Why Us

</div>

<h2 className="text-6xl font-black mt-8">

Technology Meets

<span className="block text-indigo-600">

Transformation Excellence

</span>

</h2>

<p className="mt-8 text-xl text-slate-600 leading-9">

Oracle provides the world's leading enterprise platform. We ensure your transformation journey is faster, safer, and delivers measurable business outcomes.

</p>

</div>

<div className="grid lg:grid-cols-2 gap-16 mt-24">

<div className="space-y-6">

<div className="bg-white rounded-3xl p-8 shadow-lg">

<h3 className="text-3xl font-bold">

Why Oracle?

</h3>

<div className="space-y-5 mt-8">

<div className="flex gap-4 items-center">

<Cloud className="text-indigo-600"/>

Enterprise Cloud Infrastructure

</div>

<div className="flex gap-4 items-center">

<BrainCircuit className="text-indigo-600"/>

AI Built Into Every Layer

</div>

<div className="flex gap-4 items-center">

<ShieldCheck className="text-indigo-600"/>

Enterprise Security

</div>

<div className="flex gap-4 items-center">

<BadgeCheck className="text-indigo-600"/>

Global Scalability

</div>

</div>

</div>

<div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl text-white p-8">

<h3 className="text-3xl font-bold">

Why Choose Us?

</h3>

<p className="mt-6 leading-8">

Certified Oracle consultants delivering cloud migration, enterprise applications, managed services, AI automation, and measurable business outcomes through agile implementation strategies.

</p>

</div>

</div>

<div className="space-y-5">

{

comparisons.map((item,index)=>(

<ComparisonRow

key={index}

left={item[0]}

right={item[1]}

/>

))

}

</div>

</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

<StatCard number="98%" label="Success Rate"/>

<StatCard number="150+" label="Projects Delivered"/>

<StatCard number="20+" label="Oracle Specialists"/>

<StatCard number="24/7" label="Enterprise Support"/>

</div>

</div>

</section>

)

}