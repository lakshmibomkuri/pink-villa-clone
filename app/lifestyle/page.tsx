import Header from "@/components/pinkvilla/Header"
import Footer from "@/components/pinkvilla/Footer"
import LifestyleSection from "@/components/pinkvilla/LifestyleSection"

export default function LifestylePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex flex-1 w-full mx-auto gap-2 mt-4 px-0">
        {/* Main Content */}
        <section className="flex-1 min-w-0 max-w-[1200px] mx-auto lg:px-6 px-2">
          <LifestyleSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}