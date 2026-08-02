import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OracleServices from "./components/OracleServices";
import TransformationSection from "./components/TransformationSection";
import WhyOracle from "./components/WhyOracle";
import Industries from "./components/Industries";
import CaseStudies from "./components/CaseStudies";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/sections/Testimonials";
import FounderSection from "./components/FounderSection";
import FloatingCTA from "./components/ui/FloatingCTA";

import FooterCTA from "./components/sections/FooterCTA";
function App(){

return(

<div className="bg-[#f8fbff]">

<Navbar/>

<Hero/>
<OracleServices/>

<Industries/>
<CaseStudies/>
<WhyChooseUs/>
<FounderSection/>
<Testimonials/>
<FooterCTA/>
<FloatingCTA/>
</div>

)

}

export default App;