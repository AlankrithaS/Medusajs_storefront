import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import FAQSection from "./home/components/faq-section"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params

  const region = await getRegion(countryCode)
  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  const featuredCollection = collections.find(
    (c) => c.handle === "featured-products"
  )

  return (
    <>
      <Hero />
      <div className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold  mb-6 text-ui-fg-base">
          New Arrivals
        </h2>
        <ul className="flex flex-col gap-x-6">
          {featuredCollection ? (
            <FeaturedProducts
              collections={[featuredCollection]}
              region={region}
            />
          ) : (
            <p className="text-ui-fg-subtle">No featured products found.</p>
          )}
        </ul>
      </div>
      {/* Info Cards Section BELOW Featured Products */}
      <section
        className="w-full py-8 px-4 md:px-8"
        style={{ backgroundColor: "#F6F2EE" }}
      >
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6">
          {/* Card 1 */}
          <div className="flex-1 min-w-[260px] max-w-[350px] bg-[#EAE8E1] rounded-xl px-6 py-5 text-left shadow-sm">
            <div className="text-gray-400 text-lg font-medium mb-2">01</div>
            <h3 className="text-xl font-bold mb-2">Deliver with Quality</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Every product is crafted with care and attention to detail,
              ensuring the best for your customers.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex-1 min-w-[260px] max-w-[350px] bg-[#EAE8E1] rounded-xl px-6 py-5 text-left shadow-sm">
            <div className="text-gray-400 text-lg font-medium mb-2">02</div>
            <h3 className="text-xl font-bold mb-2">Designed to Impress</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              A sleek, modern store that enhances your brand and creates a
              memorable shopping experience.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex-1 min-w-[260px] max-w-[350px] bg-[#EAE8E1] rounded-xl px-6 py-5 text-left shadow-sm">
            <div className="text-gray-400 text-lg font-medium mb-2">03</div>
            <h3 className="text-xl font-bold mb-2">Curated for You</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Handpicked selections that reflect the latest trends and timeless
              essentials.
            </p>
          </div>
        </div>
      </section>
      <FAQSection />
    </>
  )
}
