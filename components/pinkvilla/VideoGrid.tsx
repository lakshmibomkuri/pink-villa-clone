"use client"

import Image from "next/image"
import Link from "next/link"
import { Play, Clock } from "lucide-react"

const videoCategories = [
  "All Videos",
  "Interviews",
  "Behind The Scenes",
  "Movie Reviews",
  "Fashion",
  "Beauty",
  "Lifestyle"
]

const videos = [
  {
    id: 1,
    title: "Exclusive Interview: Ranveer Singh talks about his upcoming projects",
    thumbnail: "/placeholder.jpg",
    duration: "12:45",
    views: "2.5M",
    timeAgo: "3 days ago",
    category: "INTERVIEWS"
  },
  {
    id: 2,
    title: "Behind the Scenes: Making of Dhurandhar's action sequences",
    thumbnail: "/placeholder.jpg",
    duration: "8:30",
    views: "1.8M",  
    timeAgo: "5 days ago",
    category: "BEHIND THE SCENES"
  },
  {
    id: 3,
    title: "Fashion Week 2026: Best dressed celebrities on the red carpet",
    thumbnail: "/placeholder.jpg",
    duration: "15:20",
    views: "3.2M",
    timeAgo: "1 week ago",
    category: "FASHION"
  },
  {
    id: 4,
    title: "Movie Review: Is this the blockbuster of the year?",
    thumbnail: "/placeholder.jpg",
    duration: "10:15",
    views: "950K",
    timeAgo: "2 weeks ago",
    category: "REVIEWS"
  },
  {
    id: 5,
    title: "Celebrity Beauty Secrets: Skincare routines revealed",
    thumbnail: "/placeholder.jpg",
    duration: "18:45",
    views: "4.1M",
    timeAgo: "3 weeks ago",
    category: "BEAUTY"
  },
  {
    id: 6,
    title: "Lifestyle: A day in the life of Bollywood stars",
    thumbnail: "/placeholder.jpg",
    duration: "22:30",
    views: "2.7M",
    timeAgo: "1 month ago",
    category: "LIFESTYLE"
  }
]

export default function VideoGrid() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {videoCategories.map((category) => (
              <button
                key={category}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors ${
                  category === "All Videos"
                    ? "bg-[#e31837] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {videos.map((video) => (
            <Link key={video.id} href="#" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                      <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="bg-[#e31837] text-white text-xs font-bold px-2 py-1 rounded">
                      {video.category}
                    </span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-[#e31837] transition-colors mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{video.views} views</span>
                    <span>{video.timeAgo}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
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