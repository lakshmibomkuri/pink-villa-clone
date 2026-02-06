"use client"

import Link from "next/link"

export default function GalleryHero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Breadcrumb */}
        <nav className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
          <Link href="/" className="hover:text-[#e31837]">HOME</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">PHOTOS</span>
        </nav>

        {/* Page Title */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">Celebrity Photos Gallery</h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl">
            Explore exclusive celebrity photos, red carpet moments, behind-the-scenes glimpses, and fashion highlights from Bollywood and Hollywood.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {["All Photos", "Bollywood", "Hollywood", "Fashion", "Events", "Red Carpet", "Behind The Scenes", "K-Pop"].map((category) => (
              <button
                key={category}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-colors ${
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