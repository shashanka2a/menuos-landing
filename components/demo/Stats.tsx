"use client";

import { Clock, TrendingUp, Target } from "lucide-react";
import ScrollAnimate from "../ScrollAnimate";

export default function Stats() {
  const stats = [
    {
      icon: Clock,
      percentage: "50%",
      title: "Faster Order Processing",
      description: "Customers place orders 3x faster than traditional methods.",
    },
    {
      icon: TrendingUp,
      percentage: "75%",
      title: "Reduced Wait Times",
      description: "Average table turnover increased by 70%.",
    },
    {
      icon: Target,
      percentage: "100%",
      title: "Order Accuracy",
      description: "Eliminate order mistakes with automated processing.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimate animationType="fade-up" delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
              MenuOS Makes Your Restaurant More Efficient
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Proven results from restaurants using our platform.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const delay = (index % 3) * 100 as 0 | 100 | 200;
            return (
              <ScrollAnimate key={index} animationType="scale" delay={delay}>
                <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600/30 transition-colors">
                    <Icon size={32} className="text-orange-400" />
                  </div>
                  <div className="text-5xl font-bold text-white mb-3">{stat.percentage}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{stat.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-base">{stat.description}</p>
                </div>
                </div>
              </ScrollAnimate>
            );
          })}
        </div>
      </div>
    </section>
  );
}


