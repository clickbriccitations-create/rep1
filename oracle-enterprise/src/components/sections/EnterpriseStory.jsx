import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import EnterpriseArchitecture from "../ui/EnterpriseArchitecture";
import PrimaryButton from "../ui/PrimaryButton";

const steps = [
  {
    id: "01",
    title: "Assess & Discover",
    description:
      "We analyze your Oracle landscape, business processes, integrations, and future goals before defining the modernization roadmap.",
  },
  {
    id: "02",
    title: "Cloud Migration",
    description:
      "Move enterprise workloads securely to Oracle Cloud Infrastructure while minimizing downtime and operational risk.",
  },
  {
    id: "03",
    title: "Modernize",
    description:
      "Implement Oracle Fusion, automation, AI, analytics and secure integrations across the organization.",
  },
  {
    id: "04",
    title: "Continuous Innovation",
    description:
      "Optimize performance, monitor systems and continuously improve using AI-driven insights.",
  },
];

export default function EnterpriseStory() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-36 bg-slate-50">

      <Container>

        <SectionHeading
          badge="Enterprise Transformation"
          title="From Legacy Systems"
          highlight="To Intelligent Enterprise"
          description="A structured Oracle transformation journey designed to reduce risk, accelerate delivery and maximize business value."
        />

        <div className="grid lg:grid-cols-2 gap-20 mt-24">

          {/* LEFT */}

          <div>

            {steps.map((step, index) => (

              <motion.div
                key={step.id}
                whileHover={{ x: 8 }}
                onMouseEnter={() => setActive(index)}
                className={`cursor-pointer rounded-[28px] p-8 mb-6 transition-all

                ${
                  active === index
                    ? "bg-white shadow-xl border border-blue-200"
                    : "hover:bg-white"
                }`}
              >
                <div className="flex gap-6">

                  <div>

                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-bold

                      ${
                        active === index
                          ? "bg-blue-600 text-white"
                          : "bg-slate-200"
                      }`}
                    >
                      {step.id}
                    </div>

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      {step.title}
                    </h3>

                    <p className="text-slate-600 mt-4 leading-8">
                      {step.description}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

            <div className="mt-10">

              <PrimaryButton>
                Start Your Transformation
              </PrimaryButton>

            </div>

          </div>

          {/* RIGHT */}

          <motion.div
            key={active}
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .45,
            }}
          >

            <EnterpriseArchitecture />

          </motion.div>

        </div>

      </Container>

    </section>
  );
}