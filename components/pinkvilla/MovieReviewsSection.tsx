// import Image from "next/image"
// import Link from "next/link"
// import ExploreMore from "./ExploreMore"

// const featuredReview = {
//   title: "Deadpool 3 Movie Review: Ryan Reynolds and Hugh Jackman deliver the most entertaining Marvel film in years",
//   image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&h=400&fit=crop",
//   rating: "4/5",
//   excerpt: "The much-awaited Marvel film brings back the beloved characters with a bang. Read our detailed review to know if it lives up to the hype..."
// }

// const reviews = [
//   {
//     title: "Kalki 2898 AD Review: Prabhas delivers a visual spectacle",
//     image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=200&h=150&fit=crop",
//     rating: "4.5/5"
//   },
//   {
//     title: "Bad Newz Review: Vicky Kaushal shines in this comedy",
//     image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=200&h=150&fit=crop",
//     rating: "3.5/5"
//   },
//   {
//     title: "Indian 2 Review: Kamal Haasan returns but film disappoints",
//     image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=150&fit=crop",
//     rating: "2.5/5"
//   },
//   {
//     title: "Sarfira Review: Akshay Kumar soars high in this inspiring tale",
//     image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=200&h=150&fit=crop",
//     rating: "3/5"
//   }
// ]

// export default function MovieReviewsSection() {
//   return (
//     <section className="py-6 bg-[#ffffff]">
//       <div className="max-w-[1200px] mx-auto px-4">
//         <h2 className="text-2xl font-bold mb-6 text-black">Movie Reviews</h2>
        
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Featured review */}
//           <div className="lg:col-span-2">
//             <Link href="#" className="group block">
//               <div className="relative aspect-[16/10] overflow-hidden">
//                 <Image
//                   src={featuredReview.image}
//                   alt={featuredReview.title}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//                 <div className="absolute top-3 left-3 bg-[#e31837] text-[#ffffff] text-[12px] font-bold px-2 py-1 flex items-center gap-1">
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                   {featuredReview.rating}
//                 </div>
//               </div>
//               <div className="mt-3">
//                 <h3 className="text-[#1a1a1a] text-[18px] lg:text-[20px] font-bold leading-tight group-hover:text-[#e31837] transition-colors">
//                   {featuredReview.title}
//                 </h3>
//                 <p className="text-[#666666] text-[13px] mt-2 line-clamp-2">
//                   {featuredReview.excerpt}
//                 </p>
//               </div>
//             </Link>
//           </div>
          
//           {/* Review list */}
//           <div className="space-y-4">
//             {reviews.map((review, index) => (
//               <Link href="#" key={index} className="group flex gap-3">
//                 <div className="relative w-[100px] h-[70px] flex-shrink-0 overflow-hidden">
//                   <Image
//                     src={review.image}
//                     alt={review.title}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                   <div className="absolute bottom-1 left-1 bg-[#e31837] text-[#ffffff] text-[9px] font-bold px-1 py-0.5">
//                     {review.rating}
//                   </div>
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <h3 className="text-[#1a1a1a] text-[12px] lg:text-[13px] font-medium leading-tight line-clamp-3 group-hover:text-[#e31837] transition-colors">
//                     {review.title}
//                   </h3>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//         <ExploreMore />
//       </div>
//     </section>
//   )
// }


import Image from "next/image"
import Link from "next/link"
import ExploreMore from "./ExploreMore"

const featuredReview = {
  title:
    "Mardaani 3 Movie Review: Rani Mukerji as Shivani Shivaji Roy is unshakeable; climax is ...",
  image:
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=900&h=600&fit=crop",
  author: "Gayatri Nirmal",
}

const reviews = [
  {
    title:
      "Border 2 Movie Review: Sunny Deol, Varun Dhawan, Diljit Dosanjh, Ahan Shetty’s war saga...",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=200&h=200&fit=crop",
    author: "Gayatri Nirmal",
  },
  {
    title:
      "Mercy Review: Chris Pratt’s AI Defense Falters Fast, Sci-Fi Thriller is Ambitious But H...",
    image:
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=200&h=200&fit=crop",
    author: "Ayushi Agrawal",
  },
  {
    title:
      "Happy Patel Khatarnak Jasoos Movie Review: Aamir Khan and Vir Das’ film is all about ‘R...’",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=200&h=200&fit=crop",
    author: "Gayatri Nirmal",
  },
  {
    title:
      "28 Years Later: The Bone Temple Review – Ralph Fiennes’ Rage is Part Crazy, Part Amusin...",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=200&fit=crop",
    author: "Ayushi Agrawal",
  },
]

export default function MovieReviewsSection() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[28px] font-bold mb-6 text-black">
          Movie Reviews
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured (Left) */}
          <div className="lg:col-span-2 border border-[#e5e5e5]">
            <Link href="#" className="block border-[10px] border-[#F3F000] border-l-0 border-t-0">
            
              <div className="relative aspect-[16/9]">
                <Image
                  src={featuredReview.image}
                  alt={featuredReview.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <span className="inline-block bg-[#e31837] text-white text-xs font-bold px-2 py-1 mb-2">
                  1
                </span>

                <h3 className="text-[22px] font-bold leading-tight text-black">
                  {featuredReview.title}
                </h3>

                <p className="mt-2 text-xs text-[#666] uppercase">
                  BY {featuredReview.author}
                </p>
              </div>
            </Link>
          </div>

          {/* List (Right) */}
          <div className="border divide-y border-[10px] border-[#F3F000] border-l-0 border-t-0">
            {reviews.map((item, index) => (
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
                <div className="flex-1">
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
