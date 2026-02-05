import Image from "next/image"
import Link from "next/link"
import ExploreMore from "./ExploreMore"

const tvArticles = [
  {
    title:
      "Anupamaa actress Rupali Ganguly's emotional post on completing 1000 episodes goes viral",
    image:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop",
    category: "TV",
    timestamp: "1 hour ago",
  },
]

const sideArticles = [
  {
    title:
      "Yeh Rishta Kya Kehlata Hai's Harshad Chopda reveals why he left the show",
    image:
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=200&h=150&fit=crop",
    timestamp: "1 hour ago",
  },
  {
    title:
      "Khatron Ke Khiladi 14: Rohit Shetty teases toughest season yet",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=150&fit=crop",
    timestamp: "2 hours ago",
  },
  {
    title:
      "The Kapil Sharma Show to return with new season; Comedian confirms",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=200&h=150&fit=crop",
    timestamp: "3 hours ago",
  },
]

export default function TVSection() {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-black">TV</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            <Link href="#" className="group block">
              {/* Featured Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={tvArticles[0].image}
                  alt={tvArticles[0].title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content below image */}
              <div className="mt-4">
                <h3 className="text-[#1a1a1a] text-[18px] lg:text-[22px] font-bold leading-tight line-clamp-3">
                  {tvArticles[0].title}
                </h3>

                <span className="text-[#999999] text-[11px] mt-2 block">
                  {tvArticles[0].timestamp}
                </span>
              </div>
            </Link>

            {/* Optional grid below (kept as-is) */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {tvArticles.slice(1).map((article, index) => (
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
                    <h3 className="text-[#1a1a1a] text-[13px] lg:text-[14px] font-semibold leading-tight line-clamp-2">
                      {article.title}
                    </h3>
                    <span className="text-[#999999] text-[10px] mt-1 block">
                      {article.timestamp}
                    </span>
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
                  <h3 className="text-[#1a1a1a] text-[13px] lg:text-[14px] font-semibold leading-tight line-clamp-3 group-hover:text-[#e31837] transition-colors">
                    {article.title}
                  </h3>
                  <span className="text-[#999999] text-[10px] mt-1 block">
                    {article.timestamp}
                  </span>
                </div>

                <div className="relative w-[120px] h-[80px] lg:w-[140px] lg:h-[90px] flex-shrink-0 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
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
