"use client"

import Link from "next/link"
import { Menu, ChevronLeft, ChevronRight } from "lucide-react"

const navItems = [
  { label: "Latest", href: "#", active: true },
  { label: "Box Office", href: "#" },
  { label: "Entertainment", href: "#" },
  { label: "Cinema", href: "#" },
  { label: "Korean", href: "#" },
  { label: "Lifestyle", href: "#" },
  { label: "Sports Life", href: "#" },
  { label: "Beauty", href: "#" },
  { label: "Fashion", href: "#" }
]

const trendingItems = [
  "RRR",
  "Shah Rukh Khan's action thrillers to watch on OTT",
  "Ranveer Singh movies to watch on OTT",
  "Dhurandhar"
]

export default function ArticleHeader() {
  return (
    <header className="bg-white">
      {/* Top Advertisement Bar */}
      <div className="bg-gray-100 text-xs text-gray-600 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>Advertisement</span>
          <span>Advertisement</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Menu and Logo */}
          <div className="flex items-center gap-4">
            <button className="p-1">
              <Menu className="h-5 w-5" />
            </button>
            <Link href="/" className="text-2xl font-bold text-[#e31837]">
              PINKVILLA
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
                  item.active 
                    ? "text-blue-600 border-blue-600" 
                    : "text-gray-700 border-transparent hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="text-xs text-gray-600">
            Advertisement
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[#e31837]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/entertainment" className="hover:text-[#e31837]">Entertainment</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Box Office</span>
          </nav>
        </div>
      </div>

      {/* Trending Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <span className="bg-[#e31837] text-white text-xs font-bold px-3 py-1 rounded">
              TRENDING
            </span>
            
            <div className="flex items-center gap-6 flex-1 overflow-hidden">
              {trendingItems.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-sm text-gray-700 hover:text-[#e31837] whitespace-nowrap transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}