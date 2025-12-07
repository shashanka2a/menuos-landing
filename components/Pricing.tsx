import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small cafes and trucks.",
      price: "$49",
      period: "/mo",
      cta: "Buy plan",
      ctaStyle: "rounded-full px-4 py-2.5 text-center text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-200 hover:ring-slate-300 transition-all",
      features: ["Digital Menu", "QR Ordering", "Basic Support"],
      highlighted: false,
    },
    {
      name: "Growth",
      description: "For busy restaurants scaling up.",
      price: "$99",
      period: "/mo",
      cta: "Get started",
      ctaStyle: "rounded-full bg-white px-4 py-2.5 text-center text-sm font-semibold text-orange-600 hover:bg-orange-50 transition-all",
      features: ["Advanced Analytics", "Inventory Management", "24/7 Priority Support"],
      highlighted: true,
      badge: "MOST POPULAR",
    },
    {
      name: "Enterprise",
      description: "Custom solutions for chains.",
      price: "Custom",
      period: "",
      cta: "Contact sales",
      ctaStyle: "rounded-full px-4 py-2.5 text-center text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-200 hover:ring-slate-300 transition-all",
      features: ["Multi-location Sync", "API Access", "Dedicated Manager"],
      highlighted: false,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-slate-500">No hidden fees. Scale up or down as you need.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 ${
                plan.highlighted
                  ? "ring-1 ring-orange-600 bg-orange-600 text-white relative lg:-mt-4 lg:z-10 shadow-2xl shadow-orange-900/20"
                  : "ring-1 ring-slate-200 bg-white"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-orange-600 border border-orange-100 px-3 py-1 rounded-full text-xs font-bold">
                  {plan.badge}
                </div>
              )}
              <h3 className={`text-lg font-semibold ${plan.highlighted ? "" : "text-slate-900"}`}>{plan.name}</h3>
              <p className={`mt-4 text-sm ${plan.highlighted ? "text-orange-50" : "text-slate-500"}`}>
                {plan.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className={`text-4xl font-bold tracking-tight ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-sm font-semibold ${plan.highlighted ? "text-orange-100" : "text-slate-600"}`}>
                    {plan.period}
                  </span>
                )}
              </p>
              <a href="#" className={`mt-6 block ${plan.ctaStyle}`}>
                {plan.cta}
              </a>
              <ul className={`mt-8 space-y-3 text-sm ${plan.highlighted ? "text-orange-50" : "text-slate-600"}`}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex gap-x-3">
                    <Check
                      className={`text-xl ${plan.highlighted ? "text-white" : "text-orange-600"}`}
                      size={20}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

