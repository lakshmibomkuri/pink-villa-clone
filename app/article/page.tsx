// import ArticleHeader from "@/components/pinkvilla/ArticleHeader"
import Footer from "@/components/pinkvilla/Footer"
import ArticleContent from "@/components/pinkvilla/ArticleContent"
import ArticleSidebar from "@/components/pinkvilla/ArticleSidebar"
import Header from "@/components/pinkvilla/Header"


export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />
      <main className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ArticleContent />
          </div>
          <div className="lg:col-span-1">
            <ArticleSidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 