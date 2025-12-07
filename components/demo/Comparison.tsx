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
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
              Stop Guessing, Start Automating
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              See the transformation in restaurant operations.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Manual Errors */}
          <ScrollAnimate animationType="fade-up" delay={100}>
            <div className="p-8 rounded-3xl bg-red-50/50 border-2 border-red-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Manual Errors</h3>
              <ul className="space-y-4">
                {manualErrors.map((error, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <X className="text-red-600" size={16} />
                    </div>
                    <span className="text-slate-700 font-semibold text-base">{error}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimate>

          {/* MenuOS Automation */}
          <ScrollAnimate animationType="fade-up" delay={200}>
            <div className="p-8 rounded-3xl bg-green-50/50 border-2 border-green-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">MenuOS Automation</h3>
              <ul className="space-y-4">
                {menuosBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="text-green-600" size={16} />
                    </div>
                    <span className="text-slate-700 font-semibold text-base">{benefit}</span>
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


