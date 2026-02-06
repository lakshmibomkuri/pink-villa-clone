"use client"

import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

const featuredVideos = [
  {
    id: 1,
    title: "Shahid Kapoor Opens Up About Virat Kohli and Rohit Sharma 🔥🔥 #shorts #viratkohli #rohitsharma",
    thumbnail: "/placeholder.jpg",
    category: "EXCLUSIVE",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Kareena Kapoor 😳😂 Reveals She Rejected Saif Ali Khan Twice #shorts #kareenakapoorkhan #saifalikhan",
    thumbnail: "/placeholder.jpg",
    category: "CELEBRITY",
    youtubeUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0"
  },
  {
    id: 3,
    title: "Amaal Mallik Exposes The Sad Reality Of Indian Music Industry 💔🔥 #shorts #biggboss #amaalmallik",
    thumbnail: "/placeholder.jpg",
    category: "MUSIC",
    youtubeUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4"
  },
  {
    id: 4,
    title: "Amaal Mallik 😳😳 Raises Serious Concern From Music Industry 😳 Very Sad #shorts #amaalmallik #mu...",
    thumbnail: "/placeholder.jpg",
    category: "INDUSTRY",
    youtubeUrl: "https://www.youtube.com/watch?v=kJQP7kiw5Fk"
  }
]

