import Header from "@/components/pinkvilla/Header"
import Footer from "@/components/pinkvilla/Footer"
import GalleryHero from "@/components/pinkvilla/GalleryHero"
import GalleryGrid from "@/components/pinkvilla/GalleryGrid"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col">
      <Header />
      <main className="flex flex-1 max-w-[1200px] mx-auto gap-2 mt-4 w-full">
        {/* Main Content */}
        <section className="flex-1 min-w-0">
          <GalleryHero />
          <GalleryGrid />
        </section>
      </main>
      <Footer />
    </div>
  )
}