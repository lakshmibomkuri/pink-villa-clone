import Image from "next/image"
import Link from "next/link"
import ExploreMore from "./ExploreMore"

const hollywoodArticles = [
  {
    title: "Taylor Swift and Travis Kelce spotted together at NYC restaurant; Fans go crazy over PDA",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
    category: "HOLLYWOOD",
    timestamp: "1 hour ago"
  },
]

const sideArticles = [
  {
    title: "Jennifer Lawrence announces second pregnancy; Fans congratulate the Oscar winner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=150&fit=crop",
    timestamp: "1 hour ago"
  },
  {
    title: "Ryan Gosling teases potential sequel to The Fall Guy; Says he's ready for more stunts",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=150&fit=crop",
    timestamp: "2 hours ago"
  },
  {
    title: "Margot Robbie's new look for upcoming film revealed; Fans can't stop talking about it",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=150&fit=crop",
    timestamp: "3 hours ago"
  },
  {
    title: "Chris Hemsworth wraps shooting for next Thor film; Shares emotional message",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=150&fit=crop",
    timestamp: "4 hours ago"
  }
]

export default function HollywoodSection() {
  return (
    <section className="bg-white mt-5">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-black">Bollywood</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#" className="group block relative">
              <div className="grid grid-cols-3 gap-1 rounded-md overflow-hidden shadow-md">
                <div className="relative col-span-2">
                  <Image src={hollywoodArticles[0].image} alt={hollywoodArticles[0].title} fill className="object-cover" priority />
                </div>
                <div className="relative col-span-1 h-[220px]">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop"
                    alt={hollywoodArticles[0].title + " secondary"}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <h3 className="mt-3 text-xl font-semibold leading-snug">{hollywoodArticles[0].title}</h3>
              <p className="text-xs text-gray-400 mt-1 select-none">{hollywoodArticles[0].category}</p>
              <p className="text-xs text-gray-500 mt-1 select-none">{hollywoodArticles[0].timestamp}</p>
            </Link>

            <div className="grid grid-cols-2 gap-4">
              {hollywoodArticles.slice(1).map((article, index) => (
                <Link key={index} href="#" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden">
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
                    <h3 className="text-[#1a1a1a] text-[13px] lg:text-[14px] font-semibold leading-tight line-clamp-2 group-hover:text-[#e31837] transition-colors mt-1">
                      {article.title}
                    </h3>
                    <span className="text-[#999999] text-[10px] mt-1 block">{article.timestamp}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {sideArticles.map((article, index) => (
              <Link key={index} href="#" className="group flex gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#1a1a1a] text-[13px] lg:text-[14px] font-semibold leading-tight line-clamp-3 transition-colors">
                    {article.title}
                  </h3>
                  <span className="text-[#999999] text-[10px] mt-1 block">{article.timestamp}</span>
                </div>
                <div className="relative w-[120px] h-[80px] lg:w-[140px] lg:h-[90px] flex-shrink-0 overflow-hidden">
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
