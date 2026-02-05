"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

const galleryPhotos = [
  {
    id: 1,
    src: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    alt: "Ranveer Singh Photo 1",
    caption: "Ranveer Singh in a bold black outfit"
  },
  {
    id: 2,
    src: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    alt: "Ranveer Singh Photo 2",
    caption: "Striking pose with dramatic lighting"
  },
  {
    id: 3,
    src: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    alt: "Ranveer Singh Photo 3",
    caption: "Casual yet stylish look"
  },
  {
    id: 4,
    src: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    alt: "Ranveer Singh Photo 4",
    caption: "Behind the scenes moment"
  },
  {
    id: 5,
    src: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    alt: "Ranveer Singh Photo 5",
    caption: "Final shot of the photoshoot"
  },
  {
    id: 6,
    src: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    alt: "Ranveer Singh Photo 6",
    caption: "Candid moment during break"
  }
]

export default function GalleryDetailContent({ id }: { id: string }) {
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % galleryPhotos.length)
  }

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length)
  }

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Main Photo Display */}
        <div className="mb-8">
          <div className="relative aspect-video max-w-4xl mx-auto mb-4">
            <Image
              src={galleryPhotos[currentPhoto].src}
              alt={galleryPhotos[currentPhoto].alt}
              fill
              className="object-cover rounded-lg cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            />
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded text-sm">
              {currentPhoto + 1} / {galleryPhotos.length}
            </div>
          </div>
          <p className="text-center text-gray-700 text-sm sm:text-base">
            {galleryPhotos[currentPhoto].caption}
          </p>
        </div>

        {/* Photo Thumbnails */}
        <div className="mb-8">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-4">
            {galleryPhotos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => setCurrentPhoto(index)}
                className={`relative aspect-square overflow-hidden rounded-lg ${
                  currentPhoto === index ? "ring-2 ring-[#e31837]" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Advertisement */}
        <div className="bg-gray-100 rounded-lg p-4 text-center mb-8">
          <span className="text-sm text-gray-600">Advertisement</span>
          <div className="mt-4 h-32 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500">Ad Content</span>
          </div>
        </div>

        {/* Related Galleries */}
        <div>
          <h3 className="text-xl font-bold text-black mb-6">Related Photo Galleries</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((item) => (
              <Link key={item} href={`/gallery/${item + 1}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                      alt={`Related Gallery ${item}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-[#e31837] text-white text-xs font-bold px-2 py-1 rounded">
                        BOLLYWOOD
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-gray-900 group-hover:text-[#e31837] transition-colors line-clamp-2">
                      Celebrity Photoshoot Gallery {item}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">15 photos • 2 days ago</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {isLightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="relative max-w-5xl max-h-[90vh] mx-4">
              <Image
                src={galleryPhotos[currentPhoto].src}
                alt={galleryPhotos[currentPhoto].alt}
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-full"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 text-white px-4 py-2 rounded text-sm">
                {galleryPhotos[currentPhoto].caption}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}