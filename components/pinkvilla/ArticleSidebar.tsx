import Image from "next/image"
import Link from "next/link"

const trendingArticles = [
  {
    id: 1,
    title: "Dhurandhar OTT Twitter Verdict: Here's what netizens have to say about Ranveer Singh st...",
    image: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    category: "CINEMA",
    href: "/article"
  },
  {
    id: 2,
    title: "Ajith Kumar meets R Madhavan ahead of upcoming racing week in Dubai; fans ask for an F1...",
    image: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    category: "ENTERTAINMENT",
    href: "/article"
  },
  {
    id: 3,
    title: "The Raja Saab Lifetime Hindi Box Office Collections: Prabhas' horror comedy turns BIG D...",
    image: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    category: "ENTERTAINMENT",
    href: "/article"
  }
]

export default function ArticleSidebar() {
  return (
    <aside className="space-y-8">
      {/* Advertisement */}
      <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-500 text-sm">
        Advertisement
      </div>

      {/* Trending Stories */}
      <section>
        <h2 className="text-xl font-bold text-black mb-6">
          Trending Stories
        </h2>
        <div className="space-y-6">
          {trendingArticles.map((article) => (
            <Link key={article.id} href={article.href} className="block group">
              <div className="flex gap-4">
                <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden rounded">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-blue-600 font-medium uppercase mb-2 block">
                    {article.category}
                  </span>
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors leading-tight line-clamp-3">
                    {article.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="space-y-6">
          {trendingArticles.map((article) => (
            <Link key={article.id} href={article.href} className="block group">
              <div className="flex gap-4">
                <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden rounded">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-blue-600 font-medium uppercase mb-2 block">
                    {article.category}
                  </span>
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors leading-tight line-clamp-3">
                    {article.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

      {/* Advertisement */}
      <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-500 text-sm">
        Advertisement
      </div>
      <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-500 text-sm">
        Advertisement
      </div>
      <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-500 text-sm">
        Advertisement
      </div>
      <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-500 text-sm">
        Advertisement
      </div>

    </aside>
  )
}