import SectionHeader from "./SectionHeader"
import ArticleCard from "./ArticleCard"

const tvArticles = [
  {
    title: "Anupamaa actress Rupali Ganguly's emotional post on completing 1000 episodes goes viral",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop",
    category: "TV",
    timestamp: "1 hour ago"
  },
  {
    title: "Bigg Boss OTT 3: Contestants list, premiere date and all you need to know",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop",
    category: "TV",
    timestamp: "2 hours ago"
  },
  {
    title: "Taarak Mehta Ka Ooltah Chashmah: New Dayaben's entry creates buzz",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
    category: "TV",
    timestamp: "3 hours ago"
  }
]

const sideArticles = [
  {
    title: "Yeh Rishta Kya Kehlata Hai's Harshad Chopda reveals why he left the show",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=200&h=150&fit=crop",
    timestamp: "1 hour ago"
  },
  {
    title: "Khatron Ke Khiladi 14: Rohit Shetty teases toughest season yet",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=150&fit=crop",
    timestamp: "2 hours ago"
  },
  {
    title: "The Kapil Sharma Show to return with new season; Comedian confirms",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=200&h=150&fit=crop",
    timestamp: "3 hours ago"
  }
]

export default function TVSection() {
  return (
    <section className="py-6 bg-[#ffffff]">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeader title="TV" variant="red" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            <ArticleCard
              title={tvArticles[0].title}
              image={tvArticles[0].image}
              category={tvArticles[0].category}
              timestamp={tvArticles[0].timestamp}
              variant="featured"
            />
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              {tvArticles.slice(1).map((article, index) => (
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
