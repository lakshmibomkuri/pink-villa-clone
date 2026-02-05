"use client"

import Link from "next/link"
import { Share2, Heart, Eye } from "lucide-react"

const galleryData: { [key: string]: any } = {
  "1": {
    title: "Ranveer Singh's Latest Photoshoot: Bold and Beautiful",
    category: "BOLLYWOOD",
    date: "Feb 04, 2026",
    views: "2.5K",
    likes: "1.2K",
    description: "Ranveer Singh stuns in his latest photoshoot with bold fashion choices and captivating poses."
  }
}

export default function GalleryDetailHero({ id }: { id: string }) {
  const gallery = galleryData[id] || galleryData["1"]

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#e31837]">HOME</Link>
          <span className="mx-2">/</span>
          <Link href="/gallery" className="hover:text-[#e31837]">PHOTOS</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{gallery.category}</span>
        </nav>

        {/* Gallery Title and Meta */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <span className="bg-[#e31837] text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block">
                {gallery.category}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight mb-4">
                {gallery.title}
              </h1>
              <p className="text-gray-700 text-sm sm:text-base mb-4">
                {gallery.description}
              </p>
            </div>
            <div className="text-xs text-gray-500 ml-4">Advertisement</div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-4 gap-3">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>{gallery.date}</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {gallery.views} views
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  {gallery.likes} likes
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">
                <Heart className="w-4 h-4" />
                <span className="text-sm">Like</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}