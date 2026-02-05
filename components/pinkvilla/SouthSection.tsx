import Image from "next/image"
import Link from "next/link"
import ExploreMore from "./ExploreMore"

const southArticles = [
  {
    title: "Prabhas starrer Kalki 2898 AD becomes highest grossing Indian film; Breaks all records worldwide",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop",
    category: "SOUTH",
    timestamp: "1 hour ago"
  },
]

const sideArticles = [
  {
    title: "Rajinikanth announces retirement after completing upcoming film Coolie",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=150&fit=crop",
    timestamp: "1 hour ago"
  },
  {
    title: "Samantha Ruth Prabhu shares health update after myositis diagnosis",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&h=150&fit=crop",
    timestamp: "2 hours ago"
  },
  {
    title: "Ram Charan and Jr NTR reunite for RRR sequel; SS Rajamouli confirms",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=200&h=150&fit=crop",
    timestamp: "3 hours ago"
  },
]
export default function SouthSection() {
  return (
    <section className="bg-white mt-5">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-black">South</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* MAIN CONTENT — EXACT image layout */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Featured */}
            <Link href="#" className="group block relative">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={southArticles[0].image}
                  alt={southArticles[0].title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-[#ffde00] text-[#1a1a1a] text-[11px] font-bold px-2 py-0.5 mb-2">
                    {southArticles[0].category}
                  </span>
                  <h3 className="text-[#ffffff] text-[18px] lg:text-[22px] font-bold leading-tight line-clamp-3">
                    {southArticles[0].title}
                  </h3>
                  <span className="text-[#cccccc] text-[11px] mt-2 block">{southArticles[0].timestamp}</span>
                </div>
              </div>
            </Link>

            {/* Remaining stacked vertically */}
            {southArticles.slice(1).map((article, index) => (
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

          {/* SIDEBAR — untouched */}
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

