"use client";

import { UserPlus, Menu, Package, TrendingUp } from "lucide-react";
import ScrollAnimate from "../ScrollAnimate";

export default function Integration() {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your account in minutes.",
    },
    {
      icon: Menu,
      title: "Configure Menu",
      description: "Upload your menu and generate QR codes.",
    },
    {
      icon: Package,
      title: "Start Taking Orders",
      description: "Customers scan and order instantly.",
    },
    {
      icon: TrendingUp,
      title: "Scale & Optimize",
      description: "Monitor sales and optimize operations.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimate animationType="fade-up" delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
              How Easy Is MenuOS Integration?
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Get started in four simple steps.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const delay = (index % 4) * 100 as 0 | 100 | 200 | 300;
            return (
              <ScrollAnimate key={index} animationType="fade-up" delay={delay}>
                <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-600/20">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </ScrollAnimate>
            );
          })}
        </div>
      </div>
    </section>
  );
}


