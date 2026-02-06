import Header from "@/components/pinkvilla/Header"
import Footer from "@/components/pinkvilla/Footer"
import VideoHero from "@/components/pinkvilla/VideoHero"
import VideoGrid from "@/components/pinkvilla/VideoGrid"

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />
      <main className="flex-1 min-w-0 max-w-[1200px] mx-auto px-2">
        <VideoHero />
        {/* 
         */}
      </main>
      <Footer />
    </div>
  )
}