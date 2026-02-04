import SectionHeader from "./SectionHeader"
import ArticleCard from "./ArticleCard"

const koreanArticles = [
  {
    title: "BTS' Jungkook breaks Spotify records with new solo album; Army celebrates worldwide",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    category: "K-POP",
    timestamp: "1 hour ago"
  },
  {
    title: "Squid Game Season 2 release date confirmed; What to expect from the new season",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=300&fit=crop",
    category: "K-DRAMA",
    timestamp: "2 hours ago"
  },
  {
    title: "BLACKPINK's Lisa makes history at Paris Fashion Week; Stunning looks revealed",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=300&fit=crop",
    category: "K-POP",
    timestamp: "3 hours ago"
  }
]

const sideArticles = [
  {
    title: "Park Seo Joon and Han So Hee's new drama creates buzz; Fans eagerly waiting",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&h=150&fit=crop",
    timestamp: "1 hour ago"
  },
  {
    title: "BTS Jin's military discharge date revealed; Fans plan welcome celebration",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&h=150&fit=crop",
    timestamp: "2 hours ago"
  },
  {
    title: "Korean actor Song Joong Ki shares pictures with wife and son from vacation",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=200&h=150&fit=crop",
    timestamp: "3 hours ago"
  }
]

export default function KoreanSection() {
  return (
    <section className="py-6 bg-[#f8f8f8]">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeader title="Korean" variant="red" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            <ArticleCard
              title={koreanArticles[0].title}
              image={koreanArticles[0].image}
              category={koreanArticles[0].category}
              timestamp={koreanArticles[0].timestamp}
              variant="featured"
            />
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              {koreanArticles.slice(1).map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  image={article.image}
                  category={article.category}
                  timestamp={article.timestamp}
                  variant="grid"
                />
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-4">
            {sideArticles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                image={article.image}
                timestamp={article.timestamp}
                variant="horizontal"
                showCategory={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
