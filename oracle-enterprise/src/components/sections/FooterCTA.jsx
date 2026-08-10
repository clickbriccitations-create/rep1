import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  
  
} from "lucide-react";

import Container from "../ui/Container";
import PrimaryButton from "../ui/PrimaryButton";
import EnterpriseArchitecture from "../ui/EnterpriseArchitecture";

export default function FooterCTA() {
  return (
    <footer className="relative overflow-hidden bg-[#08111F] text-white">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb20,transparent_40%)]"/>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#06b6d420,transparent_40%)]"/>

      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <Container>

        {/* CTA */}

        <motion.div

          initial={{opacity:0,y:60}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}

          className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-16 mt-24 overflow-hidden"

        >

          <div className="absolute -right-40 top-0 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[150px]" />

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm tracking-widest uppercase text-cyan-300">

                Let's Build Something Great

              </span>

              <h2 className="mt-8 text-6xl leading-tight font-black">

                Ready To Transform

                <span className="block text-blue-400">

                  Your Oracle Enterprise?

                </span>

              </h2>

              <p className="mt-8 text-slate-300 text-lg leading-9 max-w-xl">

                Modernize legacy systems, migrate to Oracle Cloud,
                automate business processes and unlock enterprise AI
                with a trusted implementation partner.

              </p>

              <div className="flex flex-wrap gap-5 mt-12">

                <PrimaryButton>

                  Schedule Consultation

                </PrimaryButton>

                <button className="rounded-full border border-white/20 px-8 py-4 hover:bg-white hover:text-slate-900 transition">

                  Talk To An Expert

                </button>

              </div>

            </div>

            {/* RIGHT */}

            

          </div>

        </motion.div>

        {/* FOOTER */}

        <div className="grid lg:grid-cols-5 gap-12 py-24">

          {/* Brand */}

          <div className="lg:col-span-2">

            <h2 className="text-4xl font-black">

              Vertex Consult

            </h2>

            <p className="mt-6 text-slate-400 leading-8 max-w-md">

              Delivering enterprise Oracle consulting, cloud migration,
              AI transformation and managed services for organizations
              worldwide.

            </p>

            <div className="space-y-4 mt-10">

              <div className="flex items-center gap-4">

                <MapPin size={18}/>

                Pune, Maharashtra, India

              </div>

              <div className="flex items-center gap-4">

                <Phone size={18}/>

                +91 98765 43210

              </div>

              <div className="flex items-center gap-4">

                <Mail size={18}/>

                hello@vertexconsult.com

              </div>

            </div>

          </div>

          {/* Links */}

          <div>

            <h3 className="font-bold text-xl">

              Solutions

            </h3>

            <ul className="space-y-5 mt-8 text-slate-400">

              <li>Oracle Cloud</li>

              <li>Fusion ERP</li>

              <li>Database</li>

              <li>OCI</li>

              <li>Analytics</li>

            </ul>

          </div>

          <div>

            <h3 className="font-bold text-xl">

              Industries

            </h3>

            <ul className="space-y-5 mt-8 text-slate-400">

              <li>Banking</li>

              <li>Healthcare</li>

              <li>Retail</li>

              <li>Manufacturing</li>

              <li>Public Sector</li>

            </ul>

          </div>

          <div>

            <h3 className="font-bold text-xl">

              Company

            </h3>

            <ul className="space-y-5 mt-8 text-slate-400">

              <li>About</li>

              <li>Insights</li>

              <li>Case Studies</li>

              <li>Careers</li>

              <li>Contact</li>

            </ul>

          </div>

        </div>

        {/* Trust Badges */}

        <div className="flex flex-wrap gap-5 border-y border-white/10 py-10">

          {[
            "Oracle Cloud Partner",
            "OCI Certified",
            "ISO 27001",
            "24/7 Support",
            "Enterprise Security",
          ].map((item)=>(
            <div

              key={item}

              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-300"

            >

              {item}

            </div>
          ))}

        </div>

        {/* Bottom */}

        <div className="flex flex-col lg:flex-row justify-between items-center py-10">

          <p className="text-slate-500">

            © 2026 VertexConsult UK Ltd. All Rights Reserved.

          </p>

          <div className="flex gap-5 mt-6 lg:mt-0">

            <button className="w-12 h-12 rounded-full bg-white/5 hover:bg-blue-600 transition flex items-center justify-center">

              

            </button>

            <button className="w-12 h-12 rounded-full bg-white/5 hover:bg-sky-500 transition flex items-center justify-center">

              

            </button>

            <button className="w-12 h-12 rounded-full bg-white/5 hover:bg-slate-700 transition flex items-center justify-center">

              

            </button>

          </div>

        </div>

      </Container>

    </footer>
  );
}