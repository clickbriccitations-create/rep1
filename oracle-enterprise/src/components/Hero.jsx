import AuroraBackground from "./AuroraBackground";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import TrustedCompanies from "./TrustedCompanies";
import EnterpriseArchitecture from "./ui/EnterpriseArchitecture";

export default function Hero() {

    return (

        <section className="relative overflow-hidden bg-[#f8fbff]">

            <AuroraBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-8 pt-52 pb-32">

                <div className="grid lg:grid-cols-2 items-center gap-20">

                    <HeroLeft />

                    <div className="relative">
  <EnterpriseArchitecture />
</div>
                </div>

            </div>

            <svg
                className="absolute bottom-0 left-0"
                viewBox="0 0 1440 170"
                fill="none"
            >

                <path
                    fill="#ffffff"
                    d="M0,96L80,101.3C160,107,320,117,480,128C640,139,800,149,960,144C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                />

            </svg>

            <TrustedCompanies />

        </section>

    );

}