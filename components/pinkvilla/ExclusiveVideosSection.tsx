import Image from "next/image"
import Link from "next/link"
import ExploreMore from "./ExploreMore"

const videos = [
  {
    title: "Abhishek Bajaj & Awez Darbar on Heartbreak, Bigg Boss Bond & Dating Secrets | Love Aaj Kal EP3",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=350&fit=crop",
  },
  {
    title: "Amaal Mallik EXPOSES Bollywood Politics, Heartbreaks, Sonu Nigam, Depression & Bigg Boss",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=350&fit=crop",
  },
  {
    title: "Stop Calling Us 'Female Police': Rani Mukerji & ACP Gadekar’s Bold Message | EXCLUSIVE",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=350&fit=crop",
  },
  {
    title: "Nia Sharma & Uorfi Javed SPILL SHOCKING Dating Truths 🔥 Toxic Exes & Red Flags",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=600&h=350&fit=crop",
  },
  {
    title: "We Hijacked The MasterChef Set! THIS Happened with Chefs Kunal Kapur, Vikas Khanna & Ranveer Brar 😲",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=350&fit=crop",
  },
  {
    title: "Divya Dutta’s SHOCKING Truths: Intimate Scenes, Marriage, Irrfan Khan & Breakups",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=600&h=350&fit=crop",
  },
  {
    title: "Inside Farah Khan’s Palatial ‘Mahal’ Set | The 50 EXCLUSIVE House Tour | JioHotstar Reality Show",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&h=350&fit=crop",
  },
  {
    title: "Karan Kundrra & Sunny Leone EXPOSE Love Truths 💔 Red Flags, Trolls & Tejasswi Prakash",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=350&fit=crop",
  }
]


export default function ExclusiveVideosSection() {
  return (
    <section className="bg-white mt-5">
      <div className="max-w-[1200px] mx-auto">
        <Link href="/videos">
          <h2 className="text-2xl font-bold mb-6 text-black hover:text-red-600 cursor-pointer">Exclusive Videos</h2>
        </Link>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((video, index) => (
            <Link key={index} href="/videos" className="group block relative">
              <div className="relative aspect-video overflow-hidden rounded">
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center border-rounded border-white">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-[#ffffff] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="text-[#1a1a1a] text-[13px] font-semibold leading-tight line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <ExploreMore />
      </div>
    </section>
  )
}
