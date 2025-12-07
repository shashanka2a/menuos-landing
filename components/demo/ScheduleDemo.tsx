"use client";

import { useEffect } from "react";

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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
            Schedule Your Personal Demo
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Book a 15-minute demo with our team to see MenuOS in action.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Testimonial */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100">
            <div className="text-6xl text-orange-600/20 mb-6">"</div>
            <blockquote className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
              MenuOS completely transformed our restaurant operations. We&apos;ve seen a 50% increase in order accuracy and our customers love the convenience.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-orange-600 font-bold text-lg">JD</span>
              </div>
              <div>
                <div className="font-semibold text-slate-900">John Doe</div>
                <div className="text-sm text-slate-500">Owner, Bella Vista Bistro</div>
              </div>
            </div>
          </div>

          {/* Calendly Widget */}
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/5ha5hank/availability"
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

