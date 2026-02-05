import Image from "next/image"
import Link from "next/link"

interface ArticleCardProps {
  title: string
  image: string
  category?: string
  timestamp?: string
  variant?: "featured" | "horizontal" | "small" | "grid" | "video"
  showCategory?: boolean
  href?: string
}

export default function ArticleCard({
  title,
  image,
  category,
  timestamp,
  variant = "small",
  showCategory = true,
  href = "#"
}: ArticleCardProps) {
  if (variant === "featured") {
    return (
      <Link href={href} className="group block relative">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            {showCategory && category && (
              <span className="inline-block bg-[#ffde00] text-[#1a1a1a] text-[11px] font-bold px-2 py-0.5 mb-2">
                {category}
              </span>
            )}
            <h3 className="text-[#ffffff] text-[18px] lg:text-[22px] font-bold leading-tight line-clamp-3">
              {title}
            </h3>
            {timestamp && (
              <span className="text-[#cccccc] text-[11px] mt-2 block">{timestamp}</span>
            )}
          </div>
        </div>
      </Link>
    )
  }

  if (variant === "horizontal") {
    return (
      <Link href={href} className="group flex gap-3">
        <div className="flex-1 min-w-0">
          {showCategory && category && (
            <span className="text-[#e31837] text-[10px] font-semibold uppercase tracking-wide">
              {category}
            </span>
          )}
          <h3 className="text-[#1a1a1a] text-[13px] lg:text-[14px] font-semibold leading-tight line-clamp-3 transition-colors">
            {title}
          </h3>
          {timestamp && (
            <span className="text-[#999999] text-[10px] mt-1 block">{timestamp}</span>
          )}
        </div>
        <div className="relative w-[120px] h-[80px] lg:w-[140px] lg:h-[90px] flex-shrink-0 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300"
          />
        </div>
      </Link>
    )
  }

  if (variant === "video") {
    return (
      <Link href={href} className="group block relative">
        <div className="relative aspect-video overflow-hidden rounded">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-[#e31837] rounded-full flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5 text-[#ffffff] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h3 className="text-[#ffffff] text-[13px] font-semibold leading-tight line-clamp-2 group-hover:text-[#e31837] transition-colors">
            {title}
          </h3>
        </div>
      </Link>
    )
  }

  if (variant === "grid") {
    return (
      <Link href={href} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-2">
          {showCategory && category && (
            <span className="text-[#e31837] text-[10px] font-semibold uppercase tracking-wide">
              {category}
            </span>
          )}
          <h3 className="text-[#1a1a1a] text-[13px] lg:text-[14px] font-semibold leading-tight line-clamp-2 group-hover:text-[#e31837] transition-colors mt-1">
            {title}
          </h3>
          {timestamp && (
            <span className="text-[#999999] text-[10px] mt-1 block">{timestamp}</span>
          )}
        </div>
      </Link>
    )
  }

  // Default small variant
  return (
    <Link href={href} className="group flex gap-3">
      <div className="relative w-[100px] h-[70px] flex-shrink-0 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-[#1a1a1a] text-[12px] lg:text-[13px] font-medium leading-tight line-clamp-3 group-hover:text-[#e31837] transition-colors">
          {title}
        </h3>
        {timestamp && (
          <span className="text-[#999999] text-[10px] mt-1 block">{timestamp}</span>
        )}
      </div>
    </Link>
  )
}
