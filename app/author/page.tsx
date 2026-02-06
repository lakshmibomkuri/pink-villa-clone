"use client"
 
import Image from "next/image"
import Link from "next/link"
import { Twitter, Linkedin } from "lucide-react"
import AuthorArticles from "@/components/pinkvilla/AuthorArticles"
import Header from "@/components/pinkvilla/Header"
import Footer from "@/components/pinkvilla/Footer"
const authorData: { [key: string]: any } = {
  "ayushi-agrawal": {
    name: "Ayushi Agrawal",
    title: "Journalist",
    expertise: "Entertainment",
    education: "BE, Bharati Vidyapeeth's College of Engineering",
    bio: "Ayushi Agrawal is a Sub-Editor at Pinkvilla with 3.5 years of experience in Korean entertainment news coverage and over 5 years in total as a writer. After completing her Engineering in Instrumentation, Ayushi pursued her long-running passion for journalism and has achieved her dream of writing for what she loves. With hundreds of news articles, feature-based content, and exclusives in her kitty, Ayushi maintains an expertise in the field that cannot be easily replicated. In her free time, she is a K-drama binger watcher and enjoys all genres of Korean music.",
    image: "/placeholder-user.jpg"
  },
  "goutham-s": {
    name: "GOUTHAM S",
    title: "Senior Entertainment Reporter",
    expertise: "Box Office & Cinema",
    education: "MA, Journalism and Mass Communication",
    bio: "Goutham S is a senior entertainment reporter with extensive experience in covering box office collections, movie reviews, and celebrity news. He has been tracking the entertainment industry for over 6 years with deep insights into film business and audience trends.",
    image: "/placeholder-user.jpg"
  }
}
 
export default function AuthorProfile({ slug }: { slug: string }) {
  const author = authorData[slug] || authorData["ayushi-agrawal"]
 
  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Author Profile Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-8 md:mb-12">
          {/* Author Image */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <div className="relative w-full md:w-64 h-80 overflow-hidden rounded-lg">
              <Image
                src="https://www.pinkvilla.com/images/2026-02/2138235306_dhurandhar-4.jpg"
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            {/* Social Links below image */}
            <div className="flex justify-center gap-4 mt-4">
              <Link href="#" className="p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link href="#" className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </div>
          </div>
   
          {/* Author Info */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
                {author.name} <span className="text-[#e31837] text-xl md:text-2xl lg:text-3xl font-normal block md:inline">| {author.title}</span>
              </h1>
            </div>
           
            <div className="bg-yellow-50 p-4 md:p-6 rounded-lg">
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <p className="text-base md:text-lg lg:text-xl">
                  <span className="font-bold text-black">Expertise:</span> <span className="text-gray-700">{author.expertise}</span>
                </p>
                <p className="text-base md:text-lg lg:text-xl">
                  <span className="font-bold text-black">Education:</span> <span className="text-gray-700">{author.education.includes('Bharati') ? 'BE, ' : ''}</span>
                  {author.education.includes('Bharati') ? (
                    <Link href="#" className="text-blue-600 hover:underline">
                      Bharati Vidyapeeth's College of Engineering
                    </Link>
                  ) : (
                    <span className="text-gray-700">{author.education}</span>
                  )}
                </p>
              </div>
             
              <div className="prose prose-base md:prose-lg lg:prose-xl max-w-none">
                <p className="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl">
                  {author.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
   
        {/* Editorial Policy Section */}
        <div className="border-b border-gray-300 pb-8 md:pb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6">OUR EDITORIAL POLICY</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl">
            Our Editorial Team is committed to providing unbiased, evidence-based, expert-reviewed, and up-to-date content to our readers. We make sure that in the dynamic world of the internet, our content stands out as the most informative, reliable, and reader-centric of all regardless of the topic be it health, fashion, beauty, entertainment, or wellness. Check out our <Link href="#" className="text-blue-600 hover:underline">Editorial Policy</Link> to know more.
          </p>
        </div>
        <AuthorArticles slug={""}/>
      </div>
      <Footer/>
    </div>
    
  )
}
 