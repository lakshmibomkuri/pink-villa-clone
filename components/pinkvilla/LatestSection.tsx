import Image from "next/image"
import Link from "next/link"

interface LatestItem {
  title: string
  author: string
  image: string
}

const latestItems: LatestItem[] = [
  {
    title: "Naslen and Mamitha Baiju starrer Premalu 2 shelved?",
    author: "GOUTHAM S",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    title: "5 Tamil and Telugu Films to Watch in Theaters This Week",
    author: "GOUTHAM S",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
  },
  {
    title: "Fact Check: Did Taylor Swift secretly arrive at Grammys?",
    author: "AYUSHI AGRAWAL",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    title: "Is BTS filming ARIRANG comeback video in Lisbon?",
    author: "AYUSHI AGRAWAL",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
  },
  {
    title: "R Madhavan breaks silence on acting hiatus",
    author: "GOUTHAM S",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
  },
  {
    title: "5 Tamil and Telugu Films to Watch in Theaters This Week",
    author: "GOUTHAM S",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
  },
  {
    title: "Fact Check: Did Taylor Swift secretly arrive at Grammys?",
    author: "AYUSHI AGRAWAL",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
]

const rowTwoArticles = [
  {
    title: "Anaganaga Oka Raju Worldwide Closing Box Office Collections",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b"
  },
  {
    title: "Imran Khan reveals unhealthy relationship with Avantika Malik",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    title: "D55: Sai Pallavi reunites with Dhanush after 8 years",
    image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66"
  },
  {
    title: "Kalki 2898 AD sequel: Deepika Padukone out, Sai Pallavi in",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  }
]

const rowThreeArticles = [
  {
    title: "5 Malayalam Films to Watch on OTT This Week",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
  },
  {
    title: "Hollywood OTT Shows and Films Out This Week",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9"
  },
  {
    title: "Lewis Hamilton and Kim Kardashian's Relationship Timeline",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353"
  }
]

const LatestSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-8 space-y-4 sm:space-y-6">

          {/* ROW 1 – TOP STORY */}
          <Link
            href="#"
            className="block relative group h-[300px] sm:h-[350px] lg:h-[420px] rounded-md overflow-hidden shadow-md"
            aria-label="Top Story: Yami Gautam set to make a cameo"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-0.5">
              {/* Left image */}
              <div className="relative md:col-span-8 h-48 md:h-full">
                <Image
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                  alt="Top story main"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Right image */}
              <div className="relative md:col-span-4 h-32 md:h-full">
                <Image
                  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
                  alt="Top story secondary"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Overlay title + author spanning full card */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-5">
              <span className="bg-red-600 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-sm inline-block mb-2 select-none">
                TOP STORIES
              </span>
              <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-bold leading-snug">
                EXCLUSIVE: Yami Gautam set to make a cameo in Aditya Dhar's upcoming film
              </h2>
              <p className="text-gray-300 text-xs mt-1 select-none">
                BY KHUSHBOO RASTA
              </p>
            </div>
          </Link>

          {/* ROW 2 – 4 UNIQUE CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            {rowTwoArticles.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-32 sm:h-36 lg:h-40 object-cover rounded-md"
                />
                <h4 className="mt-2 text-xs sm:text-sm font-semibold leading-snug">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>

          {/* ROW 3 – 3 UNIQUE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
            {rowThreeArticles.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={260}
                  className="w-full h-40 sm:h-44 lg:h-48 object-cover rounded-md"
                />
                <h4 className="mt-2 text-xs sm:text-sm font-semibold leading-snug">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

      {/* RIGHT SIDE – LATEST */}
<aside className="lg:col-span-4">
  <div className="border border-gray-200 bg-white rounded-md overflow-hidden">
    <h3 className="px-3 sm:px-4 py-3 border-b text-base sm:text-lg font-bold">
      Latest
    </h3>

    <div className="divide-y divide-gray-200">
      {latestItems.map((item, index) => (
        <div key={index} className="flex gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4">
          <span className="text-red-600 font-bold select-none text-sm">
            {index + 1}
          </span>

          <Image
            src={item.image}
            alt={item.title}
            width={64}
            height={48}
            className="w-12 h-9 sm:w-16 sm:h-12 object-cover rounded-sm flex-shrink-0"
          />

          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm font-semibold leading-snug">
              {item.title}
            </p>
            <p className="text-xs text-gray-500 mt-1 select-none">
              BY {item.author}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="p-3 sm:p-4">
      <button className="w-full border border-gray-300 py-2 text-xs sm:text-sm font-semibold hover:bg-gray-100 rounded-md">
        EXPLORE MORE →
      </button>
    </div>
  </div>
</aside>



      </div>
    </section>
  )
}

export default LatestSection