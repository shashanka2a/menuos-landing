"use client";

import { X, Check } from "lucide-react";
import ScrollAnimate from "../ScrollAnimate";

export default function Comparison() {
  const manualErrors = [
    "Order mistakes",
    "Slow turnover",
    "Staff overwhelmed",
    "High commission fees",
  ];

  const menuosBenefits = [
    "Automated orders",
    "Faster service",
    "Staff efficiency",
    "Zero commission fees",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimate animationType="fade-up" delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
              Stop Guessing, Start Automating
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              See the transformation in restaurant operations.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Manual Errors */}
          <ScrollAnimate animationType="fade-up" delay={100}>
            <div className="p-10 rounded-3xl bg-red-50/50 border-2 border-red-100">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Manual Errors</h3>
              <ul className="space-y-5">
                {manualErrors.map((error, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <X className="text-red-600" size={18} />
                    </div>
                    <span className="text-slate-700 font-semibold text-lg">{error}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimate>

          {/* MenuOS Automation */}
          <ScrollAnimate animationType="fade-up" delay={200}>
            <div className="p-10 rounded-3xl bg-green-50/50 border-2 border-green-100">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">MenuOS Automation</h3>
              <ul className="space-y-5">
                {menuosBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="text-green-600" size={18} />
                    </div>
                    <span className="text-slate-700 font-semibold text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}


