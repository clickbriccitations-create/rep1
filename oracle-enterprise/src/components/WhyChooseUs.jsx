import {
  Cloud,
  BrainCircuit,
  ShieldCheck,
  BarChart3,
  Workflow,
} from "lucide-react";

import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import FeatureCard from "./ui/FeatureCard";

export default function WhyChooseUs() {
  return (
    <section className="py-36 bg-white">

      <Container>

        <SectionHeading
          badge="Why Choose Us"
          title="Built For Enterprise"
          highlight="Designed For Growth"
          description="We combine Oracle expertise, cloud engineering, AI and enterprise architecture to deliver measurable business outcomes."
        />

        <div className="grid lg:grid-cols-3 gap-6 mt-20">

          {/* Big Card */}

          <FeatureCard
            large
            gradient="from-blue-500 to-cyan-500"
            title="Oracle Cloud Excellence"
            description="Certified specialists helping enterprises modernize infrastructure, applications and operations."
          >
            <Cloud size={60} className="text-blue-600" />
          </FeatureCard>

          <FeatureCard
            gradient="from-indigo-500 to-purple-500"
            title="AI Automation"
            description="Reduce repetitive work with intelligent Oracle AI solutions."
          >
            <BrainCircuit size={46} className="text-indigo-600" />
          </FeatureCard>

          <FeatureCard
            gradient="from-emerald-500 to-cyan-500"
            title="Enterprise Security"
            description="Identity, compliance and governance built into every solution."
          >
            <ShieldCheck size={46} className="text-emerald-600" />
          </FeatureCard>

          <FeatureCard
            gradient="from-orange-500 to-red-500"
            title="Data Analytics"
            description="Actionable insights with Oracle Analytics Cloud."
          >
            <BarChart3 size={46} className="text-orange-600" />
          </FeatureCard>

          <FeatureCard
            large
            gradient="from-violet-500 to-indigo-500"
            title="End-to-End Transformation"
            description="From consulting and migration to optimization and continuous innovation."
          >
            <Workflow size={60} className="text-violet-600" />
          </FeatureCard>

        </div>

      </Container>

    </section>
  );
}