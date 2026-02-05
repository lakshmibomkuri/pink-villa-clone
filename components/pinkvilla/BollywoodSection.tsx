import SectionHeader from "./SectionHeader"
import ArticleCard from "./ArticleCard"

const bollywoodArticles = [
  {
    title: "Hrithik Roshan and Deepika Padukone to star together in upcoming action thriller; Details inside",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    category: "BOLLYWOOD",
    timestamp: "1 hour ago"
  },
  {
    title: "Salman Khan announces Eid 2025 release date for his upcoming film",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop",
    category: "BOLLYWOOD",
    timestamp: "2 hours ago"
  },
  {
    title: "Akshay Kumar wraps shooting for his comedy film; shares BTS pictures",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
    category: "BOLLYWOOD",
    timestamp: "3 hours ago"
  }
]

const sideArticles = [
  {
    title: "Ajay Devgn and Tabu to reunite for Drishyam 3; Director confirms",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=200&h=150&fit=crop",
    timestamp: "30 min ago"
  },
  {
    title: "Varun Dhawan and Sara Ali Khan's upcoming romantic comedy title revealed",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=150&fit=crop",
    timestamp: "1 hour ago"
  },
  {
    title: "Shahid Kapoor shares workout video; fans love his dedication",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=150&fit=crop",
    timestamp: "2 hours ago"
  },
  {
    title: "Shraddha Kapoor's look from Stree 2 released; Check out her fierce avatar",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=150&fit=crop",
    timestamp: "3 hours ago"
  }
]

export default function BollywoodSection() {
  return (
    <section className="py-6 bg-[#ffffff]">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeader title="Bollywood" variant="red" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            <ArticleCard
              title={bollywoodArticles[0].title}
              image={bollywoodArticles[0].image}
              category={bollywoodArticles[0].category}
              timestamp={bollywoodArticles[0].timestamp}
              variant="featured"
              href="/article"
            />
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              {bollywoodArticles.slice(1).map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  image={article.image}
                  category={article.category}
                  timestamp={article.timestamp}
                  variant="grid"
                  href="/article"
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
                href="/article"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
