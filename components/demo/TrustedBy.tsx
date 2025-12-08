export default function TrustedBy() {
  const restaurants = ["Wendy's", "Bella Vista", "Golden Dragon", "Tony's Pizza"];

  return (
    <section className="border-y border-slate-100 bg-orange-50/30 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold text-orange-900/40 tracking-widest uppercase text-center mb-10">
          Trusted By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="text-xl font-bold text-slate-800">
              {restaurant}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



