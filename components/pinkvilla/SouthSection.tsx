import SectionHeader from "./SectionHeader"
import ArticleCard from "./ArticleCard"

const southArticles = [
  {
    title: "Prabhas starrer Kalki 2898 AD becomes highest grossing Indian film; Breaks all records worldwide",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop",
    category: "SOUTH",
    timestamp: "1 hour ago"
  },
  {
    title: "Allu Arjun's Pushpa 2 teaser creates history with record-breaking views in 24 hours",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop",
    category: "SOUTH",
    timestamp: "2 hours ago"
  },
  {
    title: "Vijay's upcoming film GOAT first look revealed; fans celebrate on social media",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop",
    category: "SOUTH",
    timestamp: "3 hours ago"
  }
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
  {
    title: "Nayanthara and Vignesh Shivan share family pictures from vacation",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=150&fit=crop",
    timestamp: "4 hours ago"
  }
]

export default function SouthSection() {
  return (
    <section className="py-6 bg-[#f8f8f8]">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeader title="South" variant="red" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            <ArticleCard
              title={southArticles[0].title}
              image={southArticles[0].image}
              category={southArticles[0].category}
              timestamp={southArticles[0].timestamp}
              variant="featured"
            />
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              {southArticles.slice(1).map((article, index) => (
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
