import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  Calendar,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-[9999]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.div
            key="closed"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.25 }}
            className="cursor-pointer"
          >
            <div className="rounded-full bg-gradient-to-b from-blue-600 to-cyan-500 shadow-[0_20px_60px_rgba(37,99,235,.35)] p-4">
              <Sparkles className="text-white" size={24} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="open"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.3 }}
            className="w-[320px] rounded-[28px] bg-white border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,.18)] overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
              <p className="text-xs uppercase tracking-[3px] opacity-80">
                Let's Talk
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Start Your Oracle Journey
              </h3>
            </div>

            <div className="p-6 space-y-4">

              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 rounded-xl p-4 hover:bg-slate-100 transition"
              >
                <Phone className="text-blue-600" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-sm text-slate-500">
                    +91 98765 43210
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@company.com"
                className="flex items-center gap-4 rounded-xl p-4 hover:bg-slate-100 transition"
              >
                <Mail className="text-blue-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-slate-500">
                    hello@company.com
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 rounded-xl p-4 hover:bg-slate-100 transition"
              >
                <Calendar className="text-blue-600" />
                <div>
                  <p className="font-semibold">Book a Meeting</p>
                  <p className="text-sm text-slate-500">
                    30 Minute Consultation
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 rounded-xl p-4 hover:bg-slate-100 transition"
              >
                <MessageCircle className="text-green-600" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm text-slate-500">
                    Quick Response
                  </p>
                </div>
              </a>

              <button className="group mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-white font-semibold transition hover:shadow-[0_20px_50px_rgba(37,99,235,.35)]">
                Talk To An Expert

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}