"use client";

import { useState } from "react";
import { Bell, Store, ClipboardList, Users, BarChart3, Settings, Search, Printer, MoreVertical, CreditCard, TrendingUp, Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ScrollAnimate from "./ScrollAnimate";

export default function Hero() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate navigation delay for animation
    setTimeout(() => {
      router.push("/demo");
    }, 300);
  };

  return (
    <header className="relative pt-32 pb-24 lg:pt-40 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70"></div>
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-amber-50/50 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-rose-50/40 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
      </div>

      <div className="text-center max-w-7xl mx-auto px-6 relative z-10">
        <ScrollAnimate animationType="fade-up" delay={0}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
            v2.0 is now available
          </div>
        </ScrollAnimate>
        
        <ScrollAnimate animationType="fade-up" delay={100}>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6">
            The Operating System <br className="hidden sm:block" /> for Modern Restaurants
          </h1>
        </ScrollAnimate>
        
        <ScrollAnimate animationType="fade-up" delay={200}>
          <p className="leading-relaxed text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10">
            MenuOS simplifies order management, increases revenue, and delivers a seamless dining experience with our all-in-one platform.
          </p>
        </ScrollAnimate>

        <ScrollAnimate animationType="fade-up" delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://restaurant.menuos.app/"
              className="flex items-center justify-center gap-2 bg-orange-600 text-white text-base font-semibold px-8 py-3.5 rounded-full hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 hover:shadow-orange-600/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Get Started
            </a>
            <a
              href="/demo"
              onClick={handleDemoClick}
              className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 text-base font-medium px-8 py-3.5 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="loading-spinner" size={18} />
                  Loading...
                </>
              ) : (
                "View Demo"
              )}
            </a>
          </div>
        </ScrollAnimate>
      </div>

      {/* Dashboard Composition */}
      <div className="w-full max-w-6xl mx-auto mt-20 relative px-6 lg:px-0">
        {/* Curved decorative lines */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-30 w-full h-full scale-110" viewBox="0 0 1000 600" fill="none">
          <path d="M0,600 C300,500 400,100 500,100 S700,500 1000,600" stroke="#fdba74" strokeWidth="1" strokeDasharray="6 6"></path>
        </svg>

        {/* Main Dashboard Screen (POS Interface) */}
        <div className="relative mx-auto rounded-t-2xl border border-slate-200 bg-white/50 backdrop-blur-xl shadow-2xl shadow-orange-900/10 p-2 max-w-[960px]">
          <div className="rounded-t-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-[16/10] sm:aspect-[16/9] relative shadow-inner">
            
            {/* Top Bar */}
            <div className="h-14 border-b border-slate-800 flex items-center justify-between px-4 bg-slate-900">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="h-4 w-[1px] bg-slate-800"></div>
                <div className="text-xs font-medium text-slate-400">Main Terminal • Floor 1</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
                  <Bell size={16} />
                </div>
                <div className="h-8 w-8 rounded-full bg-orange-600 flex items-center justify-center text-white text-xs font-bold border-2 border-slate-900 cursor-pointer">
                  JS
                </div>
              </div>
            </div>

            {/* App Content */}
            <div className="flex h-[calc(100%-3.5rem)]">
              {/* Sidebar Navigation */}
              <div className="w-16 bg-slate-900 border-r border-slate-800 flex flex-col items-center py-6 gap-6">
                <button className="text-orange-500 bg-orange-500/10 p-2.5 rounded-xl">
                  <Store className="text-xl" size={20} />
                </button>
                <button className="text-slate-500 hover:text-slate-300 transition-colors">
                  <ClipboardList className="text-xl" size={20} />
                </button>
                <button className="text-slate-500 hover:text-slate-300 transition-colors">
                  <Users className="text-xl" size={20} />
                </button>
                <button className="text-slate-500 hover:text-slate-300 transition-colors">
                  <BarChart3 className="text-xl" size={20} />
                </button>
                <div className="mt-auto text-slate-500 hover:text-slate-300 transition-colors">
                  <Settings className="text-xl" size={20} />
                </div>
              </div>

              {/* Orders List Column */}
              <div className="w-72 border-r border-slate-800 bg-slate-900/50 flex flex-col">
                <div className="p-4 border-b border-slate-800">
                  <h3 className="text-white font-medium text-sm mb-3">Active Orders (12)</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 text-slate-500" size={16} />
                    <input type="text" placeholder="Search order..." className="w-full bg-slate-800 text-slate-300 text-xs rounded-lg py-2 pl-9 pr-3 focus:outline-none focus:ring-1 focus:ring-orange-500 placeholder:text-slate-600" />
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto dark-scroll p-2 space-y-2">
                  {/* Order Card Active */}
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-orange-500/30 cursor-pointer relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
                    <div className="flex justify-between items-start mb-2 pl-2">
                      <span className="text-white font-medium text-sm">Table 4</span>
                      <span className="text-[10px] text-slate-400 bg-slate-900/50 px-1.5 py-0.5 rounded">12:30 PM</span>
                    </div>
                    <div className="pl-2 flex justify-between items-end">
                      <div className="text-xs text-slate-400">4 Items</div>
                      <div className="text-orange-400 font-semibold text-sm">$48.50</div>
                    </div>
                  </div>
                  {/* Order Card */}
                  <div className="p-3 rounded-xl border border-transparent hover:bg-slate-800/50 cursor-pointer pl-4 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-slate-300 font-medium text-sm">Table 8</span>
                      <span className="text-[10px] text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">12:28 PM</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="text-xs text-slate-500">2 Items</div>
                      <div className="text-slate-300 font-medium text-sm">$22.00</div>
                    </div>
                  </div>
                  {/* Order Card */}
                  <div className="p-3 rounded-xl border border-transparent hover:bg-slate-800/50 cursor-pointer pl-4 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-slate-300 font-medium text-sm">Order #293</span>
                      <span className="text-[10px] text-green-400/20 text-green-400 px-1.5 py-0.5 rounded">Ready</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="text-xs text-slate-500">Takeout</div>
                      <div className="text-slate-300 font-medium text-sm">$15.90</div>
                    </div>
                  </div>
                  {/* Order Card */}
                  <div className="p-3 rounded-xl border border-transparent hover:bg-slate-800/50 cursor-pointer pl-4 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-slate-300 font-medium text-sm">Table 2</span>
                      <span className="text-[10px] text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">12:15 PM</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="text-xs text-slate-500">6 Items</div>
                      <div className="text-slate-300 font-medium text-sm">$112.40</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Order Details */}
              <div className="flex-1 bg-slate-900 p-6 flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-2xl font-semibold text-white tracking-tight">Table 4</h2>
                      <span className="bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Cooking</span>
                    </div>
                    <p className="text-slate-500 text-xs">Server: Michael • Guests: 2</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center hover:bg-slate-700 hover:text-white">
                      <Printer size={16} />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center hover:bg-slate-700 hover:text-white">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>

                {/* Line Items */}
                <div className="flex-1 overflow-y-auto dark-scroll pr-2 mb-6">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-xs text-slate-500 border-b border-slate-800/50">
                        <th className="font-medium pb-2 pl-1">Item</th>
                        <th className="font-medium pb-2 text-center">Qty</th>
                        <th className="font-medium pb-2 text-right pr-1">Price</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="group">
                        <td className="py-3 pl-1">
                          <div className="text-slate-200 font-medium">Classic Smashburger</div>
                          <div className="text-xs text-slate-500 mt-0.5">+ Extra Cheese, Medium Rare</div>
                        </td>
                        <td className="py-3 text-center text-slate-300">1</td>
                        <td className="py-3 text-right text-slate-300 pr-1">$16.00</td>
                      </tr>
                      <tr className="group border-t border-slate-800/30">
                        <td className="py-3 pl-1">
                          <div className="text-slate-200 font-medium">Truffle Fries</div>
                        </td>
                        <td className="py-3 text-center text-slate-300">1</td>
                        <td className="py-3 text-right text-slate-300 pr-1">$8.50</td>
                      </tr>
                      <tr className="group border-t border-slate-800/30">
                        <td className="py-3 pl-1">
                          <div className="text-slate-200 font-medium">Spicy Chicken Sandwich</div>
                          <div className="text-xs text-slate-500 mt-0.5">No Pickles</div>
                        </td>
                        <td className="py-3 text-center text-slate-300">1</td>
                        <td className="py-3 text-right text-slate-300 pr-1">$14.00</td>
                      </tr>
                      <tr className="group border-t border-slate-800/30">
                        <td className="py-3 pl-1">
                          <div className="text-slate-200 font-medium">Craft Cola</div>
                        </td>
                        <td className="py-3 text-center text-slate-300">2</td>
                        <td className="py-3 text-right text-slate-300 pr-1">$10.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Payment Section */}
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-800">
                  <div className="flex justify-between items-center mb-2 text-sm">
                    <span className="text-slate-400">Subtotal</span>
                    <span className="text-slate-300">$48.50</span>
                  </div>
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-slate-400">Tax (8%)</span>
                    <span className="text-slate-300">$3.88</span>
                  </div>
                  <div className="flex justify-between items-center mb-5 pt-3 border-t border-slate-700">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-2xl text-white font-bold tracking-tight">$52.38</span>
                  </div>
                  <button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-medium py-3 rounded-lg shadow-lg shadow-orange-900/20 transition-all flex items-center justify-center gap-2">
                    <CreditCard className="text-lg" size={18} />
                    Process Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Widget: Stats (Right) */}
        <div className="hidden lg:block absolute top-[10%] right-[-4%] animate-[bounce_6s_infinite]">
          <div className="bg-white p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(249,115,22,0.15)] border border-orange-100 w-64 rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-2xl font-semibold text-slate-900 tracking-tight">1,240</div>
                <div className="text-xs text-slate-500 font-medium">Orders today</div>
              </div>
              <div className="h-10 w-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
                <TrendingUp className="text-xl" size={20} />
              </div>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div className="bg-orange-600 h-1.5 rounded-full" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>

        {/* Floating Widget: Sales (Left) */}
        <div className="hidden lg:block absolute bottom-[20%] left-[-4%] animate-[pulse_5s_infinite]">
          <div className="bg-white p-4 rounded-2xl shadow-[0_20px_50px_-12px_rgba(249,115,22,0.15)] border border-orange-100 w-56 -rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-3">
              <Image 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&q=80" 
                alt="Poke Bowl" 
                width={48} 
                height={48} 
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <div className="text-sm font-semibold text-slate-900">Poke Bowl</div>
                <div className="text-xs text-orange-600 font-medium">Top Seller 🔥</div>
              </div>
              <div className="ml-auto text-sm font-medium text-slate-900">$18</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

