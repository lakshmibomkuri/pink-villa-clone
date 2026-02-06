"use client"

import Image from "next/image"
import Link from "next/link"
import { Share2 } from "lucide-react"

export default function ArticleContent() {
  return (
    <article className="space-y-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="#" className="hover:text-blue-600">Entertainment</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Box Office</span>
      </nav>

      {/* Article Title */}
      <h1 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
        Dhurandhar on OTT: Ranveer Singh starrer breaks another record ahead of second part's release
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg text-gray-700 leading-relaxed">
        Ranveer Singh starrer Dhurandhar had released on OTT recently and has dominated itself at the top spot of global non-English films.
      </p>

      {/* Author and Meta Info */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-4 gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
          <span>By <Link href="/author" className="text-gray-800 hover:text-[#e31837] hover:underline">GOUTHAM S</Link></span>
          <span className="text-xs sm:text-sm">Published on Feb 04, 2026 | 01:28 PM IST | ⏱ 31K</span>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="p-2 bg-blue-600 text-white rounded">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0 0 2h1v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9h1a1 1 0 0 0 0-2zM10 6a2 2 0 0 1 4 0v1h-4V6zm6 13a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9h8v10z"/>
            </svg>
          </button>
          <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="bg-green-500 text-white px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-medium">
            📱 JOIN US
          </button>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src="https://www.pinkvilla.com/images/2026-02/2138235306_dhurandhar-4.jpg"
          alt="Dhurandhar on OTT (PC: Ranveer Singh, Y)"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Image Caption */}
      <p className="text-sm text-gray-500 italic">
        Dhurandhar on OTT (PC: Ranveer Singh, Y)
      </p>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          After a massive run on the big screen, Ranveer Singh starrer Dhurandhar debuted on Netflix and began streaming on January 30, 2026. Within a week of its digital debut, the film broke multiple records and made a massive impact on viewership.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          As per the data listed by Netflix, <Link href="#" className="text-blue-600 hover:underline">Dhurandhar</Link> now dominates the number one spot on the streaming platform's global Top 10 non-English films list. According to data for the period between January 26 and February 1, 2026, Dhurandhar, in its debut week, garnered 7,600,000 views on Netflix, amounting to 21,600,000 viewing hours.
        </p>


        {/* Advertisement */}
        <div className="bg-gray-100 h-32 flex items-center justify-center text-gray-500 my-8">
          Advertisement
        </div>

        {/* Additional content with more images */}
        <p className="text-gray-700 leading-relaxed mb-6">
          The film's success can be attributed to its compelling storyline and exceptional performances by the cast. Industry analysts predict that this trend will continue as more viewers discover the film on the platform.
        </p>
         <p className="text-gray-700 leading-relaxed mb-6">
          With such impressive numbers, the film has set a new benchmark for regional cinema on global streaming platforms. The success story continues to inspire filmmakers across the industry.
        </p>
         {/* Top 10 Table */}
        <div className="my-8">
          <h3 className="text-xl font-bold text-center mb-6">
            Top 10 highest-viewed Indian films on Netflix during debut week
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 mx-auto max-w-2xl">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Sl No.</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Movie</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Views</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center">1.</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Dhurandhar</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">7,600,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center">2.</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Animal</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">6,200,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center">3.</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Fighter</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">5,900,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center">4.</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Pushpa 2</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">5,800,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center">5.</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Raid 2</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">5,600,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center">6.</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Crew</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">5,400,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center">7.</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Idli Kadai</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">5,200,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center">8.</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Sikandar, Lucky Baskhar</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">5,100,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center">9.</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Do Patti</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">5,000,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center">10.</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Dunki</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">4,900,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* More about Dhurandhar Section */}
        <div className="my-8">
          <h3 className="text-xl font-bold mb-6">More about Dhurandhar</h3>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Dhurandhar is a spy action thriller written, co-produced, and directed by Aditya Dhar. The film focuses on the story of Jaskirat Singh Rangi, a spy recruited by IB chief Ajay Sanyal for Project Dhurandhar.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            The undercover mission sees Jaskirat infiltrate Pakistan's Karachi underworld to dismantle terror networks. He becomes a gangster himself to gain trust and gather intelligence, culminating in a major revenge operation against an ISI mastermind. How he manages to complete the mission, along with the exploration of his origins, is expected to be revealed in the sequel.
          </p>
          
          {/* Advertisement */}
          <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-500 my-8">
            Advertisement
          </div>
        </div>

        {/* Cast and Sequel Information */}
        <div className="my-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            Apart from <Link href="#" className="text-blue-600 hover:underline">Ranveer Singh</Link>, the film also stars Akshaye Khanna, Sanjay Dutt, R. Madhavan, Arjun Rampal, and Sara Arjun in pivotal roles.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            The sequel, titled <Link href="#" className="text-blue-600 hover:underline">Dhurandhar: The Revenge</Link>, is slated for release on March 19, 2026, and will be released not only in Hindi but also in Tamil, Telugu, Kannada, and Malayalam.
          </p>
          
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold">ALSO READ:</span> <Link href="#" className="text-blue-600 hover:underline">Mardaani 3 Box Office Collections Day 5: Rani Mukerji's cop drama registers GOOD jump on discounted Tuesday, approaches Rs 25 crore mark</Link>
            </p>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            <span className="font-bold">CREDITS</span>: Netflix
          </p>
          
          {/* Advertisement */}
          <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-500 my-8">
            Advertisement
          </div>
        </div>

        {/* Sponsored Links Section */}
        <div className="my-8">
          <div className="flex justify-end mb-4">
            <span className="text-sm text-gray-600">Sponsored Links by Taboola</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-40 bg-gradient-to-br from-orange-200 to-orange-400"></div>
              <div className="p-4">
                <h4 className="font-bold text-sm mb-2">Lodha Camelot New Launch In Kharadi</h4>
                <p className="text-xs text-gray-600 mb-3">Discover Lodha Camelot in Kharadi — a new launch offering spacious 3 & 4...</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Lodha Group</span>
                  <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded">Get Offer</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-40 bg-gradient-to-br from-amber-200 to-amber-400"></div>
              <div className="p-4">
                <h4 className="font-bold text-sm mb-2">Birla's Tallest Address Comes to Pune</h4>
                <p className="text-xs text-gray-600 mb-3">Birla Punya Phase 2 arrives at Bund Garden with luxury 2, 3 & 4 BHK...</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Birla Estate</span>
                  <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded">Get Offer</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-40 bg-gradient-to-br from-red-200 to-red-400"></div>
              <div className="p-4">
                <h4 className="font-bold text-sm mb-2">Start Forex Trading. Get a 100% Welcome Bonus</h4>
                <p className="text-xs text-gray-600 mb-3">Find out why you should join iFOREX, a regulated broker with over 25 years o...</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">iFOREX</span>
                  <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded">Sign Up</button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-40 bg-gradient-to-br from-blue-200 to-blue-400"></div>
              <div className="p-4">
                <h4 className="font-bold text-sm mb-2">Mumbai – This AI-Powered hearing aid is a hit in India. Know why.</h4>
                <p className="text-xs text-gray-600 mb-3">Recommended by audiologist</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Hearing Aids</span>
                  <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded">Learn More</button>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-40 bg-gradient-to-br from-green-200 to-green-400"></div>
              <div className="p-4">
                <h4 className="font-bold text-sm mb-2">Living in Mumbai? Don't Buy Hearing Aids Before Reading This</h4>
                <p className="text-xs text-gray-600 mb-3">Recommended by audiologist</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Hearing Aids</span>
                  <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded">Learn More</button>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-40 bg-gradient-to-br from-yellow-200 to-yellow-400"></div>
              <div className="p-4">
                <h4 className="font-bold text-sm mb-2">India: Why Is Everyone Excited over This Rs.1999 Smartwatch</h4>
                <p className="text-xs text-gray-600 mb-3">See why this new smartwatch is gaining popularity in India</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">AdamFit</span>
                  <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </article>
  )
}