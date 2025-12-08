"use client";

import ScrollAnimate from "./ScrollAnimate";

export default function Features() {
  const features = [
    {
      icon: "solar:qr-code-bold",
      title: "QR Code Menu",
      description: "Customers scan, browse, customize, and place orders from their phone without waiting for a waiter.",
    },
    {
      icon: "solar:users-group-rounded-bold",
      title: "Captain App",
      description: "Waitstaff manage floor layout, track table status, and take orders for customers who prefer human service.",
    },
    {
      icon: "solar:chef-hat-bold",
      title: "Kitchen App",
      description: "Kitchen staff receive real-time orders, mark items ready, and flag sold-out dishes instantly.",
    },
    {
      icon: "solar:graph-up-bold",
      title: "Admin Dashboard",
      description: "Owners manage menu, view sales analytics, configure staff access, and oversee all operations from anywhere.",
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const delay = (index % 2) * 100 as 0 | 100;
            return (
              <ScrollAnimate key={index} animationType="fade-up" delay={delay}>
                <div className="group p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-orange-600 mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:border-orange-200">
                    <iconify-icon
                      icon={feature.icon}
                      class="text-3xl"
                      style={{ fontSize: "32px" }}
                    ></iconify-icon>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-4">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-slate-500">{feature.description}</p>
                </div>
              </ScrollAnimate>
            );
          })}
        </div>
      </div>
    </section>
  );
}


