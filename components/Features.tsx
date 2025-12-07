"use client";

import { QrCode, BarChart3, CreditCard, ClipboardList } from "lucide-react";
import ScrollAnimate from "./ScrollAnimate";

export default function Features() {
  const features = [
    {
      icon: QrCode,
      title: "QR Code Ordering",
      description: "Enable contactless dining. Guests can scan, browse the menu, and order directly from their smartphones instantly.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Gain actionable insights. Track sales trends, peak hours, and popular items to optimize inventory and staffing.",
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Secure and flexible. Accept all major credit cards, digital wallets, and split payments with zero friction at checkout.",
    },
    {
      icon: ClipboardList,
      title: "Order Management",
      description: "Streamline the kitchen. Centralize incoming orders from all channels into one unified, efficient display system.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimate animationType="fade-up" delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
              Our Services & Features
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Level up your restaurant with industry-leading features designed for success.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const delay = (index % 4) * 100 as 0 | 100 | 200 | 300;
            return (
              <ScrollAnimate key={index} animationType="fade-up" delay={delay}>
                <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-orange-600 mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:border-orange-200">
                    <Icon className="text-2xl" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{feature.description}</p>
                </div>
              </ScrollAnimate>
            );
          })}
        </div>
      </div>
    </section>
  );
}


