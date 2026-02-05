import Image from "next/image"
import Link from "next/link"
import ExploreMore from "./ExploreMore"

const sportsArticles = [
  {
    title: "Virat Kohli's fitness secret revealed: Here's how he maintains his physique at 35",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    category: "SPORTS",
    timestamp: "1 hour ago"
  },
]

const sideArticles = [
  {
    title: "Rohit Sharma's emotional message after World Cup win goes viral",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=200&h=150&fit=crop",
    timestamp: "30 min ago"
  },
  {
    title: "Neeraj Chopra's training video breaks internet ahead of Olympics",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=200&h=150&fit=crop",
    timestamp: "1 hour ago"
  },
  {
    title: "PV Sindhu shares her diet plan for Paris Olympics preparation",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=200&h=150&fit=crop",
    timestamp: "2 hours ago"
  }
]

export default function SportsLifeSection() {
  return (
    <section className="py-6 bg-[#ffffff]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-black">Sports Life</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            <Link href="#" className="group block">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={sportsArticles[0].image}
                  alt={sportsArticles[0].title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content below image */}
              <div className="mt-4">

                <h3 className="text-[#1a1a1a] text-[18px] lg:text-[22px] font-bold leading-tight line-clamp-3">
                  {sportsArticles[0].title}
                </h3>

                <span className="text-[#999999] text-[11px] mt-2 block">
                  {sportsArticles[0].timestamp}
                </span>
              </div>
            </Link>


            <div className="grid grid-cols-2 gap-4 mt-4">
              {sportsArticles.slice(1).map((article, index) => (
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
