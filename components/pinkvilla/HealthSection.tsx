import SectionHeader from "./SectionHeader"
import ArticleCard from "./ArticleCard"

const healthArticles = [
  {
    title: "Nutritionist reveals 5 foods that boost immunity during monsoon; Add to your diet now",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop",
    category: "HEALTH",
    timestamp: "1 hour ago"
  },
  {
    title: "Yoga poses for better sleep: Expert shares 10-minute bedtime routine",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    category: "FITNESS",
    timestamp: "2 hours ago"
  },
  {
    title: "Mental health tips from celebrities: How stars deal with anxiety and stress",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
    category: "HEALTH",
    timestamp: "3 hours ago"
  }
]

const sideArticles = [
  {
    title: "Malaika Arora's fitness secrets at 50; Her workout routine revealed",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=150&fit=crop",
    timestamp: "1 hour ago"
  },
  {
    title: "Ayurvedic remedies for common monsoon ailments; Doctor explains",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=200&h=150&fit=crop",
    timestamp: "2 hours ago"
  },
  {
    title: "Weight loss transformation: How this celebrity lost 20 kgs in 6 months",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200&h=150&fit=crop",
    timestamp: "3 hours ago"
  },
  {
    title: "Best protein sources for vegetarians; Expert nutritionist shares list",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=150&fit=crop",
    timestamp: "4 hours ago"
  }
]

export default function HealthSection() {
  return (
    <section className="py-6 bg-[#ffffff]">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeader title="Health" variant="red" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            <ArticleCard
              title={healthArticles[0].title}
              image={healthArticles[0].image}
              category={healthArticles[0].category}
              timestamp={healthArticles[0].timestamp}
              variant="featured"
            />
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              {healthArticles.slice(1).map((article, index) => (
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
