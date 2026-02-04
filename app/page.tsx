import Header from "@/components/pinkvilla/Header"
import LatestSection from "@/components/pinkvilla/LatestSection"
import BollywoodSection from "@/components/pinkvilla/BollywoodSection"
import SouthSection from "@/components/pinkvilla/SouthSection"
import BoxOfficeSection from "@/components/pinkvilla/BoxOfficeSection"
import ExclusiveVideosSection from "@/components/pinkvilla/ExclusiveVideosSection"
import MovieReviewsSection from "@/components/pinkvilla/MovieReviewsSection"
import HollywoodSection from "@/components/pinkvilla/HollywoodSection"
import SportsLifeSection from "@/components/pinkvilla/SportsLifeSection"
import ExclusivesSection from "@/components/pinkvilla/ExclusivesSection"
import TVSection from "@/components/pinkvilla/TVSection"
import KoreanSection from "@/components/pinkvilla/KoreanSection"
import FashionSection from "@/components/pinkvilla/FashionSection"
import BeautySection from "@/components/pinkvilla/BeautySection"
import HealthSection from "@/components/pinkvilla/HealthSection"
import Footer from "@/components/pinkvilla/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />
      <main>
        <LatestSection />
        <BollywoodSection />
        <SouthSection />
        <BoxOfficeSection />
        <ExclusiveVideosSection />
        <MovieReviewsSection />
        <HollywoodSection />
        <SportsLifeSection />
        
        <ExclusivesSection />
        <TVSection />
        <KoreanSection />
        <FashionSection />
        <BeautySection />
        <HealthSection />
      </main>
      <Footer />
    </div>
  )
}
