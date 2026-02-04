import Image from "next/image"

const bollywoodArticles = [
  {
    title: "Ikka: Sunny Deol and Akshaye Khanna reunite on screen after 29 years for an intense couple of scenes",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    category: "BOLLYWOOD",
    timestamp: "BY LOVELEEN KAUR"
  },
  {
    title: "7 best Shah Rukh Khan’s action thrillers to watch on OTT: Don, Jawan, Fan to Raees",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&h=300&fit=crop",
    category: "BOLLYWOOD",
    timestamp: "BY LOVELEEN KAUR"
  },
  {
    title: "5 Ranveer Singh movies to watch on OTT ahead of Dhurandhar 2: Gunday, Lootera to Ladies...",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop",
    category: "BOLLYWOOD",
    timestamp: "BY LOVELEEN KAUR"
  }
]

const sideArticles = [
  {
    title: "7 best Shah Rukh Khan’s action thrillers to watch on OTT: Don, Jawan, Fan to Raees",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=200&h=150&fit=crop",
    timestamp: "BY LOVELEEN KAUR"
  },
  {
    title: "5 Ranveer Singh movies to watch on OTT ahead of Dhurandhar 2: Gunday, Lootera to Ladies...",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=150&fit=crop",
    timestamp: "BY LOVELEEN KAUR"
  },
  {
    title: "2 Hindi OTT Releases This Week: Kapil Sharma's Kis Kisko Pyaar Karoon 2 and Anurag Kash...",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=200&h=150&fit=crop",
    timestamp: "BY NETRA BRID"
  },
  {
    title: "Dhurandhar: The Revenge: Ranveer Singh announces teaser release date and time with an i...",
    image: "https://images.unsplash.com/photo-1506086679525-16284bc1e62a?w=200&h=150&fit=crop",
    timestamp: "BY LOVELEEN KAUR"
  }
]

function SectionHeader({ title, variant = "default" }: { title: string; variant?: "red" | "default" }) {
  return (
    <h2
      className={`text-2xl font-bold mb-6 ${
        variant === "red" ? "text-red-600" : "text-gray-900"
      }`}
    >
      {title}
    </h2>
  )
}

function ArticleCard({
  title,
  image,
  category,
  timestamp,
  variant,
  showCategory = true,
}: {
  title: string
  image: string
  category?: string
  timestamp: string
  variant: "featured" | "grid" | "horizontal"
  showCategory?: boolean
}) {
  if (variant === "featured") {
    return (
      <article>
        <div className="grid grid-cols-3 gap-2 rounded-md overflow-hidden shadow-md">
          <div className="relative col-span-2 h-[220px]">
            <Image src={image} alt={title} fill className="object-cover" priority />
          </div>
          <div className="relative col-span-1 h-[220px]">
            {/* Secondary image for right side of featured card */}
            <Image
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop"
              alt={title + " secondary"}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h3 className="mt-3 text-xl font-semibold leading-snug">{title}</h3>
        {showCategory && category && <p className="text-xs text-gray-400 mt-1 select-none">{category}</p>}
        <p className="text-xs text-gray-500 mt-1 select-none">{timestamp}</p>
      </article>
    )
  }

  if (variant === "grid") {
    return (
      <article className="rounded-md overflow-hidden shadow-sm">
        <div className="relative h-40">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <h4 className="mt-2 text-sm font-semibold leading-snug">{title}</h4>
        {showCategory && category && <p className="text-xs text-gray-400 mt-1 select-none">{category}</p>}
        <p className="text-xs text-gray-500 mt-1 select-none">{timestamp}</p>
      </article>
    )
  }

  if (variant === "horizontal") {
    return (
      <article className="flex items-center gap-4">
        <div className="flex-1">
          <h5 className="text-sm font-semibold leading-snug">{title}</h5>
          <p className="text-xs text-gray-500 mt-1 select-none">{timestamp}</p>
        </div>
        <div className="relative w-[120px] h-[80px] rounded-md overflow-hidden flex-shrink-0">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </article>
    )
  }

  return null
}

export default function BollywoodSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <SectionHeader title="Bollywood" variant="red" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-4">
            <ArticleCard
              title={bollywoodArticles[0].title}
              image={bollywoodArticles[0].image}
              category={bollywoodArticles[0].category}
              timestamp={bollywoodArticles[0].timestamp}
              variant="featured"
            />

            <div className="grid grid-cols-2 gap-4">
              {bollywoodArticles.slice(1).map((article, index) => (
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

        <div className="mt-6 text-center">
          <button className="px-6 py-2 text-sm font-semibold border border-gray-300 rounded hover:bg-gray-100">
            EXPLORE MORE →
          </button>
        </div>
      </div>
    </section>
  )
}
