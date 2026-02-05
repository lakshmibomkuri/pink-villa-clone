import Image from "next/image"
import Link from "next/link"
import ExploreMore from "./ExploreMore"

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
  },
  {
    title: "Deadpool & Wolverine Box Office Day 10: Marvel film races past Rs 800 crore globally",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=300&fit=crop",
    timestamp: "5 hours ago"
  },
  {
    title: "Indian 2 Box Office Collection Day 7: Kamal Haasan starrer struggles on weekdays",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop",
    timestamp: "6 hours ago"
  },
  {
    title: "Top 10 Highest Grossing Bollywood Films of 2024 so far",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop",
    timestamp: "7 hours ago"
  },
  {
    title: "Border 2 Box Office Collection Day 3: Sunny Deol film sees massive jump",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&h=300&fit=crop",
    timestamp: "8 hours ago"
  },
  {
    title: "Mankatha Re-Release Box Office: Ajith Kumar film records huge opening",
    image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&h=300&fit=crop",
    timestamp: "9 hours ago"
  },
  {
    title: "Mardaani 3 Box Office Collection Day 2: Rani Mukerji film holds strong",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop",
    timestamp: "10 hours ago"
  },
  {
    title: "Zootopia 2 Box Office Worldwide: Disney sequel opens to record numbers",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=300&fit=crop",
    timestamp: "11 hours ago"
  },
  {
    title: "Varun Dhawan Films at Box Office: Border 2 eyes Rs 300 crore mark",
    image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=400&h=300&fit=crop",
    timestamp: "12 hours ago"
  }
]

export default function BoxOfficeSection() {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-[1200px] mx-auto">

        {/* Title + underline */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-black">
            Box Office Collection
          </h2>
        </div>

        {/* EXACT GRID: 3 columns, multiple rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {boxOfficeArticles.map((article, index) => (
            <Link key={index} href="#" className="group flex gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-[#1a1a1a] text-[13px] lg:text-[14px] font-semibold leading-tight line-clamp-3 transition-colors">
                  {article.title}
                </h3>
                <span className="text-[#999999] text-[10px] mt-1 block">{article.timestamp}</span>
              </div>
              <div className="relative w-[120px] h-[80px] lg:w-[140px] lg:h-[90px] flex-shrink-0 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
        <ExploreMore />
      </div>
    </section>
  )
}



