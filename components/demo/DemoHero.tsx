"use client";

import { useState } from "react";
import { Play, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ScrollAnimate from "../ScrollAnimate";

export default function DemoHero() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleScheduleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Smooth scroll to schedule section
    setTimeout(() => {
      const element = document.getElementById("schedule-demo");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsLoading(false);
    }, 300);
  };
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70"></div>
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-amber-50/50 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-rose-50/40 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
      </div>

      <div className="text-center max-w-7xl mx-auto px-6 relative z-10">
        <ScrollAnimate animationType="fade-up" delay={0}>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6">
            See MenuOS in Action
          </h1>
        </ScrollAnimate>
        
        <ScrollAnimate animationType="fade-up" delay={100}>
          <p className="leading-relaxed text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10">
            Watch how restaurants streamline operations, reduce errors, and boost efficiency with our all-in-one platform.
          </p>
        </ScrollAnimate>

        <ScrollAnimate animationType="fade-up" delay={200}>
          {/* Video Embed */}
          <div className="max-w-4xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <div className="relative aspect-video bg-slate-900">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/sUAZhjzIiB4"
                title="MenuOS Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </ScrollAnimate>

        <ScrollAnimate animationType="fade-up" delay={300}>
          <Link
            href="#schedule-demo"
            onClick={handleScheduleClick}
            className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 hover:shadow-orange-600/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="loading-spinner" size={18} />
                Loading...
              </>
            ) : (
              <>
                Schedule Your Demo
                <ArrowRight className="text-base" size={18} />
              </>
            )}
          </Link>
        </ScrollAnimate>
      </div>
    </section>
  );
}

