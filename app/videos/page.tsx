import Header from "@/components/pinkvilla/Header"
import Footer from "@/components/pinkvilla/Footer"
import VideoHero from "@/components/pinkvilla/VideoHero"
import VideoGrid from "@/components/pinkvilla/VideoGrid"

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />
      <main>
        <VideoHero />
        {/* 
         */}
      </main>
      <Footer />
    </div>
  )
}