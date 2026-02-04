"use client"

import Link from "next/link"
import { Search, Menu, X, ChevronDown, Facebook, Instagram, Youtube } from "lucide-react"
import { useState } from "react"

const navItems = [
  { label: "Latest", href: "#" },
  { 
    label: "Box Office", 
    href: "#",
    submenu: [
      {
        label: "India",
        items: ["Top Opening Day", "Top Opening Weekend", "Top Opening Week", "Top Lifetime"]
      },
      {
        label: "Worldwide", 
        items: ["Top Opening Day", "Top Opening Weekend", "Top Opening Week", "Top Lifetime"]
      },
      {
        label: "The Crore Club",
        items: ["100 Crore Club", "200 Crore Club", "300 Crore Club", "400 Crore Club", "500 Crore Club", "600 Crore Club"]
      },
      {
        label: "Top Grossers",
        items: ["2024", "2023", "2022"]
      }
    ]
  },
  { 
    label: "Entertainment", 
    href: "#",
    submenu: [
      { label: "South", items: [] },
      { label: "Hollywood", items: [] },
      { label: "TV", items: [] },
      { label: "Anime", items: [] },
      { label: "Movie Review", items: [] },
      { label: "Exclusive", items: [] },
      { label: "Explore All", items: [] }
    ]
  },
  { label: "Cinema", href: "#" },
  { 
    label: "Korean", 
    href: "#",
    submenu: [
      { label: "Music", items: [] },
      { label: "TV Serials", items: [] },
      { label: "Updates", items: [] },
      { label: "Explore All", items: [] }
    ]
  },
  { 
    label: "Lifestyle", 
    href: "#",
    submenu: [
      { label: "Love & Relationship", items: [] },
      { label: "Food & Travel", items: [] },
      { label: "Explore All", items: [] }
    ]
  },
  { label: "Sports Life", href: "#" },
  { 
    label: "Beauty", 
    href: "#",
    submenu: [
      { label: "Makeup", items: [] },
      { label: "Explore All", items: [] }
    ]
  },
  { 
    label: "Fashion", 
    href: "#",
    submenu: [
      { label: "Celebrity Style", items: [] },
      { label: "Explore All", items: [] }
    ]
  }
]



const footerLinks = [
  "Privacy Policy",
  "Terms of Use", 
  "About Us",
  "Contact Us",
  "Image Usage Policy",
  "Editorial Guidelines",
  "Cookie Policy",
  "Press Room",
  "Awards/Badges"
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [expandedSubItems, setExpandedSubItems] = useState<string[]>([])

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }

  const toggleSubExpanded = (label: string) => {
    setExpandedSubItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]">
      {/* Top bar */}
      <div className="border-b border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-between h-[50px]">
            {/* Logo - always on left */}
            <Link href="/" className="flex items-center">
              <svg viewBox="0 0 150 30" className="h-6 w-auto">
                <text x="0" y="24" fill="#e31837" fontWeight="bold" fontSize="24" fontFamily="Arial, sans-serif">
                  PINKVILLA
                </text>
              </svg>
            </Link>

            {/* Navigation links with dropdowns - responsive for tablets */}
            <nav className="hidden sm:flex items-center gap-2 md:gap-3 lg:gap-5 ml-2 md:ml-4 lg:ml-8 flex-wrap">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className="text-[10px] md:text-[11px] lg:text-[12px] text-[#333333] hover:text-[#e31837] transition-colors flex items-center gap-1 whitespace-nowrap"
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="h-3 w-3" />}
                  </Link>
                  {item.submenu && (
                    <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-200 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.submenu.map((subItem) => (
                        <div key={subItem.label} className="relative group/sub">
                          <Link
                            href="#"
                            className="block px-4 py-2 text-[11px] text-[#666666] hover:text-[#e31837] hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                          >
                            {subItem.label}
                          </Link>
                          {subItem.items && subItem.items.length > 0 && (
                            <div className="absolute top-0 left-full bg-white shadow-lg border border-gray-200 min-w-[180px] opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                              {subItem.items.map((nestedItem) => (
                                <Link
                                  key={nestedItem}
                                  href="#"
                                  className="block px-4 py-2 text-[10px] text-[#888888] hover:text-[#e31837] hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                                >
                                  {nestedItem}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Hamburger menu - always on right */}
            <button 
              className="p-1" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation bar */}
      <div className="sm:hidden border-b border-[#e5e5e5] bg-[#ffffff]">
        <div className="px-2">
          <nav className="flex items-start gap-3 h-[40px] overflow-x-auto scrollbar-hide pb-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] font-medium text-[#333333] hover:text-[#e31837] transition-colors whitespace-nowrap flex-shrink-0 pt-3"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>



      {/* Hamburger menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50" 
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="absolute top-0 left-0 w-80 h-full bg-white shadow-xl overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-bold text-[#e31837]">PINKVILLA</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="p-4">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-[#f0f0f0] last:border-b-0">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleExpanded(item.label)}
                        className="w-full flex items-center justify-between py-3 text-[14px] font-medium text-[#333333] hover:text-[#e31837]"
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${
                          expandedItems.includes(item.label) ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {expandedItems.includes(item.label) && (
                        <div className="pb-3 pl-4">
                          {item.submenu.map((subItem) => (
                            <div key={subItem.label} className="mb-2">
                              {subItem.items && subItem.items.length > 0 ? (
                                <>
                                  <button
                                    onClick={() => toggleSubExpanded(subItem.label)}
                                    className="w-full flex items-center justify-between py-1 text-[13px] text-[#666666] hover:text-[#e31837]"
                                  >
                                    {subItem.label}
                                    <ChevronDown className={`h-3 w-3 transition-transform ${
                                      expandedSubItems.includes(subItem.label) ? 'rotate-180' : ''
                                    }`} />
                                  </button>
                                  {expandedSubItems.includes(subItem.label) && (
                                    <div className="ml-4 mt-1">
                                      {subItem.items.map((nestedItem) => (
                                        <Link
                                          key={nestedItem}
                                          href="#"
                                          className="block py-1 text-[12px] text-[#888888] hover:text-[#e31837]"
                                        >
                                          {nestedItem}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <Link
                                  href="#"
                                  className="block py-1 text-[13px] text-[#666666] hover:text-[#e31837]"
                                >
                                  {subItem.label}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3 text-[14px] font-medium text-[#333333] hover:text-[#e31837]"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-6 py-6 border-t border-[#f0f0f0] mx-4">
              <Link href="#" className="text-[#333333] hover:text-[#e31837]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#333333] hover:text-[#e31837]">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#333333] hover:text-[#e31837]">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link href="#" className="text-[#333333] hover:text-[#e31837]">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>

            {/* Footer Links */}
            <div className="border-t border-[#f0f0f0] pt-4 mx-4">
              {footerLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="block py-2 text-[12px] text-[#666666] hover:text-[#e31837]"
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* WhatsApp Channel */}
            <div className="mt-4 pt-4 border-t border-[#f0f0f0] mx-4 mb-4">
              <Link
                href="#"
                className="flex items-center gap-2 text-[12px] text-[#25D366] hover:text-[#128C7E]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                JOIN OUR WHATSAPP CHANNEL
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
