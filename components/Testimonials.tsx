"use client";

import Image from "next/image";
import ScrollAnimate from "./ScrollAnimate";

export default function Testimonials() {
  const testimonials = [
    {
      quote: '"MenuOS transformed our service speed. We turn tables 20% faster now without rushing guests."',
      name: "David Chen",
      role: "Owner, Urban Wok",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=90",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop&q=90",
    },
    {
      quote: '"The analytics feature is a game changer. Knowing exactly what sells at lunch vs dinner increased our margins."',
      name: "Sarah Miller",
      role: "GM, The Roasted Bean",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=90",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop&q=90",
    },
    {
      quote: '"Implementation was seamless. The support team helped us set up our digital menu in under 24 hours."',
      name: "Marcus Johnson",
      role: "Founder, Bistro 88",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=90",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&h=800&fit=crop&q=90",
    },
  ];

  return (
    <section className="py-24 bg-[#fffaf5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimate animationType="fade-up" delay={0}>
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-600 mb-4">Testimonials</p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 max-w-2xl">
              Don&apos;t take our word for it. <br /> Hear it from our partners.
            </h2>
          </div>
        </ScrollAnimate>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const delay = (index % 3) * 100 as 0 | 100 | 200;
            return (
            <ScrollAnimate key={index} animationType="fade-up" delay={delay}>
            <div
              key={index}
              className="relative group h-[480px] rounded-[2rem] bg-white p-10 flex flex-col justify-between transition-all hover:shadow-2xl overflow-hidden border border-slate-100"
            >
              <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                <div className="w-12 h-12 rounded-full bg-orange-50 mb-8 overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">{testimonial.quote}</p>
              </div>
              <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                <div className="text-lg font-semibold text-slate-900">{testimonial.name}</div>
                <div className="text-sm text-slate-400">{testimonial.role}</div>
              </div>
              {/* Hover Image State */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover brightness-50"
                />
                <div className="absolute bottom-10 left-10 text-white">
                  <div className="text-lg font-semibold">{testimonial.name}</div>
                  <div className="text-sm opacity-80">{testimonial.role}</div>
                </div>
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


