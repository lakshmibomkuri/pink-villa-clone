"use client"

import Image from "next/image"
import Link from "next/link"

const articles = [
  {
    id: 1,
    title: "Dhurandhar on OTT: Ranveer Singh starrer breaks another record ahead of second part's release",
    excerpt: "Ranveer Singh starrer Dhurandhar had released on OTT recently and has dominated itself at the top spot of global non-English films.",
    image: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    category: "BOX OFFICE",
    date: "Feb 04, 2026",
    readTime: "3 min read",
    href: "/article"
  },
  {
    id: 2,
    title: "Shah Rukh Khan's action thrillers to watch on OTT: From Pathaan to Jawan",
    excerpt: "Here's a curated list of Shah Rukh Khan's best action thrillers that you can stream on various OTT platforms.",
    image: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    category: "ENTERTAINMENT",
    date: "Feb 03, 2026",
    readTime: "4 min read",
    href: "/article"
  },
  {
    id: 3,
    title: "Ranveer Singh movies to watch on OTT: Complete list of streaming platforms",
    excerpt: "From Padmaavat to 83, here are all Ranveer Singh movies you can watch on different streaming platforms.",
    image: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    category: "CINEMA",
    date: "Feb 02, 2026",
    readTime: "5 min read",
    href: "/article"
  },
  {
    id: 4,
    title: "Bollywood Box Office Collections: Weekly roundup of top performers",
    excerpt: "A comprehensive analysis of this week's box office collections and the films that dominated the charts.",
    image: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    category: "BOX OFFICE",
    date: "Feb 01, 2026",
    readTime: "6 min read",
    href: "/article"
  },
  {
    id: 5,
    title: "Upcoming Bollywood releases in March 2026: Complete list",
    excerpt: "Get ready for an exciting month of cinema with these highly anticipated Bollywood releases coming in March.",
    image: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    category: "ENTERTAINMENT",
    date: "Jan 31, 2026",
    readTime: "4 min read",
    href: "/article"
  },
  {
    id: 6,
    title: "Celebrity fashion trends: What's hot in 2026",
    excerpt: "From red carpet looks to street style, explore the fashion trends that are defining celebrity style this year.",
    image: "https://www.pinkvilla.com/images/2026-02/637379080_msg1.jpg",
    category: "FASHION",
    date: "Jan 30, 2026",
    readTime: "3 min read",
    href: "/article"
  }
]

export default function AuthorArticles({ slug }: { slug: string }) {
  return (
    <div className="max-w-[1200px] mx-auto px-[30px]">

      {/* Articles Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-2">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">Articles Written By Ayushi Agrawal</h2>
        <span className="text-xs sm:text-sm text-gray-600">24 articles</span>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {articles.map((article) => (
          <Link key={article.id} href={article.href} className="group">
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Article Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                  <span className="bg-[#e31837] text-white text-xs font-bold px-2 py-1 rounded">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-3 sm:p-4">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-[#e31837] transition-colors mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </article>
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
  )
}