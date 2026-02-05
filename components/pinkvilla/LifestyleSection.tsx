import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const trendingItems = [
  "Coldplay Concert",
  "Celebrity Fashion", 
  "Home Decor",
  "Travel Guide",
  "Beauty Tips"
]

const lifestyleArticles = [
  {
    title: "Inside Saumya Tandon's Mumbai home: European, pastel tones, lucky Dhurandhar corner and ...",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    isMain: true
  },
  {
    title: "Winter Pet Care Made Easy with Amazon Everyday Essentials",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=250&h=200&fit=crop",
    isMain: false
  },
  {
    title: "Inside Neil Nitin Mukesh's 2BHK Mumbai House: No paint, artistic and vaastu-perfect spa...",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250&h=200&fit=crop",
    isMain: false
  },
  {
    title: "Weekly Horoscope September 16-22: Sagittarius, Capricorn, Aquarius, and Pisces - Munish...",
    image: "https://picsum.photos/300/200",
    isMain: false
  }
]

const batchArticles = [
  // Section 1 (9 cards)
  {
    title: "10 Celebrity Fashion Trends That Defined 2024",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=200&h=150&fit=crop",
    author: "Fashion Desk",
    category: "FASHION"
  },
  {
    title: "Healthy Morning Routines of Bollywood Stars",
    image: "https://picsum.photos/id/1080/300/200",
    author: "Lifestyle Desk",
    category: "WELLNESS"
  },
  {
    title: "Best Travel Destinations for Winter Vacation",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=200&h=150&fit=crop",
    author: "Travel Desk",
    category: "TRAVEL"
  },
  {
    title: "Home Decor Ideas Inspired by Celebrity Homes",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=150&fit=crop",
    author: "Lifestyle Desk",
    category: "HOME"
  },
  {
    title: "Quick and Easy Recipes for Busy Weekdays",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=150&fit=crop",
    author: "Food Desk",
    category: "FOOD"
  },
  {
    title: "Sustainable Fashion: Eco-Friendly Style Tips",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=150&fit=crop",
    author: "Fashion Desk",
    category: "FASHION"
  },
  {
    title: "Mental Health: Self-Care Practices That Work",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=150&fit=crop",
    author: "Wellness Desk",
    category: "WELLNESS"
  },
  {
    title: "Budget-Friendly Interior Design Hacks",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=150&fit=crop",
    author: "Home Desk",
    category: "HOME"
  },
  {
    title: "Street Food Adventures Around the World",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200&h=150&fit=crop",
    author: "Food Desk",
    category: "FOOD"
  },
  // Section 2 (9 cards)
  {
    title: "Skincare Routines of Top Actresses Revealed",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&h=150&fit=crop",
    author: "Beauty Desk",
    category: "BEAUTY"
  },
  {
    title: "Fitness Trends That Are Taking Over 2024",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=150&fit=crop",
    author: "Fitness Desk",
    category: "FITNESS"
  },
  {
    title: "Romantic Date Ideas for Every Budget",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=200&h=150&fit=crop",
    author: "Relationship Desk",
    category: "LOVE"
  },
  {
    title: "Minimalist Living: Less is More Philosophy",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=150&fit=crop",
    author: "Lifestyle Desk",
    category: "LIFESTYLE"
  },
  {
    title: "Healthy Snacks for Movie Night at Home",
    image: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=200&h=150&fit=crop",
    author: "Food Desk",
    category: "FOOD"
  },
  {
    title: "Fashion Week Highlights: Best Looks",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=200&h=150&fit=crop",
    author: "Fashion Desk",
    category: "FASHION"
  },
  {
    title: "Work-Life Balance Tips from Successful Women",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=150&fit=crop",
    author: "Career Desk",
    category: "CAREER"
  },
  {
    title: "DIY Beauty Masks Using Kitchen Ingredients",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=200&h=150&fit=crop",
    author: "Beauty Desk",
    category: "BEAUTY"
  },
  {
    title: "Adventure Sports for Thrill Seekers",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=150&fit=crop",
    author: "Adventure Desk",
    category: "ADVENTURE"
  },
  // Section 3 (9 cards)
  {
    title: "Celebrity Wedding Decor Ideas to Steal",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=200&h=150&fit=crop",
    author: "Wedding Desk",
    category: "WEDDING"
  },
  {
    title: "Yoga Poses for Better Sleep Quality",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=150&fit=crop",
    author: "Wellness Desk",
    category: "WELLNESS"
  },
  {
    title: "Seasonal Wardrobe Essentials Guide",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=150&fit=crop",
    author: "Fashion Desk",
    category: "FASHION"
  },
  {
    title: "Plant-Based Diet Benefits and Recipes",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=150&fit=crop",
    author: "Health Desk",
    category: "HEALTH"
  },
  {
    title: "Solo Travel Safety Tips for Women",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=200&h=150&fit=crop",
    author: "Travel Desk",
    category: "TRAVEL"
  },
  {
    title: "Relationship Red Flags to Watch Out For",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=200&h=150&fit=crop",
    author: "Relationship Desk",
    category: "LOVE"
  },
  {
    title: "Home Office Setup for Maximum Productivity",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=150&fit=crop",
    author: "Career Desk",
    category: "CAREER"
  },
  {
    title: "Natural Hair Care Remedies That Work",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&h=150&fit=crop",
    author: "Beauty Desk",
    category: "BEAUTY"
  },
  {
    title: "Meditation Techniques for Stress Relief",
    image: "https://picsum.photos/id/1057/300/200 ",
    author: "Wellness Desk",
    category: "WELLNESS"
  },
  // Section 4 (9 cards)
  {
    title: "Celebrity Style Evolution Over the Years",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=200&h=150&fit=crop",
    author: "Fashion Desk",
    category: "FASHION"
  },
  {
    title: "Healthy Meal Prep Ideas for the Week",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=150&fit=crop",
    author: "Food Desk",
    category: "FOOD"
  },
  {
    title: "Digital Detox: Benefits and How to Start",
    image: "https://picsum.photos/id/1060/300/200",
    author: "Wellness Desk",
    category: "WELLNESS"
  },
  {
    title: "Affordable Luxury: High-End Look for Less",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=150&fit=crop",
    author: "Fashion Desk",
    category: "FASHION"
  },
  {
    title: "Weekend Getaway Destinations Near You",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=200&h=150&fit=crop",
    author: "Travel Desk",
    category: "TRAVEL"
  },
  {
    title: "Building Confidence: Self-Love Journey",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=150&fit=crop",
    author: "Lifestyle Desk",
    category: "LIFESTYLE"
  },
  {
    title: "Seasonal Skincare Routine Changes",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&h=150&fit=crop",
    author: "Beauty Desk",
    category: "BEAUTY"
  },
  {
    title: "Healthy Relationships: Communication Tips",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=200&h=150&fit=crop",
    author: "Relationship Desk",
    category: "LOVE"
  },
  {
    title: "Home Workout Equipment Worth Investing In",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=150&fit=crop",
    author: "Fitness Desk",
    category: "FITNESS"
  }
]

