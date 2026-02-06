"use client"

import Image from "next/image"
import Link from "next/link"
import { Eye, Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react"
import Header from "@/components/pinkvilla/Header"
import Footer from "@/components/pinkvilla/Footer"
import { use } from "react"

const galleryData: { [key: string]: any } = {
  "1": {
    id: 1,
    title: "Ranveer Singh's Latest Photoshoot: Bold and Beautiful",
    category: "BOLLYWOOD",
    date: "February 4, 2026",
    views: "2.5K",
    likes: "1.2K",
    photographer: "Dabboo Ratnani",
    description: "Ranveer Singh showcases his versatile style in this stunning photoshoot. Known for his bold fashion choices, the actor brings his signature energy and charisma to every frame.",
    images: [
      "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=800"
    ],
    content: `Ranveer Singh continues to push boundaries with his latest photoshoot that perfectly captures his dynamic personality. The actor, known for his experimental fashion sense, brings a fresh perspective to contemporary Indian cinema style.

The photoshoot features a mix of bold colors, striking poses, and innovative styling that has become synonymous with Ranveer's public persona. Each frame tells a story of confidence, creativity, and the evolution of modern Bollywood fashion.

Shot by renowned photographer Dabboo Ratnani, the images showcase Ranveer in various avatars - from sophisticated formal wear to edgy street style. The chemistry between the actor and the camera is palpable, resulting in photographs that are both artistic and commercially appealing.

Fashion critics have praised the shoot for its bold choices and the way it challenges traditional notions of masculine fashion in Indian cinema. The styling team has curated looks that range from classic elegance to avant-garde experimentation.`
  }
}

const relatedPhotos = [
  {
    id: 2,
    title: "Deepika Padukone Stuns at Cannes Film Festival 2026",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
    category: "RED CARPET"
  },
  {
    id: 3,
    title: "Behind the Scenes: Making of Dhurandhar",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
    category: "BEHIND THE SCENES"
  },
  {
    id: 4,
    title: "Fashion Week 2026: Best Celebrity Looks",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400",
    category: "FASHION"
  },
  {
    id: 5,
    title: "Alia Bhatt's Maternity Photoshoot",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
    category: "BOLLYWOOD"
  }
]

export default function GallerySinglePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const gallery = galleryData[id] || galleryData["1"]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1200px] mx-auto px-6 sm:px-6 py-4 sm:py-6">
        {/* Breadcrumb */}
        <nav className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
          <Link href="/" className="hover:text-[#e31837]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/gallery" className="hover:text-[#e31837]">Gallery</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{gallery.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Title and Meta */}
            <div className="mb-4 sm:mb-6">
              <span className="inline-block bg-[#e31837] text-white text-xs font-bold px-3 py-1 rounded mb-3">
                {gallery.category}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">
                {gallery.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4">
                <span>By {gallery.photographer}</span>
                <span>•</span>
                <span>{gallery.date}</span>
                <span>•</span>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {gallery.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {gallery.likes}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#e31837] text-white rounded-lg hover:bg-[#c41530] transition-colors text-sm">
                  <Heart className="w-4 h-4" />
                  Like
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg mb-6">
              <Image
                src={gallery.images[0]}
                alt={gallery.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Description */}
            <div className="mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {gallery.description}
              </p>
            </div>

            {/* Advertisement */}
            <div className="relative h-32 sm:h-40 w-full overflow-hidden rounded-lg mb-6 sm:mb-8">
              <Image
                src="https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=200&fit=crop"
                alt="Advertisement"
                fill
                className="object-cover"
              />
            </div>

            {/* Photo Gallery Grid */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {gallery.images.slice(1).map((img: string, index: number) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group">
                    <Image
                      src={img}
                      alt={`${gallery.title} - Photo ${index + 2}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Full Content */}
            <div className="prose prose-base sm:prose-lg max-w-none mb-6 sm:mb-8">
              {gallery.content.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center py-6 border-t border-gray-200">
              <Link href="/gallery/1" className="flex items-center gap-2 text-[#e31837] hover:underline text-sm sm:text-base">
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                Previous
              </Link>
              <Link href="/gallery" className="text-gray-600 hover:text-[#e31837] text-sm sm:text-base">
                Back to Gallery
              </Link>
              <Link href="/gallery/2" className="flex items-center gap-2 text-[#e31837] hover:underline text-sm sm:text-base">
                Next
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Advertisement */}
            <div className="relative h-64 w-full overflow-hidden rounded-lg mb-6 lg:top-4">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop"
                alt="Advertisement"
                fill
                className="object-cover"
              />
            </div>

            {/* Related Photos */}
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-black mb-4">Related Photos</h3>
              <div className="space-y-4">
                {relatedPhotos.map((photo) => (
                  <Link key={photo.id} href={`/gallery/${photo.id}`} className="block group">
                    <div className="flex gap-3">
                      <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden rounded">
                        <Image
                          src={photo.image}
                          alt={photo.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs text-[#e31837] font-medium uppercase mb-1 block">
                          {photo.category}
                        </span>
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#e31837] transition-colors leading-tight line-clamp-2">
                          {photo.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Advertisement */}
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=600&fit=crop"
                alt="Advertisement"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
