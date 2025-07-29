"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isYearly, setIsYearly] = useState(false);

  const pricing = {
    free: "$0",
    pro: isYearly ? "$100/year" : "$10/month",
    business: isYearly ? "$200/year" : "$20/month",
  };

  return (
    <main className="px-4">
      <section className="min-h-[50vh] flex items-center justify-center">
        <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl shadow-lg px-8 py-10 max-w-2xl w-full text-center">
          <p className="text-2xl md:text-3xl font-bold text-white drop-shadow">
            The BEST URL shortener in the Market
          </p>
          <p className="text-white/80 text-sm md:text-base mt-4 leading-relaxed">
            Say goodbye to complicated and shady URL shorteners. Many services
            track your activity or force you to log in just to use them. We
            believe in simplicity, privacy, and speed — that’s why we built this
            tool, so you can shorten links effortlessly and without compromise.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/shorten">
              <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-2.5 shadow-md">
                Try Me
              </button>
            </Link>

            <Link href="/github">
              <button className="text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-6 py-2.5 shadow-md">
                GitHub
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Toggle */}
      <div className="flex justify-center mt-5 mb-4">
        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 text-white text-sm font-medium border border-white/20">
          <span className={`px-3 py-1 rounded-full cursor-pointer transition ${!isYearly ? "bg-white/20" : ""}`} onClick={() => setIsYearly(false)}>
            Monthly
          </span>
          <span className={`px-3 py-1 rounded-full cursor-pointer transition ${isYearly ? "bg-white/20" : ""}`} onClick={() => setIsYearly(true)}>
            Yearly
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mt-6 flex flex-wrap justify-center gap-8 text-white">
        {/* Free Plan */}
        <div className="relative group backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 w-72 shadow-lg transition-all duration-300 ease-in-out hover:border-pink-400 hover:shadow-[0_0_25px_#ec489980] hover:scale-105">
          <h3 className="text-2xl font-bold mb-1">🚀 Free Plan</h3>
          <p className="text-lg font-semibold text-white mb-2">{pricing.free}</p>
          <p className="text-zinc-300 text-sm mb-4">Perfect for casual use:</p>
          <ul className="text-zinc-200 text-sm list-disc pl-4 space-y-1">
            <li>Unlimited short links</li>
            <li>No login required</li>
            <li>No analytics</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="relative group backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 w-72 shadow-lg transition-all duration-300 ease-in-out hover:border-purple-500 hover:shadow-[0_0_25px_#a855f780] hover:scale-105">
          {/* Badge */}
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            Most Popular
          </span>
          <h3 className="text-2xl font-bold mb-1">🔍 Pro Plan</h3>
          <p className="text-lg font-semibold text-white mb-2">{pricing.pro}</p>
          <p className="text-zinc-300 text-sm mb-4">Perfect for professionals:</p>
          <ul className="text-zinc-200 text-sm list-disc pl-4 space-y-1">
            <li>Click tracking & analytics</li>
            <li>Custom aliases (vanity URLs)</li>
            <li>Expiring links</li>
          </ul>
        </div>

        {/* Business Plan */}
        <div className="relative group backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 w-72 shadow-lg transition-all duration-300 ease-in-out hover:border-blue-400 hover:shadow-[0_0_25px_#3b82f680] hover:scale-105">
          <h3 className="text-2xl font-bold mb-1">🏢 Business Plan</h3>
          <p className="text-lg font-semibold text-white mb-2">{pricing.business}</p>
          <p className="text-zinc-300 text-sm mb-4">Designed for businesses:</p>
          <ul className="text-zinc-200 text-sm list-disc pl-4 space-y-1">
            <li>Team management</li>
            <li>Custom domain support</li>
            <li>Priority support & API access</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
