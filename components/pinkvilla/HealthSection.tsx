"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import ExploreMore from "./ExploreMore"

/* ------------------ DATA ------------------ */

const healthData = {
  weightLoss: [
    {
      type: "double",
      title: "Himesh Reshammiya’s 20 kg weight loss transformation: Singer swears by dumbbells",
      images: [
        "https://picsum.photos/600/400?random=102",
        "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=400&h=300&fit=crop",
      ],
      author: "Sakina Kaukawala",
    },
    {
      type: "single",
      title: "Bharti Singh’s 15-kg weight loss in one year without crash diets",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop",
      author: "Prerna Verma",
    },
    {
      type: "single",
      title: "How Tanmay Bhat went from 168 kg to 110 kg",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
      author: "Prerna Verma",
    },
    {
      type: "double",
      title: "From 56 kilos Sanya Malhotra to Ananya transformation",
      images: [
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400&h=300&fit=crop",
      ],
      author: "Prerna Verma",
    },
    {
      type: "single",
      title: "21-day celebrity weight loss challenge to kickstart fitness",
      image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=400&h=300&fit=crop",
      author: "Health Desk",
    },
    {
      type: "single",
      title: "Intermittent fasting mistakes that stop weight loss",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop",
      author: "Health Desk",
    },
    {
      type: "double",
      title: "Before & After: Celebrity weight loss journeys that shocked fans",
      images: [
        "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      ],
      author: "Prerna Verma",
    },
    {
      type: "single",
      title: "Best home workouts for rapid fat burn",
      image: "https://picsum.photos/600/400?random=101",
      author: "Fitness Desk",
    },
  ],

  diet: [
    {
      type: "single",
      title: "Alia Bhatt’s nutritionist reveals simple 3-step diet plan",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      author: "Prerna Verma",
    },
    {
      type: "double",
      title: "21-day clean eating challenge for healthy weight loss",
      images: [
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=400&h=300&fit=crop",
      ],
      author: "Prerna Verma",
    },
    {
      type: "single",
      title: "Best Indian breakfast foods to lose belly fat",
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop",
      author: "Health Desk",
    },
    {
      type: "single",
      title: "Foods you must avoid if you want flat abs",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
      author: "Health Desk",
    },
    {
      type: "double",
      title: "Protein-rich vegetarian meals for muscle building",
      images: [
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=400&h=300&fit=crop",
      ],
      author: "Diet Desk",
    },
    {
      type: "single",
      title: "How much water should you drink daily?",
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop",
      author: "Diet Desk",
    },
    {
      type: "single",
      title: "Late night eating: Myths vs facts",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&h=300&fit=crop",
      author: "Diet Desk",
    },
    {
      type: "single",
      title: "Portion control hacks recommended by nutritionists",
      image: "https://picsum.photos/600/400?random=201",
      author: "Diet Desk",
    },
  ],

  fitness: [
    {
      type: "double",
      title: "How Fardeen Khan lost 24 kg with one lifestyle change",
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&h=300&fit=crop",
      ],
      author: "Prerna Verma",
    },
    {
      type: "single",
      title: "53-year-old Dwayne Johnson’s shocking transformation",
      image: "https://picsum.photos/600/400?random=301",
      author: "Prerna Verma",
    },
    {
      type: "single",
      title: "Best fat-burning workouts at home",
      image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=400&h=300&fit=crop",
      author: "Fitness Desk",
    },
    {
      type: "single",
      title: "How many steps should you walk daily?",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop",
      author: "Fitness Desk",
    },
    {
      type: "double",
      title: "Morning vs evening workout: Which is better?",
      images: [
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=300&fit=crop",
        "https://picsum.photos/600/400?random=401",
      ],
      author: "Fitness Desk",
    },
    {
      type: "single",
      title: "Strength training myths you should stop believing",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop",
      author: "Fitness Desk",
    },
    {
      type: "single",
      title: "Yoga poses to reduce belly fat naturally",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      author: "Fitness Desk",
    },
    {
      type: "single",
      title: "HIIT vs cardio: Which burns more fat?",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=300&fit=crop",
      author: "Fitness Desk",
    },
  ],
}

/* ------------------ COMPONENT ------------------ */

export default function HealthSection() {
  const [activeTab, setActiveTab] = useState("weightLoss")
  const cards = healthData[activeTab]

  return (
    <section className="py-4 sm:py-6 lg:py-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold">Health</h2>

        {/* Tabs */}
        <div className="flex gap-3 sm:gap-4 lg:gap-6 mt-3 border-b overflow-x-auto scrollbar-hide">
          {["weightLoss", "diet", "fitness"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-xs sm:text-sm font-semibold uppercase whitespace-nowrap flex-shrink-0 ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-black"
              }`}
            >
              {tab.replace(/([A-Z])/g, " $1")}
            </button>
          ))}
        </div>

        {/* Grid: Responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-4 sm:mt-6">
          {cards.map((item, index) => (
            <Link key={index} href="#" className="block">
              {/* FIXED IMAGE AREA */}
              <div className="h-[140px] sm:h-[160px] lg:h-[180px] w-full overflow-hidden bg-[#f2f2f2] rounded-lg">
                {item.type === "single" ? (
                  <div className="relative w-full h-full">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 h-full gap-[2px]">
                    {item.images.map((img, i) => (
                      <div key={i} className="relative h-full">
                        <Image src={img} alt={item.title} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* TEXT */}
              <h3 className="mt-2 sm:mt-3 text-xs sm:text-sm lg:text-[14px] font-semibold leading-snug line-clamp-3">
                {item.title}
              </h3>
              <p className="mt-1 text-[10px] sm:text-[11px] text-[#666] uppercase">
                BY {item.author}
              </p>
            </Link>
          ))}
        </div>

        <ExploreMore />
      </div>
    </section>
  )
}
