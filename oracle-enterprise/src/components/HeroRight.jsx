import DashboardCard from "./DashboardCard";
import FloatingBadge from "./FloatingBadge";
import { Database, Shield, Cloud, BrainCircuit } from "lucide-react";

export default function HeroRight() {
  return (
    <div className="relative flex justify-center items-center">

      <DashboardCard />

      <FloatingBadge
        title="Oracle Fusion"
        icon="⚡"
        className="-top-8 left-10"
      />

      <FloatingBadge
        title="OCI"
        icon={<Cloud />}
        className="top-0 right-0"
      />

      <FloatingBadge
        title="Database"
        icon={<Database />}
        className="bottom-10 left-0"
      />

      <FloatingBadge
        title="Security"
        icon={<Shield />}
        className="-bottom-6 right-16"
      />

      <FloatingBadge
        title="AI / ML"
        icon={<BrainCircuit />}
        className="top-1/2 -right-10"
      />

    </div>
  );
}