import Header from "@/components/pinkvilla/Header"
import Footer from "@/components/pinkvilla/Footer"
import AuthorProfile from "@/components/pinkvilla/AuthorProfile"
import AuthorArticles from "@/components/pinkvilla/AuthorArticles"

export default function AuthorPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />
      <main className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-6">
        <AuthorProfile />
        <AuthorArticles />
      </main>
      <Footer />
    </div>
  )
}