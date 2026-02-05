import Image from "next/image"
import Link from "next/link"
import ExploreMore from "./ExploreMore"

const bollywoodArticles = [
  {
    title: "Ikka: Sunny Deol and Akshaye Khanna reunite on screen after 29 years for an intense couple of scenes",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    category: "BOLLYWOOD",
    timestamp: "BY LOVELEEN KAUR"
  },
]

const sideArticles = [
  {
    title: "7 best Shah Rukh Khan's action thrillers to watch on OTT: Don, Jawan, Fan to Raees",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=200&h=150&fit=crop",
    timestamp: "BY LOVELEEN KAUR"
  },
  {
    title: "5 Ranveer Singh movies to watch on OTT ahead of Dhurandhar 2: Gunday, Lootera to Ladies...",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=150&fit=crop",
    timestamp: "BY LOVELEEN KAUR"
  },
  {
    title: "2 Hindi OTT Releases This Week: Kapil Sharma's Kis Kisko Pyaar Karoon 2 and Anurag Kash...",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=200&h=150&fit=crop",
    timestamp: "BY NETRA BRID"
  },
  {
    title: "Dhurandhar: The Revenge: Ranveer Singh announces teaser release date and time with an i...",
    image: "https://images.unsplash.com/photo-1506086679525-16284bc1e62a?w=200&h=150&fit=crop",
    timestamp: "BY LOVELEEN KAUR"
  }
]

export default function BollywoodSection() {
  return (
    <section className="bg-white mt-3 sm:mt-4 lg:mt-5">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-black">Bollywood</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <Link href="#" className="group block relative">
              <div className="grid grid-cols-3 gap-1 rounded-md overflow-hidden shadow-md">
                <div className="relative col-span-2 h-[140px] sm:h-[180px] lg:h-[220px]">
                  <Image src={bollywoodArticles[0].image} alt={bollywoodArticles[0].title} fill className="object-cover" priority />
                </div>
                <div className="relative col-span-1 h-[140px] sm:h-[180px] lg:h-[220px]">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop"
                    alt={bollywoodArticles[0].title + " secondary"}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <h3 className="mt-2 sm:mt-3 text-base sm:text-lg lg:text-xl font-semibold leading-snug">{bollywoodArticles[0].title}</h3>
              <p className="text-xs text-gray-400 mt-1 select-none">{bollywoodArticles[0].category}</p>
              <p className="text-xs text-gray-500 mt-1 select-none">{bollywoodArticles[0].timestamp}</p>
            </Link>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {bollywoodArticles.slice(1).map((article, index) => (
                <Link key={index} href="#" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-[#e31837] text-[10px] font-semibold uppercase tracking-wide">
                      {article.category}
                    </span>
                    <h3 className="text-[#1a1a1a] text-xs sm:text-sm font-semibold leading-tight line-clamp-2 group-hover:text-[#e31837] transition-colors mt-1">
                      {article.title}
                    </h3>
                    <span className="text-[#999999] text-[10px] mt-1 block">{article.timestamp}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-3 sm:space-y-4">
            {sideArticles.map((article, index) => (
              <Link key={index} href="#" className="group flex gap-2 sm:gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#1a1a1a] text-xs sm:text-sm font-semibold leading-tight line-clamp-3 transition-colors">
                    {article.title}
                  </h3>
                  <span className="text-[#999999] text-[10px] mt-1 block">{article.timestamp}</span>
                </div>
                <div className="relative w-20 h-16 sm:w-28 sm:h-20 lg:w-[140px] lg:h-[90px] flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300"
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