"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import ExploreMore from "./ExploreMore"

/* ------------------ DATA ------------------ */

const celebrityStyleData = {
  featured: {
    title:
      "Alia Bhatt turns heads in chic ivory saree worth ₹1.5 lakh; fans call her a fashion icon",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&h=600&fit=crop",
    author: "Ayushi Agrawal",
  },
  list: [
    {
      title:
        "Deepika Padukone’s airport look decoded: How to recreate her luxe travel style",
      image:
        "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=200&h=200&fit=crop",
      author: "Ayushi Agrawal",
    },
    {
      title:
        "Kareena Kapoor Khan stuns in all-black ensemble at film screening",
      image:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=200&h=200&fit=crop",
      author: "Ayushi Agrawal",
    },
    {
      title:
        "Ranveer Singh’s bold fashion choices prove why he’s Bollywood’s trendsetter",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop",
      author: "Ayushi Agrawal",
    },
  ],
}

const styleTipsData = {
  featured: {
    title:
      "How to style monochrome outfits like a celebrity: Fashion expert shares tips",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&h=600&fit=crop",
    author: "Style Desk",
  },
  list: [
    {
      title:
        "5 wardrobe essentials every woman must own in 2026",
      image:
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=200&h=200&fit=crop",
      author: "Style Desk",
    },
    {
      title:
        "How to dress smart-casual for work without looking boring",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=200&h=200&fit=crop",
      author: "Style Desk",
    },
    {
      title:
        "Styling hacks to make affordable outfits look luxury-approved",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=200&h=200&fit=crop",
      author: "Style Desk",
    },
  ],
}

/* ------------------ COMPONENT ------------------ */

export default function FashionSection() {
  const [activeTab, setActiveTab] = useState("celebrity")

  const data =
    activeTab === "celebrity" ? celebrityStyleData : styleTipsData

  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <h2 className="text-[28px] font-bold text-black">Fashion</h2>

        {/* Tabs */}
        <div className="flex gap-6 mt-3 border-b">
          <button
            onClick={() => setActiveTab("celebrity")}
            className={`pb-2 text-sm font-semibold uppercase ${
              activeTab === "celebrity"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-black"
            }`}
          >
            Celebrity Style
          </button>

          <button
            onClick={() => setActiveTab("tips")}
            className={`pb-2 text-sm font-semibold uppercase ${
              activeTab === "tips"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-black"
            }`}
          >
            Style Tips
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

          {/* List */}
          <div className="space-y-6">
            {data.list.map((item, index) => (
              <Link key={index} href="#" className="flex gap-4">
                <div className="flex-1 min-w-0">
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
