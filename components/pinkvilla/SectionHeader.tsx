import Link from "next/link"

interface SectionHeaderProps {
  title: string
  showMore?: boolean
  moreLink?: string
  variant?: "default" | "yellow" | "red"
}

export default function SectionHeader({ 
  title, 
  showMore = true, 
  moreLink = "#",
  variant = "default"
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4 border-b-2 border-[#e31837] pb-2">
      <h2 className={`text-[18px] lg:text-[20px] font-bold ${
        variant === "yellow" ? "bg-[#ffde00] px-3 py-1" : 
        variant === "red" ? "text-[#e31837]" : 
        "text-[#1a1a1a]"
      }`}>
        {title}
      </h2>
      {showMore && (
        <Link 
          href={moreLink}
          className="text-[12px] text-[#666666] hover:text-[#e31837] transition-colors"
        >
          More →
        </Link>
      )}
    </div>
  )
}
