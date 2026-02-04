import SectionHeader from "./SectionHeader"
import ArticleCard from "./ArticleCard"

const sportsArticles = [
  {
    title: "Virat Kohli's fitness secret revealed: Here's how he maintains his physique at 35",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    category: "SPORTS",
    timestamp: "1 hour ago"
  },
  {
    title: "MS Dhoni spotted playing tennis in Ranchi; Fans share pictures",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=300&fit=crop",
    category: "SPORTS",
    timestamp: "2 hours ago"
  },
  {
    title: "Paris Olympics 2024: Indian contingent's full schedule and medal hopes",
    image: "https://images.unsplash.com/photo-1569517282132-25d22f4573e6?w=400&h=300&fit=crop",
    category: "SPORTS",
    timestamp: "3 hours ago"
  }
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
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeader title="Sports Life" variant="red" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            <ArticleCard
              title={sportsArticles[0].title}
              image={sportsArticles[0].image}
              category={sportsArticles[0].category}
              timestamp={sportsArticles[0].timestamp}
              variant="featured"
            />
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              {sportsArticles.slice(1).map((article, index) => (
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
