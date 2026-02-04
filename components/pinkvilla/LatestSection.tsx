import SectionHeader from "./SectionHeader"
import ArticleCard from "./ArticleCard"

const latestArticles = [
  {
    title: "Cannes Film Festival 2024: Aishwarya Rai Bachchan to walk the red carpet in stylish look; Check out the stunning photos",
    image: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?w=800&h=500&fit=crop",
    category: "BOLLYWOOD",
    timestamp: "2 hours ago"
  },
  {
    title: "Shah Rukh Khan spotted at Mumbai airport; fans go crazy as he waves at them",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=300&fit=crop",
    category: "BOLLYWOOD",
    timestamp: "3 hours ago"
  },
  {
    title: "Priyanka Chopra shares adorable pictures with daughter Malti Marie from their vacation",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
    category: "HOLLYWOOD",
    timestamp: "4 hours ago"
  },
  {
    title: "Deepika Padukone stuns in black saree at recent award ceremony; See photos",
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=400&h=300&fit=crop",
    category: "FASHION",
    timestamp: "5 hours ago"
  }
]

const sideArticles = [
  {
    title: "Alia Bhatt and Ranbir Kapoor's daughter Raha spotted at playdate; See cute pics",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=200&h=150&fit=crop",
    timestamp: "1 hour ago"
  },
  {
    title: "Kareena Kapoor Khan shares her skincare routine for glowing skin at 40",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=150&fit=crop",
    timestamp: "2 hours ago"
  },
  {
    title: "Katrina Kaif and Vicky Kaushal's romantic getaway pictures go viral",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=200&h=150&fit=crop",
    timestamp: "3 hours ago"
  },
  {
    title: "Ranveer Singh announces new action film; shooting to begin next month",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=150&fit=crop",
    timestamp: "4 hours ago"
  },
  {
    title: "Janhvi Kapoor's gym look is giving us major fitness goals; Check out",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=150&fit=crop",
    timestamp: "5 hours ago"
  }
]

export default function LatestSection() {
  return (
    <section className="py-6">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeader title="Latest" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main featured article */}
          <div className="lg:col-span-2">
            <ArticleCard
              title={latestArticles[0].title}
              image={latestArticles[0].image}
              category={latestArticles[0].category}
              timestamp={latestArticles[0].timestamp}
              variant="featured"
            />
            
            {/* Grid of smaller articles below */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {latestArticles.slice(1).map((article, index) => (
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
          
          {/* Side articles */}
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
