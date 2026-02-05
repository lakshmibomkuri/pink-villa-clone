import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#222] text-white py-12 font-sans">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Main horizontal container */}
        <div className="flex flex-col lg:flex-row gap-12 justify-between w-full min-w-0">
          
          {/* Left block */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <h2 className="text-pink-600 font-extrabold text-2xl tracking-wide mb-8">
              PINKVILLA
            </h2>

            <p className="uppercase font-bold text-xs mb-4">
              PINKVILLA SCREEN & STYLE ICONS 2025
            </p>

            <p className="uppercase font-bold text-xs mb-2">Download App</p>
            <div className="flex gap-3 mb-8 flex-wrap">
              <a href="#" className="block w-[120px]">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play Store"
                  className="w-full h-auto"
                />
              </a>
              <a href="#" className="block w-[120px]">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="w-full h-auto"
                />
              </a>
            </div>

            <p className="uppercase font-bold text-xs mb-2">Follow Us On</p>
            <div className="flex gap-4 text-white">
              <SocialIcon icon="Instagram" />
              <SocialIcon icon="Youtube" />
              <SocialIcon icon="Facebook" />
              <SocialIcon icon="Twitter" />
            </div>
          </div>

          {/* Right side grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 w-full min-w-0">
            
            <FooterSectionGrid
              title="COMPANY"
              leftItems={[
                "About Us",
                "Image Usage Policy",
                "Privacy Policy",
                "Contact Us",
                "Editorial Guidelines",
              ]}
              rightItems={[
                "Cookie Policy",
                "Press Room",
                "Awards/Badges",
                "Terms & Conditions",
              ]}
            />

            <FooterSectionGrid
              title="POPULAR CATEGORIES"
              leftItems={[
                "Latest",
                "Cinema",
                "Bollywood",
                "South",
                "Exclusives",
                "Tv",
                "Box office",
                "Movie Reviews",
              ]}
              rightItems={[
                "Hollywood",
                "Anime",
                "Korean",
                "Lifestyle",
                "Sports life",
                "Beauty",
                "Fashion",
              ]}
            />

            <FooterSectionGrid
              title="HOT TOPICS"
              leftItems={[
                "Dhurandhar",
                "Shhyamali De",
                "Raj Nidimoru",
                "Dhurandhar Advance Booking",
              ]}
              rightItems={[
                "Zootopia 2 Box Office",
                "Samantha",
                "Samantha Ruth Prabhu",
              ]}
            />

            <FooterSectionGrid
              title="TRENDING ON THE WEB"
              leftItems={[
                "Raj Nidimoru’s ex-wife Shhyamali",
                "Dhurandhar Advance Booking Box Office",
                "Raj Nidimoru’s sister pens a note on his marriage",
              ]}
              rightItems={[
                "Aaryan Movie Review",
                "Naga Chaitanya drops",
                "5 Hindi Films Releasing",
                "BTS’ Jungkook and aespa’s Winter dating?",
                "Dhurandhar Box Office: Kalamkaval Review",
              ]}
            />

            <FooterSectionGrid
              title="BOX OFFICE BUZZ"
              leftItems={[
                "Highest Grossing Films of 2025 in India",
                "Ek Deewane Ki Deewaniyat Box Office",
                "Thamma Box Office Collection",
                "The Taj Story Opening Weekend Box Office",
              ]}
              rightItems={[
                "Laglo Krishna Sada Sahaayate Box Office",
                "Chaniya Toli Box Office Collections",
                "HAQ Box Office Opening Weekend",
              ]}
            />
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-gray-600 mt-14 pt-5 text-[11px] text-gray-400 text-center">
          Copyright © 2007 - 2026 Pinkvilla Media Private Limited. All rights
          reserved. Click{" "}
          <Link href="#" className="underline hover:text-pink-600">
            here for additional information
          </Link>
          .
        </div>
      </div>
    </footer>
  );
}

// Social icons switch
function SocialIcon({ icon }: { icon: "Facebook" | "Instagram" | "Twitter" | "Youtube" }) {
  const classes = "h-5 w-5 hover:text-pink-600 transition-colors";
  switch (icon) {
    case "Facebook":
      return <Facebook className={classes} />;
    case "Instagram":
      return <Instagram className={classes} />;
    case "Twitter":
      return <Twitter className={classes} />;
    case "Youtube":
      return <Youtube className={classes} />;
    default:
      return null;
  }
}

// Footer section grid component
function FooterSectionGrid({
  title,
  leftItems,
  rightItems,
}: {
  title: string;
  leftItems: string[];
  rightItems: string[];
}) {
  return (
    <section className="min-w-0">
      <h3 className="text-xs font-bold mb-4">{title}</h3>
      <div className="flex flex-col sm:flex-row text-[12px] text-gray-300">
        {/* Left sub-column */}
        <ul className="flex flex-col space-y-2 mr-0 sm:mr-6 min-w-0 mb-4 sm:mb-0 break-words">
          {leftItems.map((item) => (
            <li key={item}>
              <Link href="#" className="hover:text-pink-600 break-words">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right sub-column */}
        <ul className="flex flex-col space-y-2 min-w-0 break-words">
          {rightItems.map((item) => (
            <li key={item}>
              <Link href="#" className="hover:text-pink-600 break-words">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


