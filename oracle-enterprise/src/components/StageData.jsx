import {
  Database,
  ClipboardCheck,
  Cloud,
  BrainCircuit,
} from "lucide-react";

export const stages = [
  {
    id: 1,
    title: "Current State",
    subtitle: "Legacy Enterprise",
    icon: Database,
    color: "from-slate-500 to-slate-700",

    stats: {
      automation: 28,
      performance: 42,
      visibility: 31,
    },

    points: [
      "Legacy ERP Systems",
      "Manual Processes",
      "High Infrastructure Costs",
      "Data Silos",
      "Slow Reporting",
    ],
  },

  {
    id: 2,
    title: "Assessment",
    subtitle: "Discovery & Planning",
    icon: ClipboardCheck,
    color: "from-sky-500 to-indigo-500",

    stats: {
      automation: 46,
      performance: 58,
      visibility: 55,
    },

    points: [
      "Architecture Review",
      "Business Workshops",
      "Migration Strategy",
      "Gap Analysis",
      "Roadmap Planning",
    ],
  },

  {
    id: 3,
    title: "Implementation",
    subtitle: "Oracle Cloud Migration",
    icon: Cloud,
    color: "from-indigo-500 to-purple-600",

    stats: {
      automation: 74,
      performance: 81,
      visibility: 84,
    },

    points: [
      "OCI Migration",
      "Fusion ERP",
      "Security Integration",
      "Automation",
      "Analytics",
    ],
  },

  {
    id: 4,
    title: "AI Enterprise",
    subtitle: "Future Ready",
    icon: BrainCircuit,
    color: "from-violet-600 to-fuchsia-600",

    stats: {
      automation: 97,
      performance: 99,
      visibility: 98,
    },

    points: [
      "Generative AI",
      "Predictive Analytics",
      "AI Automation",
      "Cloud Native",
      "Continuous Innovation",
    ],
  },
];