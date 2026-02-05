import Header from "@/components/pinkvilla/Header"
import Footer from "@/components/pinkvilla/Footer"
import AuthorProfile from "@/components/pinkvilla/AuthorProfile"
import AuthorArticles from "@/components/pinkvilla/AuthorArticles"

export default async function AuthorPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />
      <main className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-6">
        <AuthorProfile slug={slug} />
        <AuthorArticles slug={slug} />
      </main>
      <Footer />
    </div>
  )
}