import Link from "next/link";
import { LayoutGrid, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        {/* Footer CTA - Waitlist */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-orange-600 shadow-2xl shadow-orange-900/20">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          ></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between p-12 lg:p-24 gap-12">
            <div className="text-center lg:text-left max-w-2xl z-10 w-full">
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6">Join the Waitlist</h2>
              <p className="text-lg text-orange-100 mb-10 max-w-lg">
                Be the first to experience the future of restaurant management. Spots are limited.
              </p>

              <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-orange-200/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all"
                  required
                />
                <button
                  type="button"
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Join Waitlist
                  <ArrowRight className="text-lg" size={18} />
                </button>
              </form>
              <p className="text-xs text-orange-200 mt-4 opacity-70">No credit card required. Cancel anytime.</p>
            </div>

            {/* Right Side Visual (Marquee) */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-80 mask-image-gradient opacity-60 mix-blend-overlay">
              <div className="grid grid-cols-2 gap-4 animate-marquee-vertical">
                <Image
                  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80"
                  alt="Food"
                  width={160}
                  height={160}
                  className="rounded-xl w-full h-40 object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80"
                  alt="Food"
                  width={160}
                  height={160}
                  className="rounded-xl w-full h-40 object-cover translate-y-8"
                />
                <Image
                  src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&q=80"
                  alt="Food"
                  width={160}
                  height={160}
                  className="rounded-xl w-full h-40 object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80"
                  alt="Food"
                  width={160}
                  height={160}
                  className="rounded-xl w-full h-40 object-cover translate-y-8"
                />
                <Image
                  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80"
                  alt="Food"
                  width={160}
                  height={160}
                  className="rounded-xl w-full h-40 object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80"
                  alt="Food"
                  width={160}
                  height={160}
                  className="rounded-xl w-full h-40 object-cover translate-y-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-100 pb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 font-semibold tracking-tight text-lg mb-6">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">
              <LayoutGrid className="text-lg" size={18} />
            </div>
            MenuOS
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Utilize your restaurant&apos;s full potential with MenuOS. Streamline operations and delight customers.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li>
              <Link href="#" className="hover:text-orange-600 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-orange-600 transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-orange-600 transition-colors">
                Integrations
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li>
              <Link href="#" className="hover:text-orange-600 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-orange-600 transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-orange-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li>
              <Link href="#" className="hover:text-orange-600 transition-colors">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-orange-600 transition-colors">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-400">© 2025 MenuOS. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="text-slate-400 hover:text-orange-600 transition-colors flex items-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </Link>
          <Link href="#" className="text-slate-400 hover:text-orange-600 transition-colors flex items-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </Link>
          <Link href="#" className="text-slate-400 hover:text-orange-600 transition-colors flex items-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}

