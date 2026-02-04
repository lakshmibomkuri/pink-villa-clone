import SectionHeader from "./SectionHeader"
import ArticleCard from "./ArticleCard"

const hollywoodArticles = [
  {
    title: "Taylor Swift and Travis Kelce spotted together at NYC restaurant; Fans go crazy over PDA",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
    category: "HOLLYWOOD",
    timestamp: "1 hour ago"
  },
  {
    title: "Tom Cruise shares BTS from Mission Impossible 8; Performs death-defying stunts",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=300&fit=crop",
    category: "HOLLYWOOD",
    timestamp: "2 hours ago"
  },
  {
    title: "Zendaya and Tom Holland's wedding rumors spark social media frenzy",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
    category: "HOLLYWOOD",
    timestamp: "3 hours ago"
  }
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
    <section className="py-6 bg-[#f8f8f8]">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeader title="Hollywood" variant="red" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            <ArticleCard
              title={hollywoodArticles[0].title}
              image={hollywoodArticles[0].image}
              category={hollywoodArticles[0].category}
              timestamp={hollywoodArticles[0].timestamp}
              variant="featured"
            />
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              {hollywoodArticles.slice(1).map((article, index) => (
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
