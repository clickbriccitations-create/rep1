import { Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import PrimaryButton from "./ui/PrimaryButton";

export default function FounderSection() {
  return (
    <section className="relative py-36 bg-gradient-to-b from-white to-slate-50 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -left-32 top-10 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <Container>

        <SectionHeading
          badge="Leadership"
          title="Meet Our"
          highlight="Founder"
          description="A vision driven by enterprise innovation, Oracle expertise and long-term partnerships."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">

          {/* Video */}

          <motion.div
            whileHover={{ y: -8 }}
            className="relative group rounded-[36px] overflow-hidden shadow-2xl"
          >

            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200"
              alt=""
              className="h-[520px] w-full object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/30"/>

            <button className="absolute inset-0 flex items-center justify-center">

              <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 transition">

                <Play
                  fill="#2563eb"
                  className="text-blue-600 ml-1"
                  size={42}
                />

              </div>

            </button>

            <div className="absolute bottom-8 left-8 text-white">

              <p className="uppercase tracking-widest text-sm opacity-80">
                Founder Story
              </p>

              <h3 className="text-3xl font-bold mt-2">
                Watch Our Journey
              </h3>

            </div>

          </motion.div>

          {/* Right */}

          <div>

            <blockquote className="text-4xl font-black leading-tight text-slate-900">

              “Technology should simplify business,
              not complicate it.”

            </blockquote>

            <p className="mt-8 text-lg leading-9 text-slate-600">

              Our mission is to help enterprises embrace Oracle technologies
              with confidence, delivering scalable, secure and future-ready
              digital transformation solutions.

            </p>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="rounded-3xl bg-white p-6 shadow-lg border">

                <h2 className="text-5xl font-black text-blue-600">

                  250+

                </h2>

                <p className="mt-2 text-slate-500">

                  Enterprise Projects

                </p>

              </div>

              <div className="rounded-3xl bg-white p-6 shadow-lg border">

                <h2 className="text-5xl font-black text-blue-600">

                  98%

                </h2>

                <p className="mt-2 text-slate-500">

                  Client Satisfaction

                </p>

              </div>

              <div className="rounded-3xl bg-white p-6 shadow-lg border">

                <h2 className="text-5xl font-black text-blue-600">

                  12+

                </h2>

                <p className="mt-2 text-slate-500">

                  Years Experience

                </p>

              </div>

              <div className="rounded-3xl bg-white p-6 shadow-lg border">

                <h2 className="text-5xl font-black text-blue-600">

                  24/7

                </h2>

                <p className="mt-2 text-slate-500">

                  Enterprise Support

                </p>

              </div>

            </div>

            <div className="flex gap-5 mt-12">

              <PrimaryButton>

                Schedule Consultation

              </PrimaryButton>

              <button className="rounded-full border border-slate-300 px-6 py-4 flex items-center gap-3 hover:bg-slate-100 transition">

                

                LinkedIn

              </button>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}