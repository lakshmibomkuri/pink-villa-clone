import Image from "next/image"
import Link from "next/link"
import ExploreMore from "./ExploreMore"

const featuredExclusive = {
  title:
    "EXCLUSIVE: Salman Khan reveals plans for Dabangg 4; Says it will be biggest in the franchise",
  image:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&h=600&fit=crop",
  author: "Pinkvilla Desk",
}

const exclusives = [
  {
    title:
      "EXCLUSIVE: Deepika Padukone on embracing motherhood and life post Pathaan success",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    author: "Ayushi Agrawal",
  },
  {
    title:
      "EXCLUSIVE: Shah Rukh Khan planning international film after Dunki; Details revealed",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    author: "Gayatri Nirmal",
  },
  {
    title:
      "EXCLUSIVE: Ranbir Kapoor opens up about Ramayana prep and physical transformation",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    author: "Pinkvilla Desk",
  },
  {
    title:
      "EXCLUSIVE: Alia Bhatt on balancing Hollywood and Bollywood projects",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop",
    author: "Ayushi Agrawal",
  },
]

export default function ExclusivesSection() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-[28px] font-bold mb-6 text-black">
          Exclusives
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Exclusive */}
          <div className="lg:col-span-2 border border-[#e5e5e5]">
            <Link
              href="#"
              className="block border-[10px] border-[#F3F000] border-l-0 border-t-0"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={featuredExclusive.image}
                  alt={featuredExclusive.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#e31837] text-white text-xs font-bold px-2 py-1">
                  EXCLUSIVE
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-[22px] font-bold leading-tight text-black">
                  {featuredExclusive.title}
                </h3>

                <p className="mt-2 text-xs text-[#666] uppercase">
                  BY {featuredExclusive.author}
                </p>
              </div>
            </Link>
          </div>

          {/* Exclusive List */}
          <div className="border divide-y border-[10px] border-[#F3F000] border-l-0 border-t-0">
            {exclusives.map((item, index) => (
              <Link
                href="#"
                key={index}
                className="flex gap-3 p-3 hover:bg-[#fafafa]"
              >
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="bg-[#e31837] text-white text-sm font-bold w-6 h-6 flex items-center justify-center">
                    {index + 2}
                  </span>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-[14px] font-semibold leading-snug text-black line-clamp-3">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[11px] text-[#666] uppercase">
                    BY {item.author}
                  </p>
                </div>

                {/* Thumbnail */}
                <div className="relative w-[60px] h-[60px] flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <ExploreMore />
      </div>
    </section>
  )
}
