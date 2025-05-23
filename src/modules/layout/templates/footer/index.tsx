import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { FaInstagram, FaEnvelope } from "react-icons/fa"

export default async function Footer() {
  const { collections } = await listCollections({ fields: "*products" })
  const productCategories = await listCategories()

  const goldGradient =
    "linear-gradient(180deg,rgb(179, 132, 13) 0%,rgb(131, 105, 40) 60%,rgb(73, 52, 8) 100%)"

  const gradientStyle = {
    background: goldGradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }

  const softDark = "#3B2F13"

  return (
    <footer className="w-full bg-[#9B8F3C] px-6 md:px-12 pt-10 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Story */}
        <div className="flex flex-col items-center md:items-start gap-5 max-w-md">
          <img
            src="/stamp.png"
            alt="Swarnika Heritage Stamp"
            className="w-28 h-28 object-contain"
          />
          <p className="text-[#FFF4DB] text-[0.95rem] leading-relaxed text-center md:text-left">
            <strong>Swarnika Heritage by Alankritha</strong> is a heartfelt
            journey that began with the women of our family — a dream where each
            piece is thoughtfully curated to drape the world in the comfort of
            handloom elegance. Our royal stamp stands for authenticity — a mark
            of honor for the original sarees we proudly present to the world.
          </p>
        </div>

        {/* Right: Links & Contact */}
        <div className="flex flex-col md:items-end items-center gap-8">
          <div className="flex flex-row flex-wrap justify-center md:justify-end gap-12">
            {/* Categories */}
            <div className="flex flex-col gap-2 min-w-[100px]">
              <span className="font-semibold text-lg mb-1 tracking-wide text-[#FFF4DB]">
                Categories
              </span>
              {productCategories?.slice(0, 5).map(
                (c) =>
                  !c.parent_category && (
                    <LocalizedClientLink
                      key={c.id}
                      href={`/categories/${c.handle}`}
                      className="hover:text-[#C2A14A] transition"
                      style={{ color: softDark, fontWeight: 500 }}
                    >
                      {c.name}
                    </LocalizedClientLink>
                  )
              )}
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-2 min-w-[140px]">
              <span className="font-semibold text-lg mb-1 tracking-wide text-[#FFF4DB]">
                Quick Links
              </span>
              <LocalizedClientLink
                href="/about"
                className="hover:text-[#C2A14A] transition"
                style={{ color: softDark, fontWeight: 500 }}
              >
                About Us
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/privacy&policy"
                className="hover:text-[#C2A14A] transition"
                style={{ color: softDark, fontWeight: 500 }}
              >
                Privacy Policy
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/termsofservices"
                className="hover:text-[#C2A14A] transition"
                style={{ color: softDark, fontWeight: 500 }}
              >
                Terms of Service
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/return&exchange"
                className="hover:text-[#C2A14A] transition"
                style={{ color: softDark, fontWeight: 500 }}
              >
                Return & Exchange Policy
              </LocalizedClientLink>
            </div>

            {/* Collections */}
            {collections?.length > 0 && (
              <div className="flex flex-col gap-2 min-w-[120px]">
                <span className="font-semibold text-lg mb-1 tracking-wide text-[#FFF4DB]">
                  Collections
                </span>
                {collections.slice(0, 2).map((c) => (
                  <LocalizedClientLink
                    key={c.id}
                    href={`/collections/${c.handle}`}
                    className="hover:text-[#C2A14A] transition"
                    style={{ color: softDark, fontWeight: 500 }}
                  >
                    {c.title}
                  </LocalizedClientLink>
                ))}
              </div>
            )}
          </div>

          {/* Contact Info */}
          {/* Removed email and Instagram icons and links as requested */}
        </div>
      </div>

      {/* Brand Name */}
      <div className="flex flex-col items-center mt-10">
        <span
          className="text-[clamp(2.5rem,6vw,4rem)] font-bold leading-tight text-center tracking-tight"
          style={{
            ...gradientStyle,
            filter: "drop-shadow(0 2px 8px #7c5a1340)",
          }}
        >
          Swarnika Heritage
        </span>
        <span
          className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-medium"
          style={gradientStyle}
        >
          by Alankritha
        </span>
      </div>

      {/* Divider */}
      <hr className="border-0 h-[2px] bg-gradient-to-r from-[#C2A14A] via-[#7c5a13] to-[#3B2F13] opacity-80 my-4 max-w-3xl mx-auto" />

      {/* Copyright */}
      <div className="flex flex-col items-center mt-2">
        <Text
          className="txt-compact-small text-[#FFF4DB]"
          style={{ fontWeight: 500 }}
        >
          © {new Date().getFullYear()} SWARNIKA HERITAGE. All rights reserved.
        </Text>
      </div>
    </footer>
  )
}
