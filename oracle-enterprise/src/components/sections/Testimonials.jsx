import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import AnimatedCounter from "../AnimatedCounter";

import FeaturedTestimonial from "../testimonials/FeaturedTestimonial";
import InfiniteMarquee from "../testimonials/InfiniteMarquee";

import {
  testimonials,
  trustMetrics,
} from "../../data/testimonialData";

export default function Testimonials() {
  return (
    <section className="relative py-36 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute -top-32 left-0 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <Container>

        <SectionHeading
          badge="Client Success"
          title="Trusted By"
          highlight="Industry Leaders"
          description="Every successful Oracle transformation begins with trust. Here are the organizations that partnered with us to modernize their enterprise."
        />

        {/* Featured Story */}

        <div className="mt-20">

          <FeaturedTestimonial
            testimonial={testimonials[0]}
          />

        </div>

        {/* Metrics */}

        <motion.div
          initial={{
            opacity:0,
            y:40
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:.6
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24"
        >

          {trustMetrics.map((metric)=>(
            <div
              key={metric.label}
              className="rounded-[30px] bg-white border border-slate-200 p-10 shadow-[0_15px_50px_rgba(15,23,42,.06)] text-center"
            >

              <AnimatedCounter
                value={metric.value}
                suffix={metric.suffix}
                className="block text-6xl font-black text-blue-600"
              />

              <p className="mt-4 text-slate-500 font-medium">

                {metric.label}

              </p>

            </div>
          ))}

        </motion.div>

        {/* Marquee Heading */}

        <div className="mt-28 text-center">

          <p className="uppercase tracking-[6px] text-blue-600 font-semibold">

            MORE CLIENT EXPERIENCES

          </p>

          <h3 className="mt-4 text-4xl font-black">

            What Enterprise Leaders Say

          </h3>

        </div>

        {/* Infinite Marquee */}

        <div className="mt-16">

          <InfiniteMarquee
            testimonials={testimonials}
          />

        </div>

      </Container>

    </section>
  );
}