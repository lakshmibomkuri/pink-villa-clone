import SectionHeader from "./SectionHeader"
import ArticleCard from "./ArticleCard"

const videos = [
  {
    title: "EXCLUSIVE: Hrithik Roshan opens up about his fitness journey and upcoming projects",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
  },
  {
    title: "Behind the scenes of Kalki 2898 AD: Making of the biggest Indian film",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=300&fit=crop",
  },
  {
    title: "Alia Bhatt talks about balancing motherhood and career in new interview",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=300&fit=crop",
  },
  {
    title: "Prabhas reveals secrets about Salaar Part 2 in exclusive chat",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&h=300&fit=crop",
  }
]

export default function ExclusiveVideosSection() {
  return (
    <section className="py-6 bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between mb-4 border-b-2 border-[#e31837] pb-2">
          <h2 className="text-[18px] lg:text-[20px] font-bold text-[#ffffff] bg-[#e31837] px-3 py-1">
            Exclusive Videos
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((video, index) => (
            <ArticleCard
              key={index}
              title={video.title}
              image={video.image}
              variant="video"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
