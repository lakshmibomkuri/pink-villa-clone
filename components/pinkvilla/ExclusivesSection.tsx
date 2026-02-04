import Image from "next/image"
import Link from "next/link"
import SectionHeader from "./SectionHeader"

const exclusives = [
  {
    title: "EXCLUSIVE: Salman Khan reveals plans for Dabangg 4; Says it will be biggest in the franchise",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop",
    excerpt: "In an exclusive interview with Pinkvilla, Salman Khan opens up about his upcoming projects and personal life..."
  },
  {
    title: "EXCLUSIVE: Deepika Padukone on embracing motherhood and life post Pathaan success",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
    excerpt: "The actress talks about her journey and what's next..."
  },
  {
    title: "EXCLUSIVE: Shah Rukh Khan planning international film after Dunki; Details revealed",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    excerpt: "King Khan has big plans for his next project..."
  }
]

export default function ExclusivesSection() {
  return (
    <section className="py-6 bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeader title="Exclusives" variant="yellow" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exclusives.map((item, index) => (
            <Link href="#" key={index} className="group bg-[#ffffff] shadow-sm overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 bg-[#ffde00] text-[#1a1a1a] text-[10px] font-bold px-2 py-0.5">
                  EXCLUSIVE
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[#1a1a1a] text-[14px] lg:text-[15px] font-bold leading-tight line-clamp-2 group-hover:text-[#e31837] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#666666] text-[12px] mt-2 line-clamp-2">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
