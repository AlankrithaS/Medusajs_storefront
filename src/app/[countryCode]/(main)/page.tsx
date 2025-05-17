// import { Metadata } from "next"

// import FeaturedProducts from "@modules/home/components/featured-products"
// import Hero from "@modules/home/components/hero"
// import { listCollections } from "@lib/data/collections"
// import { getRegion } from "@lib/data/regions"

// export const metadata: Metadata = {
//   title: "Medusa Next.js Starter Template",
//   description:
//     "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
// }

// export default async function Home(props: {
//   params: Promise<{ countryCode: string }>
// }) {
//   const params = await props.params

//   const { countryCode } = params

//   const region = await getRegion(countryCode)

//   const { collections } = await listCollections({
//     fields: "id, handle, title",
//   })

//   if (!collections || !region) {
//     return null
//   }

//   return (
//     <>
//       <Hero />
//       <div className="py-12">
//         <ul className="flex flex-col gap-x-6">
//           <FeaturedProducts collections={collections} region={region} />
//         </ul>
//       </div>
//     </>
//   )
// }

import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

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

  // Make sure this is BEFORE the return!
  const featuredCollection = collections.find(
    (c) => c.handle === "featured-products"
  )

  return (
    <>
      <Hero />
      <div className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-bold mb-6 text-ui-fg-base">
          New Arraivals
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
      <section className="content-container py-12 flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-gray-100 rounded-xl p-8 text-left">
          <div className="text-gray-400 text-xl font-semibold mb-2">01</div>
          <h3 className="text-2xl font-serif font-bold mb-4">
            Deliver with Quality
          </h3>
          <p className="text-gray-600">
            Every product is crafted with care and attention to detail, ensuring
            the best for your customers.
          </p>
        </div>
        <div className="flex-1 bg-gray-100 rounded-xl p-8 text-left">
          <div className="text-gray-400 text-xl font-semibold mb-2">02</div>
          <h3 className="text-2xl font-serif font-bold mb-4">
            Designed to Impress
          </h3>
          <p className="text-gray-600">
            A sleek, modern store that enhances your brand and creates a
            memorable shopping experience.
          </p>
        </div>
        <div className="flex-1 bg-gray-100 rounded-xl p-8 text-left">
          <div className="text-gray-400 text-xl font-semibold mb-2">03</div>
          <h3 className="text-2xl font-serif font-bold mb-4">
            Curated for You
          </h3>
          <p className="text-gray-600">
            Handpicked selections that reflect the latest trends and timeless
            essentials.
          </p>
        </div>
      </section>

      
    </>
  )
}
