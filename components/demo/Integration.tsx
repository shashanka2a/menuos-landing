"use client";

import ScrollAnimate from "../ScrollAnimate";

export default function Integration() {
  const steps = [
    {
      icon: "solar:user-plus-bold",
      title: "Sign Up",
      description: "Create your account in minutes.",
    },
    {
      icon: "solar:menu-dots-bold",
      title: "Configure Menu",
      description: "Upload your menu and generate QR codes.",
    },
    {
      icon: "solar:box-bold",
      title: "Start Taking Orders",
      description: "Customers scan and order instantly.",
    },
    {
      icon: "solar:graph-up-bold",
      title: "Scale & Optimize",
      description: "Monitor sales and optimize operations.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimate animationType="fade-up" delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
              How Easy Is MenuOS Integration?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Get started in four simple steps.
            </p>
          </div>
        </ScrollAnimate>

        <div className="relative max-w-6xl mx-auto">
          {/* Dotted line connecting steps - hidden on mobile, visible on desktop */}
          <svg
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 z-0"
            style={{ top: "120px" }}
          >
            <line
              x1="5%"
              y1="0"
              x2="95%"
              y2="0"
              className="dotted-line"
            />
          </svg>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const delay = (index % 4) * 100 as 0 | 100 | 200 | 300;
              return (
                <ScrollAnimate key={index} animationType="fade-up" delay={delay}>
                  <div className="text-center relative">
                    <div className="w-24 h-24 mx-auto mb-8 bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-600/20 relative z-10">
                      <iconify-icon
                        icon={step.icon}
                        class="text-4xl"
                        style={{ fontSize: "36px" }}
                      ></iconify-icon>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">{step.description}</p>
                  </div>
                </ScrollAnimate>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


