import Link from "next/link";
import { LayoutGrid, ArrowRight, ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  return (
    <nav className="sticky z-50 bg-white/80 w-full border-slate-100 border-b top-0 backdrop-blur-md">
      <div className="flex max-w-7xl mx-auto px-6 py-4 items-center justify-between">
        <div className="flex gap-2 items-center">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-lg hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-600/20">
              <LayoutGrid className="text-lg" size={18} />
            </div>
            MenuOS
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://restaurant.menuos.app/"
            className="hidden md:block text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="https://restaurant.menuos.app/"
            className="inline-flex transition-all duration-300 group text-sm font-medium text-white rounded-full py-2 px-5 relative gap-x-2 items-center justify-center overflow-hidden bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-600/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              Request Demo
              <ArrowRight className="text-base transition-transform group-hover:translate-x-0.5" size={16} />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}


