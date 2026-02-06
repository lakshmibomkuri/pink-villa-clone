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
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
    category: "RED CARPET",
    views: "5.8K",
    likes: "3.4K",
    date: "1 week ago"
  },
  {
    id: 3,
    title: "Behind the Scenes: Making of Dhurandhar",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
    category: "BEHIND THE SCENES",
    views: "1.9K",
    likes: "890",
    date: "3 days ago"
  },
  {
    id: 4,
    title: "Fashion Week 2026: Best Celebrity Looks",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600",
    category: "FASHION",
    views: "4.2K",
    likes: "2.1K",
    date: "5 days ago"
  },
  {
    id: 5,
    title: "Alia Bhatt's Maternity Photoshoot",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    category: "BOLLYWOOD",
    views: "7.3K",
    likes: "4.8K",
    date: "1 week ago"
  },
  {
    id: 6,
    title: "Hollywood Stars at Mumbai Film Festival",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    category: "HOLLYWOOD",
    views: "3.1K",
    likes: "1.5K",
    date: "4 days ago"
  },
  {
    id: 7,
    title: "Award Show Red Carpet Moments",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
    category: "EVENTS",
    views: "6.7K",
    likes: "3.9K",
    date: "6 days ago"
  },
  {
    id: 8,
    title: "Celebrity Couple's Romantic Getaway",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=600",
    category: "BOLLYWOOD",
    views: "8.1K",
    likes: "5.2K",
    date: "2 weeks ago"
  },
  {
    id: 9,
    title: "Priyanka Chopra's Met Gala Appearance",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
    category: "RED CARPET",
    views: "9.2K",
    likes: "6.1K",
    date: "1 week ago"
  },
  {
    id: 10,
    title: "Shah Rukh Khan's Birthday Celebration",
    image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=600",
    category: "EVENTS",
    views: "12.5K",
    likes: "8.3K",
    date: "3 days ago"
  },
  {
    id: 11,
    title: "Katrina Kaif's Bridal Photoshoot",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600",
    category: "FASHION",
    views: "10.8K",
    likes: "7.2K",
    date: "5 days ago"
  },
  {
    id: 12,
    title: "Bollywood Stars at IIFA Awards 2026",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=600",
    category: "EVENTS",
    views: "11.3K",
    likes: "7.8K",
    date: "1 week ago"
  }
]

export default function GalleryGrid() {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">Featured Photos</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Discover the most popular and trending celebrity photos from recent events, photoshoots, and exclusive moments.
          </p>
        </div>

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
        <div className="relative rounded-lg overflow-hidden mb-6 sm:mb-8 h-32 sm:h-40 w-full">
          <Image
            src="https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&h=200&fit=crop"
            alt="Advertisement"
            fill
            className="object-cover"
          />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 sm:mb-8">
          <div className="bg-gradient-to-br from-pink-50 to-red-50 p-4 sm:p-6 rounded-lg text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#e31837] mb-1 sm:mb-2">500+</div>
            <div className="text-xs sm:text-sm text-gray-600">Photo Galleries</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-lg text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">10K+</div>
            <div className="text-xs sm:text-sm text-gray-600">Celebrity Photos</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 rounded-lg text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">2M+</div>
            <div className="text-xs sm:text-sm text-gray-600">Total Views</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 sm:p-6 rounded-lg text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">Daily</div>
            <div className="text-xs sm:text-sm text-gray-600">New Updates</div>
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