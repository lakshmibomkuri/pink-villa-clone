import SectionHeader from "./SectionHeader"
import ArticleCard from "./ArticleCard"

const fashionArticles = [
  {
    title: "Kareena Kapoor Khan's airport look costs more than a luxury car; See price breakdown",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop",
    category: "FASHION",
    timestamp: "1 hour ago"
  },
  {
    title: "Alia Bhatt's casual chic style decoded: How to recreate her looks on budget",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop",
    category: "FASHION",
    timestamp: "2 hours ago"
  },
  {
    title: "Ananya Panday stuns in ethnic wear; Her lehenga details revealed",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
    category: "FASHION",
    timestamp: "3 hours ago"
  }
]

const sideArticles = [
  {
    title: "Priyanka Chopra's Paris Fashion Week outfits ranked; Which one is your favorite?",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=150&fit=crop",
    timestamp: "1 hour ago"
  },
  {
    title: "5 fashion trends from Cannes 2024 you can try this summer",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=150&fit=crop",
    timestamp: "2 hours ago"
  },
  {
    title: "Sonam Kapoor shares her fashion philosophy; Says comfort is key",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=150&fit=crop",
    timestamp: "3 hours ago"
  },
  {
    title: "Janhvi Kapoor's gym wear brand collaboration announced; Details inside",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=150&fit=crop",
    timestamp: "4 hours ago"
  }
]

export default function FashionSection() {
  return (
    <section className="py-6 bg-[#ffffff]">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeader title="Fashion" variant="red" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            <ArticleCard
              title={fashionArticles[0].title}
              image={fashionArticles[0].image}
              category={fashionArticles[0].category}
              timestamp={fashionArticles[0].timestamp}
              variant="featured"
            />
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              {fashionArticles.slice(1).map((article, index) => (
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
