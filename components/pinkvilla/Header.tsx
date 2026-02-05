"use client"

import Image from "next/image"
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
    megaMenu: {
      categories: [
        { label: "South", href: "#" },
        { label: "Hollywood", href: "#" },
        { label: "TV", href: "#" },
        { label: "Explore All", href: "#" }
      ],
      articles: [
        {
          title: "Latest South Indian Movie Reviews and Box Office Updates",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=100&fit=crop"
        },
        {
          title: "Hollywood Blockbusters: What to Watch This Weekend",
          image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=150&h=100&fit=crop"
        },
        {
          title: "TV Series Recommendations: Binge-Worthy Shows",
          image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=150&h=100&fit=crop"
        },
        {
          title: "Anime Updates: Latest Episodes and Movie Releases",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=100&fit=crop"
        },
        {
          title: "Movie Reviews: Critics Choice and Audience Favorites",
          image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=150&h=100&fit=crop"
        },
        {
          title: "Exclusive Interviews with Directors and Actors",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=100&fit=crop"
        },
        {
          title: "Behind the Scenes: Movie Making Secrets",
          image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=150&h=100&fit=crop"
        },
        {
          title: "Entertainment News: Celebrity Updates and Gossip",
          image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=150&h=100&fit=crop"
        },
        {
          title: "Film Festival Coverage: Award Season Updates",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=100&fit=crop"
        }
      ]
    }
  },
  { label: "Cinema", href: "#", megaMenu: {
      categories: [
        { label: "Movie Reviews", href: "#" },
        { label: "Film Analysis", href: "#" },
        { label: "Director Spotlights", href: "#" },
        { label: "Explore All", href: "#" }
      ],
      articles: [
        {
          title: "In-Depth Movie Review: Latest Blockbuster Analysis",
          image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=150&h=100&fit=crop"
        },
        {
          title: "Cinematography Masterclass: Visual Storytelling",
          image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=150&h=100&fit=crop"
        },
        {
          title: "Director's Vision: Behind the Camera Insights",
          image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=150&h=100&fit=crop"
        },
        {
          title: "Film Festival Highlights: Award-Winning Cinema",
          image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=150&h=100&fit=crop"
        },
        {
          title: "Genre Evolution: How Cinema is Changing",
          image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=150&h=100&fit=crop"
        },
        {
          title: "Acting Performances: Standout Roles of the Year",
          image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=150&h=100&fit=crop"
        },
        {
          title: "Technical Excellence: Sound Design and Music",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=100&fit=crop"
        },
        {
          title: "International Cinema: Global Film Trends",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=100&fit=crop"
        },
        {
          title: "Classic Cinema Revisited: Timeless Masterpieces",
          image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=150&h=100&fit=crop"
        }
      ]
    }
  },
  { 
    label: "Korean", 
    href: "#",
    megaMenu: {
      categories: [
        { label: "K-Pop Music", href: "#" },
        { label: "K-Dramas", href: "#" },
        { label: "Korean Movies", href: "#" },
        { label: "Explore All", href: "#" }
      ],
      articles: [
        {
          title: "BTS Latest Album: Breaking Records Worldwide",
          image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=100&fit=crop"
        },
        {
          title: "Top K-Dramas of 2024: Must-Watch Series",
          image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=150&h=100&fit=crop"
        },
        {
          title: "Korean Cinema: International Recognition and Awards",
          image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=150&h=100&fit=crop"
        },
        {
          title: "K-Pop Fashion Trends: Style Inspiration from Idols",
          image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=150&h=100&fit=crop"
        },
        {
          title: "Korean Beauty Secrets: Skincare and Makeup Tips",
          image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=150&h=100&fit=crop"
        },
        {
          title: "Hallyu Wave: Korean Culture's Global Impact",
          image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=150&h=100&fit=crop"
        },
        {
          title: "Korean Food Culture: From Street Food to Fine Dining",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=150&h=100&fit=crop"
        },
        {
          title: "K-Pop Concerts: Live Performance Experiences",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=100&fit=crop"
        },
        {
          title: "Korean Language Learning: Tips for Beginners",
          image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=150&h=100&fit=crop"
        }
      ]
    }
  },
  { 
    label: "Lifestyle", 
    href: "/lifestyle",
    megaMenu: {
      categories: [
        { label: "Love & Relationships", href: "#" },
        { label: "Food & Travel", href: "#" },
        { label: "Home & Decor", href: "#" },
        { label: "Explore All", href: "#" }
      ],
      articles: [
        {
          title: "Inside Saumya Tandon's Mumbai home: European, pastel tones, lucky Dhurandhar corner and old world charm",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=100&fit=crop"
        },
        {
          title: "Winter Pet Care Made Easy with Amazon Everyday Essentials",
          image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=150&h=100&fit=crop"
        },
        {
          title: "Inside Neil Nitin Mukesh's 2BHK Mumbai House: No paint, artistic and vaastu-perfect space filled with memories",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=100&fit=crop"
        },
        {
          title: "Weekly Horoscope September 16-22: Sagittarius, Capricorn, Aquarius, and Pisces - Munisha Khatwani reveals tarot and angel messages",
          image: "https://images.unsplash.com/photo-1518837167922-ddd27525d352?w=150&h=100&fit=crop"
        },
        {
          title: "Healthy Morning Routines: Celebrity Wellness Secrets",
          image: "https://images.unsplash.com/photo-1506629905607-d405b7a30db4?w=150&h=100&fit=crop"
        },
        {
          title: "Travel Guide: Best Destinations for Winter Vacation",
          image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=150&h=100&fit=crop"
        },
        {
          title: "Home Decor Trends 2024: Celebrity Interior Design Ideas",
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=150&h=100&fit=crop"
        },
        {
          title: "Relationship Advice: Building Strong Connections",
          image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=150&h=100&fit=crop"
        },
        {
          title: "Wellness Wednesday: Mental Health and Self-Care Tips",
          image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=150&h=100&fit=crop"
        }
      ]
    }
  },
  { label: "Sports Life", href: "#", megaMenu: {
      categories: [
        { label: "Cricket Updates", href: "#" },
        { label: "Football News", href: "#" },
        { label: "Sports Fashion", href: "#" },
        { label: "Explore All", href: "#" }
      ],
      articles: [
        {
          title: "Cricket World Cup: Team Analysis and Predictions",
          image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=150&h=100&fit=crop"
        },
        {
          title: "Football Transfer News: Major League Updates",
          image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=150&h=100&fit=crop"
        },
        {
          title: "Olympic Games: Athletes to Watch This Season",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=100&fit=crop"
        },
        {
          title: "Sports Fashion: Athletic Wear Trends 2024",
          image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=150&h=100&fit=crop"
        },
        {
          title: "Fitness Motivation: Celebrity Workout Routines",
          image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=150&h=100&fit=crop"
        },
        {
          title: "Sports Nutrition: Diet Plans for Athletes",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=150&h=100&fit=crop"
        },
        {
          title: "Adventure Sports: Extreme Activities and Safety",
          image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=150&h=100&fit=crop"
        },
        {
          title: "Sports Technology: Latest Equipment and Gadgets",
          image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=150&h=100&fit=crop"
        },
        {
          title: "Women in Sports: Breaking Barriers and Records",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=100&fit=crop"
        }
      ]
    }
  },
  { 
    label: "Beauty", 
    href: "#",
    megaMenu: {
      categories: [
        { label: "Makeup Tutorials", href: "#" },
        { label: "Skincare Routines", href: "#" },
        { label: "Product Reviews", href: "#" },
        { label: "Explore All", href: "#" }
      ],
      articles: [
        {
          title: "Celebrity Makeup Artist Reveals Red Carpet Secrets",
          image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=150&h=100&fit=crop"
        },
        {
          title: "Korean Skincare Routine: 10-Step Guide to Glowing Skin",
          image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=150&h=100&fit=crop"
        },
        {
          title: "Makeup Trends 2024: Bold Colors and Natural Looks",
          image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=150&h=100&fit=crop"
        },
        {
          title: "DIY Beauty Masks: Natural Ingredients for Home Care",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150&h=100&fit=crop"
        },
        {
          title: "Hair Care Secrets: Celebrity Hairstylist Tips",
          image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=150&h=100&fit=crop"
        },
        {
          title: "Nail Art Trends: Creative Designs and Techniques",
          image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=150&h=100&fit=crop"
        },
        {
          title: "Anti-Aging Solutions: Effective Treatments and Products",
          image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=150&h=100&fit=crop"
        },
        {
          title: "Bridal Beauty: Wedding Makeup and Skincare Guide",
          image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=150&h=100&fit=crop"
        },
        {
          title: "Men's Grooming: Essential Products and Routines",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=100&fit=crop"
        }
      ]
    }
  },
  { 
    label: "Fashion", 
    href: "#",
    megaMenu: {
      categories: [
        { label: "Celebrity Style", href: "#" },
        { label: "Street Fashion", href: "#" },
        { label: "Designer Collections", href: "#" },
        { label: "Explore All", href: "#" }
      ],
      articles: [
        {
          title: "Fashion Week 2024: Top Designer Collections and Trends",
          image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=150&h=100&fit=crop"
        },
        {
          title: "Celebrity Red Carpet Looks: Best Dressed of the Month",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=100&fit=crop"
        },
        {
          title: "Sustainable Fashion: Eco-Friendly Brands to Watch",
          image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=150&h=100&fit=crop"
        },
        {
          title: "Street Style Inspiration: Fashion from Around the World",
          image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=150&h=100&fit=crop"
        },
        {
          title: "Seasonal Wardrobe: Must-Have Pieces for Every Closet",
          image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=150&h=100&fit=crop"
        },
        {
          title: "Fashion Accessories: Statement Pieces and Styling Tips",
          image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=100&fit=crop"
        },
        {
          title: "Vintage Fashion Revival: Retro Trends Making Comeback",
          image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=150&h=100&fit=crop"
        },
        {
          title: "Fashion Photography: Behind the Scenes of Photo Shoots",
          image: "https://images.unsplash.com/photo-1506629905607-d405b7a30db4?w=150&h=100&fit=crop"
        },
        {
          title: "Budget Fashion: High-End Looks for Less Money",
          image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=150&h=100&fit=crop"
        }
      ]
    }
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
    <header className="sticky top-0 z-50 bg-[#ffffff] border-b border-[#e5e5e5]">
      {/* Top bar */}
      <div className="">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center h-[50px]">
            
            {/* Logo - always on left */}
            <Link href="/" className="flex items-center">
             {/* Hamburger menu - always on right */}
             <button 
              className="p-1" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
              <svg viewBox="0 0 150 30" className="h-6 w-auto">
                <text x="0" y="24" fill="#e31837" fontWeight="bold" fontSize="24" fontFamily="Arial, sans-serif">
                  PINKVILLA
                </text>
              </svg>
              
            </Link>

            {/* Navigation links with dropdowns */}
            <nav className="hidden sm:flex items-center gap-2 md:gap-3 lg:gap-5 ml-2 md:ml-4 lg:ml-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className="text-[10px] md:text-[11px] lg:text-[16px] text-[#333333] hover:text-[#e31837] transition-colors flex items-center gap-1 whitespace-nowrap"
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="h-3 w-3" />}
                  </Link>
                  {/* Desktop mega menu - hidden on mobile/tablet */}
                  {item.megaMenu && (
                    <div className="hidden lg:block fixed left-0 right-0 bg-white shadow-lg border-b border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="max-w-6xl mx-auto flex">
                        {/* Left sidebar with categories */}
                        <div className="w-64 bg-gray-50 p-6">
                          <div className="text-blue-600 text-sm font-medium mb-4">Explore All {item.label} Categories</div>
                          {item.megaMenu.categories.map((category) => (
                            <Link
                              key={category.label}
                              href={category.href}
                              className="block py-3 text-sm text-gray-700 hover:text-red-600 border-b border-gray-200 last:border-b-0"
                            >
                              {category.label}
                            </Link>
                          ))}
                        </div>
                        
                        {/* Right content with articles */}
                        <div className="flex-1 p-6">
                          <div className="grid grid-cols-3 gap-6">
                            {item.megaMenu.articles.map((article, index) => (
                              <Link key={index} href="#" className="flex gap-3 group/article">
                                <div className="relative w-20 h-14 flex-shrink-0 overflow-hidden rounded">
                                  <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-medium leading-tight line-clamp-3 group-hover/article:text-red-600">
                                    {article.title}
                                  </h4>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Box Office and other dropdowns */}
                  {item.submenu && (
                    <div className="absolute top-[49px] left-0 bg-white shadow-lg border border-gray-200 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
            
           
            
          </div>
        </div>
      </div>

      {/* Mobile navigation bar */}
      <div className="sm:hidden bg-[#ffffff]">
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
            className="absolute inset-0 bg-[#00000063] bg-opacity-50" 
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