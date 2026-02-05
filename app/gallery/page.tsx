import Header from "@/components/pinkvilla/Header"
import Footer from "@/components/pinkvilla/Footer"
import GalleryHero from "@/components/pinkvilla/GalleryHero"
import GalleryGrid from "@/components/pinkvilla/GalleryGrid"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />
      <main>
        <GalleryHero />
        <GalleryGrid />
      </main>
      <Footer />
    </div>
  )
}