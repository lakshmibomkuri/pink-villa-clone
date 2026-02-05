"use client"

import Image from "next/image"
import Link from "next/link"
import ExploreMore from "./ExploreMore"

/* ------------------ DATA ------------------ */

const beautyData = {
  featured: {
    title:
      "Alia Bhatt’s glowing skin secret revealed: Dermatologist-approved routine decoded",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=900&h=600&fit=crop",
    author: "Beauty Desk",
  },
  list: [
    {
      title:
        "5 Korean skincare steps you should never skip for glass skin",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=200&fit=crop",
      author: "Beauty Desk",
    },
    {
      title:
        "Deepika Padukone’s makeup artist shares tips for flawless red carpet looks",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
      author: "Beauty Desk",
    },
    {
      title:
        "Hair care mistakes you must avoid if you want long, healthy hair",
      image:
        "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=200&h=200&fit=crop",
      author: "Beauty Desk",
    },
  ],
}

/* ------------------ COMPONENT ------------------ */

export default function BeautySection() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <h2 className="text-[28px] font-bold text-black">Beauty</h2>

        {/* Single Tab (for consistency) */}
        <div className="flex gap-6 mt-3 border-b">
          <span className="pb-2 text-sm font-semibold uppercase text-blue-600 border-b-2 border-blue-600">
            Beauty
          </span>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {/* Featured */}
          <div className="lg:col-span-2">
            <Link href="#" className="block">
              <div className="relative aspect-[16/9]">
                <Image
                  src={beautyData.featured.image}
                  alt={beautyData.featured.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mt-4 text-[22px] font-bold leading-tight text-black">
                {beautyData.featured.title}
              </h3>

              <p className="mt-2 text-xs text-[#666] uppercase">
                BY {beautyData.featured.author}
              </p>
            </Link>
          </div>

          {/* Right List */}
          <div className="space-y-6">
            {beautyData.list.map((item, index) => (
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