export default function VideoHero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#e31837]">HOME</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">VIDEO ZONE</span>
        </nav>

        {/* Page Title */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">Videos</h1>
          <div className="flex gap-4">
            {/* <div className="text-xs text-gray-500">Advertisement</div>
            <div className="text-xs text-gray-500">Advertisement</div> */}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {featuredVideos.map((video) => (
            <a key={video.id} href={video.youtubeUrl} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                    <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                  </div>
                </div>
                {/* <div className="absolute top-2 left-2">
                  <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                    {video.category}
                  </span>
                </div> */}
              </div>
              <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
                {video.title}
              </h3>
            </a>
          ))}
        </div>

        {/* Advertisement Section */}
        <div className="bg-gray-100 rounded-lg p-4 text-center mb-8">
          <span className="text-sm text-gray-600">Advertisement</span>
          <div className="mt-4 h-32 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500">Ad Content</span>
          </div>
        </div>

        {/* Second Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Prince Narula video"
                fill
                className="object-cover"
              />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  People Has Tattoo Of My Face 😍😍
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Prince Narula 😳😂 Reveals That People Has Tattoos Of His Face 🔥 #shorts #princenarula #tattoo
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Abhishek Bajaj video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Abhishek Roasted Host 😂😂
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Abhishek Bajaj 😂💀 Forces The Host To Drink Amla Shot 😳 Watch Till End #shorts #comedy #funny
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Aisha Sharma video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Aisha Sharma's Stunning Look 😍✨
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Aisha Sharma Is Looking Stunning In Her Western Denim Look 😍✨ #shorts #bollywood #nehasharma
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Awez Darbar video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Smart Girls Are Single 💔💔
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Awez Darbar and Abhishek Bajaj On Princess Treatment Vs Bare Minimum 💅▶ #shorts #relationship
            </h3>
          </div>
        </div>

        {/* Third Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Friendship video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Friend's With Benefits 💔▶
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Awez Darbar & Abhishek Bajaj Reveals About Friendship With Exes 💔▶ #shorts #abhishekbajaj #love
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Dating tips video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Smart Girls Are Single 💔💔
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Awez Darbar Gives A PRO TIP For All The Men Out There 😳💕 #shorts #relationship #girlfriend
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Princess treatment video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Smart Girls Are Single 💔💔
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Abhishek Bajaj & Awez Darbar Princess Treatment 💅 VS Bare Minimum ✨ #shorts #relationship #princess
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Dating secrets video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Smart Girls Are Single 💔💔
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Awez Darbar and Abhishek Bajaj 😳💀 Reveals Big Secret Of Modern Dating #shorts #abhishekbajaj #love
            </h3>
          </div>
        </div>

        {/* Final Advertisement Section */}
        <div className="bg-gray-100 rounded-lg p-4 text-center mb-8">
          <span className="text-sm text-gray-600">Advertisement</span>
          <div className="mt-4 h-32 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500">Ad Content</span>
          </div>
        </div>

        {/* Fourth Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Prince Narula video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  People Has Tattoo Of My Face 😍😍
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Prince Narula 😳😂 Reveals That People Has Tattoos Of His Face 🔥 #shorts #princenarula #tattoo
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Abhishek Bajaj video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Abhishek Roasted Host 😂😂
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Abhishek Bajaj 😂💀 Forces The Host To Drink Amla Shot 😳 Watch Till End #shorts #comedy #funny
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Aisha Sharma video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Aisha Sharma's Stunning Look 😍✨
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Aisha Sharma Is Looking Stunning In Her Western Denim Look 😍✨ #shorts #bollywood #nehasharma
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Awez Darbar video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Smart Girls Are Single 💔💔
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Awez Darbar and Abhishek Bajaj On Princess Treatment Vs Bare Minimum 💅▶ #shorts #relationship
            </h3>
          </div>
        </div>

        {/* Fifth Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Friendship video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Friend's With Benefits 💔▶
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Awez Darbar & Abhishek Bajaj Reveals About Friendship With Exes 💔▶ #shorts #abhishekbajaj #love
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Dating tips video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Smart Girls Are Single 💔💔
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Awez Darbar Gives A PRO TIP For All The Men Out There 😳💕 #shorts #relationship #girlfriend
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Princess treatment video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Smart Girls Are Single 💔💔
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Abhishek Bajaj & Awez Darbar Princess Treatment 💅 VS Bare Minimum ✨ #shorts #relationship #princess
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Dating secrets video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Smart Girls Are Single 💔💔
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Awez Darbar and Abhishek Bajaj 😳💀 Reveals Big Secret Of Modern Dating #shorts #abhishekbajaj #love
            </h3>
          </div>
        </div>

        {/* Final Advertisement Section */}
        <div className="bg-gray-100 rounded-lg p-4 text-center mb-8">
          <span className="text-sm text-gray-600">Advertisement</span>
          <div className="mt-4 h-32 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500">Ad Content</span>
          </div>
        </div>

      

          {/* Sixth Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Friendship video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Friend's With Benefits 💔▶
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Awez Darbar & Abhishek Bajaj Reveals About Friendship With Exes 💔▶ #shorts #abhishekbajaj #love
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Dating tips video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Smart Girls Are Single 💔💔
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Awez Darbar Gives A PRO TIP For All The Men Out There 😳💕 #shorts #relationship #girlfriend
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Princess treatment video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Smart Girls Are Single 💔💔
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Abhishek Bajaj & Awez Darbar Princess Treatment 💅 VS Bare Minimum ✨ #shorts #relationship #princess
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Dating secrets video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Smart Girls Are Single 💔💔
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Awez Darbar and Abhishek Bajaj 😳💀 Reveals Big Secret Of Modern Dating #shorts #abhishekbajaj #love
            </h3>
          </div>
        </div>
        
         {/* Seventh Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Prince Narula video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  People Has Tattoo Of My Face 😍😍
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Prince Narula 😳😂 Reveals That People Has Tattoos Of His Face 🔥 #shorts #princenarula #tattoo
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Abhishek Bajaj video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Abhishek Roasted Host 😂😂
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Abhishek Bajaj 😂💀 Forces The Host To Drink Amla Shot 😳 Watch Till End #shorts #comedy #funny
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Aisha Sharma video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Aisha Sharma's Stunning Look 😍✨
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Aisha Sharma Is Looking Stunning In Her Western Denim Look 😍✨ #shorts #bollywood #nehasharma
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg"
                alt="Awez Darbar video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                {/* <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Smart Girls Are Single 💔💔
                </span> */}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-3 group-hover:text-[#e31837] transition-colors">
              Awez Darbar and Abhishek Bajaj On Princess Treatment Vs Bare Minimum 💅▶ #shorts #relationship
            </h3>
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