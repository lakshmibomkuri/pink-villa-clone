"use client"

import Link from "next/link"

export default function GalleryHero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#e31837]">HOME</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">PHOTOS</span>
        </nav>

        {/* Page Title */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">Photos</h1>
          <div className="flex gap-4">
            <div className="text-xs text-gray-500">Advertisement</div>
            <div className="text-xs text-gray-500">Advertisement</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {["All Photos", "Bollywood", "Hollywood", "Fashion", "Events", "Red Carpet", "Behind The Scenes"].map((category) => (
              <button
                key={category}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors ${
                  category === "All Photos"
                    ? "bg-[#e31837] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}