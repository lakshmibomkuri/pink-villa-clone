import Image from 'next/image'

const youMayLikeItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=60',
    title: 'The cost of hearing aids in Belanagor Township might surprise you',
    sponsor: 'Hearing Aids'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=60',
    title: 'Mountain Gear for Extreme Conditions',
    sponsor: 'Gear Junkie'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=60',
    title: 'India: Why Is Everyone Excited over This Rs.1999 Smartwatch',
    sponsor: 'Smart Watch'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=60',
    title: 'Unbeatable Jackets for Harshest Weather [Get Now]',
    sponsor: 'Gear Junkie'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&w=600&q=60',
    title: 'Telangana: Build the tallest religious monument',
    sponsor: 'Sponsored by Taboola'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=60',
    title: "Here's how to re-clean your gas burner in 1 minute!",
    sponsor: 'The Pocket Finance'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=60',
    title: 'Start Forex Trading. Get a 100% Welcome Bonus',
    sponsor: 'Quotex'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=600&q=60',
    title: 'Mother saw squirrels in her window, but when she took a closer look at them she called the police!',
    sponsor: 'Cars & Yachts'
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=60',
    title: "Man finds a strange-looking snake. When the vet arrives, he says 'You shouldn't be looking at this'",
    sponsor: 'Sponsored by Taboola'
  }
];


export default function YouMayLikeSection() {
  return (
    <section className="bg-white py-4 sm:py-6 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">You May Like</h2>
          <span className="text-xs sm:text-sm text-gray-500">Sponsored Links by Taboola</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {youMayLikeItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] mb-2 sm:mb-3 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-900 leading-tight mb-1 sm:mb-2 line-clamp-3 group-hover:text-pink-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500">{item.sponsor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}