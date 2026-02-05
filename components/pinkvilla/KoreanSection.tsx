"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import ExploreMore from "./ExploreMore"

/* ------------------ DATA ------------------ */

const musicData = {
  featured: {
    title:
      "BTS to livestream ARIRANG comeback for global fans, BTS: THE RETURN documentary planned...",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&h=600&fit=crop",
    author: "Ayushi Agrawal",
  },
  list: [
    {
      title:
        "Stray Kids The dominATE Experience: Release date in India and what to expect, Exclusive...",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&h=200&fit=crop",
      author: "Ayushi Agrawal",
    },
    {
      title:
        "Grammys 2026: BLACKPINK's Rosé makes history with 1st K-pop soloist performance...",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&h=200&fit=crop",
      author: "Ayushi Agrawal",
    },
    {
      title:
        "BTS' V beats Ronaldo and Messi to become most-searched celeb of 2025, named biggest K-pop star",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop",
      author: "Ayushi Agrawal",
    },
  ],
}

const tvSeriesData = {
  featured: {
    title:
      "Squid Game Season 2 release date confirmed; what to expect from the new season",
    image:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=900&h=600&fit=crop",
    author: "Ayushi Agrawal",
  },
  list: [
    {
      title:
        "Park Seo Joon and Han So Hee's new drama creates buzz; fans eagerly waiting",
      image:
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&h=200&fit=crop",
      author: "Ayushi Agrawal",
    },
    {
      title:
        "Song Joong Ki shares unseen pictures with wife and son from Europe vacation",
      image:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=200&h=200&fit=crop",
      author: "Ayushi Agrawal",
    },
    {
      title:
        "Crash Landing On You star Son Ye Jin returns to TV after motherhood",
      image:
        "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=200&h=200&fit=crop",
      author: "Ayushi Agrawal",
    },
  ],
}

/* ------------------ COMPONENT ------------------ */

export default function KoreanSection() {
  const [activeTab, setActiveTab] = useState("music")

  const data = activeTab === "music" ? musicData : tvSeriesData

  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <h2 className="text-[28px] font-bold text-black">Korean</h2>

        {/* Tabs */}
        <div className="flex gap-6 mt-3 border-b">
          <button
            onClick={() => setActiveTab("music")}
            className={`pb-2 text-sm font-semibold ${
              activeTab === "music"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-black"
            }`}
          >
            MUSIC
          </button>

          <button
            onClick={() => setActiveTab("tv")}
            className={`pb-2 text-sm font-semibold ${
              activeTab === "tv"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-black"
            }`}
          >
            TV SERIES
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {/* Featured */}
          <div className="lg:col-span-2">
            <Link href="#" className="block">
              <div className="relative aspect-[16/9]">
                <Image
                  src={data.featured.image}
                  alt={data.featured.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mt-4 text-[22px] font-bold leading-tight text-black">
                {data.featured.title}
              </h3>

              <p className="mt-2 text-xs text-[#666] uppercase">
                BY {data.featured.author}
              </p>
            </Link>
          </div>

          {/* Right list */}
          <div className="space-y-6">
            {data.list.map((item, index) => (
              <Link key={index} href="#" className="flex gap-4">
                <div className="flex-1">
                  <h4 className="text-[15px] font-semibold leading-snug text-black line-clamp-3">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[11px] text-[#666] uppercase">
                    BY {item.author}
                  </p>
                </div>

                <div className="relative w-[90px] h-[60px] flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <ExploreMore />
      </div>
    </section>
  )
}
