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
        className="w-full py-12 px-2 md:px-12"
        style={{ backgroundColor: "#F6F2EE" }}
      >
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="flex-1 min-w-[320px] max-w-[400px] bg-[#EAE8E1] rounded-xl px-10 py-6 text-left shadow-sm">
            <div className="text-gray-400 text-xl font-medium mb-4">01</div>
            <h3 className="text-2xl font-bold mb-4">Deliver with Quality</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Every product is crafted with care and attention to detail,
              ensuring the best for your customers.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex-1 min-w-[320px] max-w-[400px] bg-[#EAE8E1] rounded-xl px-10 py-6 text-left shadow-sm">
            <div className="text-gray-400 text-xl font-medium mb-4">02</div>
            <h3 className="text-2xl font-bold mb-4">Designed to Impress</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              A sleek, modern store that enhances your brand and creates a
              memorable shopping experience.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex-1 min-w-[320px] max-w-[400px] bg-[#EAE8E1] rounded-xl px-10 py-6 text-left shadow-sm">
            <div className="text-gray-400 text-xl font-medium mb-4">03</div>
            <h3 className="text-2xl font-bold mb-4">Curated for You</h3>
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
