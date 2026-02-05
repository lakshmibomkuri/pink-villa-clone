import Header from "@/components/pinkvilla/Header"
import Footer from "@/components/pinkvilla/Footer"
import LifestyleSection from "@/components/pinkvilla/LifestyleSection"

export default function LifestylePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex flex-1 w-full mx-auto gap-2 mt-4 px-0">
        {/* Left Advertisement */}
        <aside className="hidden xl:block w-32 sticky top-20 h-fit">
          <div className="p-4 text-center text-gray-500 text-xs rounded">Advertisement</div>
        </aside>

        {/* Main Content */}
        <section className="flex-1 min-w-0 max-w-[1200px] mx-auto px-4">
          <LifestyleSection />
        </section>

        {/* Right Advertisement */}
        <aside className="hidden xl:block w-32 sticky top-20 h-fit">
          <div className="p-4 text-center text-gray-500 text-xs rounded">Advertisement</div>
        </aside>
      </main>
      <Footer />
    </div>
  )
}