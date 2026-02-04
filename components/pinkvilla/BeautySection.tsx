import SectionHeader from "./SectionHeader"
import ArticleCard from "./ArticleCard"

const beautyArticles = [
  {
    title: "Katrina Kaif reveals her skincare secrets for flawless skin at 40; Beauty routine exposed",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
    category: "BEAUTY",
    timestamp: "1 hour ago"
  },
  {
    title: "5 monsoon skincare tips every Indian woman should follow; Dermatologist approved",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop",
    category: "BEAUTY",
    timestamp: "2 hours ago"
  },
  {
    title: "Deepika Padukone's go-to lipstick shades that you can buy under Rs 500",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop",
    category: "BEAUTY",
    timestamp: "3 hours ago"
  }
]

const sideArticles = [
  {
    title: "Alia Bhatt's makeup artist shares tips for achieving her dewy look",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=150&fit=crop",
    timestamp: "1 hour ago"
  },
  {
    title: "Best sunscreens for Indian skin types recommended by experts",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=150&fit=crop",
    timestamp: "2 hours ago"
  },
  {
    title: "Hair care mistakes you're making in monsoon; Expert tips to fix them",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=200&h=150&fit=crop",
    timestamp: "3 hours ago"
  },
  {
    title: "Kiara Advani's bridal skincare routine revealed; Pre-wedding tips",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=150&fit=crop",
    timestamp: "4 hours ago"
  }
]

export default function BeautySection() {
  return (
    <section className="py-6 bg-[#f8f8f8]">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeader title="Beauty" variant="red" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            <ArticleCard
              title={beautyArticles[0].title}
              image={beautyArticles[0].image}
              category={beautyArticles[0].category}
              timestamp={beautyArticles[0].timestamp}
              variant="featured"
            />
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              {beautyArticles.slice(1).map((article, index) => (
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
