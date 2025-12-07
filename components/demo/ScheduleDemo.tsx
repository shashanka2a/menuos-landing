"use client";

import { useEffect } from "react";
import ScrollAnimate from "../ScrollAnimate";

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function ScheduleDemo() {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const calendlyLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
      const calendlyScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (calendlyLink) calendlyLink.remove();
      if (calendlyScript) calendlyScript.remove();
    };
  }, []);

  return (
    <section id="schedule-demo" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimate animationType="fade-up" delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
              Schedule Your Personal Demo
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Book a 15-minute demo with our team to see MenuOS in action.
            </p>
          </div>
        </ScrollAnimate>

        <ScrollAnimate animationType="fade-up" delay={200}>
          <div className="max-w-2xl mx-auto">
            {/* Calendly Widget */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 overflow-hidden">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/5ha5hank/availability"
                style={{ minWidth: "320px", height: "700px" }}
              ></div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}

