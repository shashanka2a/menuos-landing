"use client";

import Link from "next/link";
import { LayoutGrid, ArrowLeft } from "lucide-react";

export default function DemoNavbar() {
  return (
    <nav className="sticky z-50 bg-white/80 w-full border-slate-100 border-b top-0 backdrop-blur-md">
      <div className="flex max-w-7xl mx-auto px-6 py-4 items-center justify-between">
        <div className="flex gap-2 items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-600 hover:text-orange-600 transition-colors group"
          >
            <ArrowLeft className="text-base group-hover:-translate-x-0.5 transition-transform" size={18} />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="#" className="hidden md:block text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">
            Log in
          </Link>
          <Link href="#" className="inline-flex transition-all duration-300 group text-sm font-medium text-white rounded-full py-2 px-5 relative gap-x-2 items-center justify-center overflow-hidden bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-600/20">
            <span className="relative z-10 flex items-center gap-2">
              Request Demo
              <LayoutGrid className="text-base transition-transform group-hover:translate-x-0.5" size={16} />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}


