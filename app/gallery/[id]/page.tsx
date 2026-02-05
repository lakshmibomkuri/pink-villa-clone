import Header from "@/components/pinkvilla/Header"
import Footer from "@/components/pinkvilla/Footer"
import GalleryDetailHero from "@/components/pinkvilla/GalleryDetailHero"
import GalleryDetailContent from "@/components/pinkvilla/GalleryDetailContent"

export default async function GalleryDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params
  
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />
      <main>
        <GalleryDetailHero id={id} />
        <GalleryDetailContent id={id} />
      </main>
      <Footer />
    </div>
  )
}