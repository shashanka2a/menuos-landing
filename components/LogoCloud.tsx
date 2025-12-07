export default function LogoCloud() {
  return (
    <section className="border-y border-slate-100 bg-orange-50/30 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold text-orange-900/40 tracking-widest uppercase text-center mb-10">
          Trusted by over 4,000 modern restaurants
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
          <div className="text-xl font-bold font-serif italic text-slate-800">Bistro</div>
          <div className="text-xl font-bold tracking-tighter text-slate-800">OAK & IRON</div>
          <div className="text-xl font-semibold tracking-wide text-slate-800">The Local</div>
          <div className="text-xl font-medium lowercase text-slate-800">fresh/eats</div>
          <div className="text-xl font-serif font-bold text-slate-800">Maison</div>
          <div className="text-lg font-bold tracking-widest text-slate-800">ROOTS</div>
        </div>
      </div>
    </section>
  );
}

