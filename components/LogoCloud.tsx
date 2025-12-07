"use client";

import ScrollAnimate from "./ScrollAnimate";

export default function LogoCloud() {
  const restaurants = [
    { name: "Bistro", className: "text-xl font-bold font-serif italic text-slate-800" },
    { name: "OAK & IRON", className: "text-xl font-bold tracking-tighter text-slate-800" },
    { name: "The Local", className: "text-xl font-semibold tracking-wide text-slate-800" },
    { name: "fresh/eats", className: "text-xl font-medium lowercase text-slate-800" },
    { name: "Maison", className: "text-xl font-serif font-bold text-slate-800" },
    { name: "ROOTS", className: "text-lg font-bold tracking-widest text-slate-800" },
  ];

  // Duplicate the array for seamless scrolling
  const duplicatedRestaurants = [...restaurants, ...restaurants];

  return (
    <section className="border-y border-slate-100 bg-orange-50/30 py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollAnimate animationType="fade" delay={0}>
          <p className="text-xs font-semibold text-orange-900/40 tracking-widest uppercase text-center mb-10">
            Trusted by 10+ restaurants in Gainesville
          </p>
        </ScrollAnimate>
        <div className="relative">
          {/* Scrolling container */}
          <div className="flex items-center gap-x-12 animate-marquee-horizontal whitespace-nowrap">
            {duplicatedRestaurants.map((restaurant, index) => (
              <div
                key={index}
                className={`${restaurant.className} opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100 flex-shrink-0`}
              >
                {restaurant.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


