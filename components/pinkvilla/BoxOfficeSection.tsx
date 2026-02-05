import SectionHeader from "./SectionHeader"
import ArticleCard from "./ArticleCard"

const boxOfficeArticles = [
  {
    title: "Kalki 2898 AD Box Office Collection Day 15: Prabhas starrer crosses Rs 1000 crore worldwide",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop",
    timestamp: "1 hour ago"
  },
  {
    title: "Pushpa 2 Box Office Prediction: Will Allu Arjun's film break Kalki records?",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop",
    timestamp: "2 hours ago"
  },
  {
    title: "Bad Newz Box Office Collection Day 5: Vicky Kaushal film shows steady growth",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=300&fit=crop",
    timestamp: "3 hours ago"
  },
  {
    title: "Auron Mein Kahan Dum Tha Box Office Day 1: Ajay Devgn film opens to slow start",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=300&fit=crop",
    timestamp: "4 hours ago"
  }
]

const sideArticles = [
  {
    title: "Deadpool & Wolverine Box Office: Ryan Reynolds and Hugh Jackman create history",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=200&h=150&fit=crop",
    timestamp: "1 hour ago"
  },
  {
    title: "Indian 2 Box Office Day 3: Kamal Haasan film sees major drop",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=150&fit=crop",
    timestamp: "2 hours ago"
  },
  {
    title: "Top 10 Highest Grossing Bollywood Films of 2024 so far",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=200&h=150&fit=crop",
    timestamp: "5 hours ago"
  }
]

export default function BoxOfficeSection() {
  return (
    <section className="py-6 bg-[#ffffff]">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeader title="Box Office Collection" variant="yellow" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {boxOfficeArticles.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  image={article.image}
                  timestamp={article.timestamp}
                  variant="grid"
                  showCategory={false}
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
