import Navbar from "@/components/Navbar";
import DemoHero from "@/components/demo/DemoHero";
import TrustedBy from "@/components/demo/TrustedBy";
import Comparison from "@/components/demo/Comparison";
import Integration from "@/components/demo/Integration";
import Stats from "@/components/demo/Stats";
import ScheduleDemo from "@/components/demo/ScheduleDemo";
import Footer from "@/components/Footer";

export const metadata = {
  title: "MenuOS Demo - See MenuOS in Action | Schedule Your Demo",
  description: "Watch how restaurants streamline operations, reduce errors, and boost efficiency with MenuOS. Schedule a 15-minute demo to see MenuOS in action.",
};

export default function DemoPage() {
  return (
    <main>
      <Navbar />
      <DemoHero />
      <TrustedBy />
      <Comparison />
      <Integration />
      <Stats />
      <ScheduleDemo />
      <Footer />
    </main>
  );
}

