
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

import Container from "../ui/Container";
import PrimaryButton from "../ui/PrimaryButton";

export default function FooterCTA() {
  const solutions = [
    "Oracle Cloud",
    "Fusion ERP",
    "Database",
    "OCI",
    "Analytics",
  ];

  const industries = [
    "Banking",
    "Healthcare",
    "Retail",
    "Manufacturing",
    "Public Sector",
  ];

  const company = [
    "About",
    "Insights",
    "Case Studies",
    "Careers",
    "Contact",
  ];

  const trustBadges = [
    "Oracle Cloud Partner",
    "OCI Certified",
    "ISO 27001",
    "24/7 Support",
    "Enterprise Security",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#08111F] text-white">
      {/* =========================================================
          BACKGROUND EFFECTS
      ========================================================== */}

      {/* Top-left blue glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] top-[-180px] z-0 h-[500px] w-[500px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.18) 0%, rgba(37, 99, 235, 0) 70%)",
        }}
      />

      {/* Bottom-right cyan glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-220px] right-[-180px] z-0 h-[550px] w-[550px] rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.16) 0%, rgba(6, 182, 212, 0) 70%)",
        }}
      />

      {/* Center subtle glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[45%] z-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[130px]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10">
        <Container>
          {/* =====================================================
              CTA SECTION
              No white card / no glass box
          ====================================================== */}

          <motion.section
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-28"
          >
            {/* CTA decorative glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-180px] top-[-100px] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[130px]"
            />

            <div className="relative border-b border-white/10 pb-20 sm:pb-24 lg:pb-28">
              <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
                {/* LEFT CONTENT */}
                <div className="min-w-0">
                  {/* Eyebrow */}
                  <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300 sm:px-5 sm:text-sm">
                    Let&apos;s Build Something Great
                  </span>

                  {/* Heading */}
                  <h2 className="mt-7 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                    Ready To Transform
                    <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                      Your Oracle Enterprise?
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    Modernize legacy systems, migrate to Oracle Cloud,
                    automate business processes and unlock enterprise AI
                    with a trusted implementation partner.
                  </p>

                  {/* Buttons */}
                  <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <PrimaryButton>
                      <span className="flex items-center gap-2">
                        Schedule Consultation
                        <ArrowRight size={18} />
                      </span>
                    </PrimaryButton>

                    <button
                      type="button"
                      className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/15 bg-transparent px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/5 hover:text-cyan-200 sm:px-8 sm:text-base"
                    >
                      Talk To An Expert
                    </button>
                  </div>
                </div>

                {/* RIGHT DECORATIVE DESIGN */}
                <div className="relative hidden min-h-[280px] items-center justify-center lg:flex">
                  {/* Outer ring */}
                  <div className="absolute h-[280px] w-[280px] rounded-full border border-blue-400/10" />

                  {/* Middle ring */}
                  <div className="absolute h-[210px] w-[210px] rounded-full border border-cyan-400/10" />

                  {/* Inner glow */}
                  <div className="absolute h-[130px] w-[130px] rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl" />

                  {/* Center */}
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/20 bg-[#0b1a2c] shadow-[0_0_60px_rgba(34,211,238,0.12)]">
                    <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(103,232,249,0.9)]" />
                  </div>

                  {/* Decorative dots */}
                  <div className="absolute right-8 top-10 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]" />

                  <div className="absolute bottom-12 left-10 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.8)]" />

                  <div className="absolute bottom-5 right-20 h-1.5 w-1.5 rounded-full bg-blue-300/70" />
                </div>
              </div>
            </div>
          </motion.section>

          {/* =====================================================
              FOOTER LINKS
          ====================================================== */}

          <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-5 lg:gap-10 lg:py-24">
            {/* BRAND */}
            <div className="min-w-0 lg:col-span-2">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Vertex Consult
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Delivering enterprise Oracle consulting, cloud migration,
                AI transformation and managed services for organizations
                worldwide.
              </p>

              {/* Contact details */}
              <div className="mt-8 space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-4 text-slate-300">
                  <MapPin
                    size={19}
                    className="mt-1 shrink-0 text-cyan-400"
                  />

                  <span>Pune, Maharashtra, India</span>
                </div>

                <div className="flex items-center gap-4 text-slate-300">
                  <Phone
                    size={19}
                    className="shrink-0 text-cyan-400"
                  />

                  <span>+91 98765 43210</span>
                </div>

                <div className="flex items-center gap-4 text-slate-300">
                  <Mail
                    size={19}
                    className="shrink-0 text-cyan-400"
                  />

                  <span className="break-all">
                    hello@vertexconsult.com
                  </span>
                </div>
              </div>
            </div>

            {/* SOLUTIONS */}
            <FooterColumn
              title="Solutions"
              items={solutions}
            />

            {/* INDUSTRIES */}
            <FooterColumn
              title="Industries"
              items={industries}
            />

            {/* COMPANY */}
            <FooterColumn
              title="Company"
              items={company}
            />
          </div>

          {/* =====================================================
              TRUST BADGES
          ====================================================== */}

          <div className="border-y border-white/10 py-8 sm:py-10">
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {trustBadges.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 text-xs font-medium text-slate-300 transition-colors duration-300 hover:border-cyan-400/20 hover:text-cyan-200 sm:px-5 sm:py-3 sm:text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              BOTTOM FOOTER
          ====================================================== */}

          <div className="flex flex-col gap-7 py-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-center text-xs leading-6 text-slate-500 sm:text-sm lg:text-left">
              © 2026 VertexConsult UK Ltd. All Rights Reserved.
            </p>

            
          </div>
        </Container>
      </div>
    </footer>
  );
}

/* ===============================================================
   FOOTER COLUMN
================================================================ */

function FooterColumn({ title, items }) {
  return (
    <div className="min-w-0">
      <h3 className="text-lg font-bold text-white sm:text-xl">
        {title}
      </h3>

      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item}>
            <button
              type="button"
              className="text-left text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300 sm:text-base"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ===============================================================
   SOCIAL BUTTON
================================================================ */

function SocialButton({ label, children, hoverClass }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-slate-400 transition-all duration-300 hover:text-white ${hoverClass}`}
    >
      {children}
    </button>
  );
}

