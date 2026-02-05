"use client"

import Image from "next/image"
import Link from "next/link"
import { Eye, Heart } from "lucide-react"

const galleryPhotos = [
  {
    id: 1,
    title: "Ranveer Singh's Latest Photoshoot: Bold and Beautiful",
    image: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    category: "BOLLYWOOD",
    views: "2.5K",
    likes: "1.2K",
    date: "2 days ago"
  },
  {
    id: 2,
    title: "Deepika Padukone Stuns at Cannes Film Festival 2026",
    image: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    category: "RED CARPET",
    views: "5.8K",
    likes: "3.4K",
    date: "1 week ago"
  },
  {
    id: 3,
    title: "Behind the Scenes: Making of Dhurandhar",
    image: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    category: "BEHIND THE SCENES",
    views: "1.9K",
    likes: "890",
    date: "3 days ago"
  },
  {
    id: 4,
    title: "Fashion Week 2026: Best Celebrity Looks",
    image: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    category: "FASHION",
    views: "4.2K",
    likes: "2.1K",
    date: "5 days ago"
  },
  {
    id: 5,
    title: "Alia Bhatt's Maternity Photoshoot",
    image: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    category: "BOLLYWOOD",
    views: "7.3K",
    likes: "4.8K",
    date: "1 week ago"
  },
  {
    id: 6,
    title: "Hollywood Stars at Mumbai Film Festival",
    image: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    category: "HOLLYWOOD",
    views: "3.1K",
    likes: "1.5K",
    date: "4 days ago"
  },
  {
    id: 7,
    title: "Award Show Red Carpet Moments",
    image: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    category: "EVENTS",
    views: "6.7K",
    likes: "3.9K",
    date: "6 days ago"
  },
  {
    id: 8,
    title: "Celebrity Couple's Romantic Getaway",
    image: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    category: "BOLLYWOOD",
    views: "8.1K",
    likes: "5.2K",
    date: "2 weeks ago"
  }
]

export default function GalleryGrid() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {galleryPhotos.map((photo) => (
            <Link key={photo.id} href={`/gallery/${photo.id}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                {/* Photo */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 pointer-events-none" />
                  <div className="absolute top-2 left-2">
                    <span className="bg-[#e31837] text-white text-xs font-bold px-2 py-1 rounded">
                      {photo.category}
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {photo.views}
                    </div>
                    <div className="bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {photo.likes}
                    </div>
                  </div>
                </div>

                {/* Photo Info */}
                <div className="p-4">
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-[#e31837] transition-colors mb-2 line-clamp-2">
                    {photo.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{photo.date}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {photo.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {photo.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Advertisement */}
        <div className="bg-gray-100 rounded-lg p-4 text-center mb-8">
          <span className="text-sm text-gray-600">Advertisement</span>
          <div className="mt-4 h-32 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500">Ad Content</span>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          <button className="px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-2 sm:px-3 py-2 text-xs sm:text-sm bg-[#e31837] text-white rounded">1</button>
          <button className="px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded hover:bg-gray-50">2</button>
          <button className="px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded hover:bg-gray-50">3</button>
          <button className="px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </section>
  )
}