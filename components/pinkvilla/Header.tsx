"use client"

import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { label: "NEWS", href: "#" },
  { label: "REVIEWS", href: "#" },
  { label: "ENTERTAINMENT", href: "#" },
  { label: "PHOTOS", href: "#" },
  { label: "VIDEOS", href: "#" },
  { label: "CELEB", href: "#" },
  { label: "LIFESTYLE", href: "#" },
  { label: "TV", href: "#" },
  { label: "ORIGINALS", href: "#" },
]

const topNavItems = [
  "Bollywood",
  "Hollywood", 
  "South",
  "TV",
  "OTT",
  "Fashion",
  "Beauty",
  "Health & Fitness",
  "Web Stories",
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]">
      {/* Top bar */}
      <div className="border-b border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-between h-[50px]">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <svg viewBox="0 0 150 30" className="h-6 w-auto">
                <text x="0" y="24" fill="#e31837" fontWeight="bold" fontSize="24" fontFamily="Arial, sans-serif">
                  PINKVILLA
                </text>
              </svg>
            </Link>

            {/* Top navigation - desktop */}
            <nav className="hidden lg:flex items-center gap-5">
              {topNavItems.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[12px] text-[#333333] hover:text-[#e31837] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center gap-4">
              <button className="p-1 hover:text-[#e31837] transition-colors" aria-label="Search">
                <Search className="h-5 w-5" />
              </button>
              <button 
                className="lg:hidden p-1" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - desktop */}
      <div className="hidden lg:block border-b border-[#e5e5e5] bg-[#ffffff]">
        <div className="max-w-[1200px] mx-auto px-4">
          <nav className="flex items-center gap-6 h-[45px]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] font-semibold text-[#333333] hover:text-[#e31837] transition-colors tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#ffffff] border-b border-[#e5e5e5] shadow-lg">
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-[14px] font-semibold text-[#333333] hover:bg-[#f5f5f5] hover:text-[#e31837]"
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-[#e5e5e5] mt-2 pt-2">
              {topNavItems.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="px-4 py-2 block text-[13px] text-[#666666] hover:text-[#e31837]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