export default function LifestyleSection() {
  return (
    <section className="max-w-[1200px] mx-auto overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 sm:mb-6">
        <Link href="/" className="hover:text-gray-900">Home</Link>
        <span>/</span>
        <span className="text-gray-900">Lifestyle</span>
      </div>

      {/* Trending Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-4 overflow-x-scroll">
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide pb-2">
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase whitespace-nowrap flex-shrink-0">
            TRENDING
          </span>
          {trendingItems.map((item, index) => (
            <Link key={index} href="#" className="text-xs sm:text-sm text-gray-700 hover:text-red-600 border border-gray-300 px-2 sm:px-3 py-1 rounded whitespace-nowrap flex-shrink-0">
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Lifestyle Title */}
      <h1 className="text-2xl sm:text-[32px] font-bold mb-6 sm:mb-8">Lifestyle</h1>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Main Article */}
        <div className="lg:col-span-6">
          <Link href="#" className="block group">
            <div className="relative h-[250px] sm:h-[350px] lg:h-[400px] overflow-hidden rounded-lg">
              <Image
                src={lifestyleArticles[0].image}
                alt={lifestyleArticles[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-lg sm:text-xl font-bold leading-tight mt-3 sm:mt-4 group-hover:text-red-600 transition-colors">
              {lifestyleArticles[0].title}
            </h2>
          </Link>
        </div>

        {/* Side Articles */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {lifestyleArticles.slice(1).map((article, index) => (
            <Link key={index} href="#" className="block group">
              <div className="relative h-[150px] sm:h-[170px] lg:h-[190px] overflow-hidden rounded-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-semibold leading-tight mt-2 sm:mt-3 line-clamp-3 group-hover:text-red-600 transition-colors">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Advertisement after first section */}
      <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center mb-6 sm:mb-8">
        <div className="text-gray-500 text-sm font-medium">Advertisement</div>
        <div className="text-gray-400 text-xs mt-1">Sponsored Content</div>
      </div>

      {/* 36 Cards in 4 sections of 9 cards each */}
      {Array.from({ length: 4 }, (_, sectionIndex) => (
        <div key={sectionIndex}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {batchArticles.slice(sectionIndex * 9, (sectionIndex + 1) * 9).map((article, index) => (
              <Link key={index} href="#" className="group flex gap-3">
                <div className="relative w-[100px] h-[70px] sm:w-[120px] sm:h-[80px] flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[#e31837] text-[10px] font-semibold uppercase tracking-wide">
                    {article.category}
                  </span>
                  <h3 className="text-[#1a1a1a] text-xs sm:text-sm font-semibold leading-tight line-clamp-3 transition-colors mt-1">
                    {article.title}
                  </h3>
                  <span className="text-[#999999] text-[10px] mt-1 block">BY {article.author}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Advertisement after every 9 cards */}
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center mb-6 sm:mb-8">
            <div className="text-gray-500 text-sm font-medium">Advertisement</div>
            <div className="text-gray-400 text-xs mt-1">Sponsored Content</div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-1 sm:gap-2 mb-6 sm:mb-8">
        <button className="px-2 sm:px-3 py-2 border border-gray-300 rounded hover:bg-gray-100">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="px-2 sm:px-3 py-2 bg-red-600 text-white rounded font-medium text-sm">1</button>
        <button className="px-2 sm:px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm">2</button>
        <button className="px-2 sm:px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm">3</button>
        <button className="px-2 sm:px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm">4</button>
        <button className="px-2 sm:px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm">5</button>
        <span className="px-1 sm:px-2 text-gray-500 text-sm">...</span>
        <button className="px-2 sm:px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm">10</button>
        <button className="px-2 sm:px-3 py-2 border border-gray-300 rounded hover:bg-gray-100">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}