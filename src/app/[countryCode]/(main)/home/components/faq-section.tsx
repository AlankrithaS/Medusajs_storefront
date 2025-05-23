"use client"
import { useState } from "react"

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase. Please see our Returns page for more details.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping usually takes 3-7 business days depending on your location.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping fees may apply.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Absolutely! You’ll receive a tracking number once your order has shipped.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use industry-standard encryption to protect your personal information.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="w-full bg-[#EAE8E1] py-12 px-4 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900">
          FAQ – What You Need to Know
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`transition-all duration-300 rounded-xl bg-[#F6F2EE] border-l-4 ${
                openIndex === idx
                  ? "border-[#B89347] shadow-md"
                  : "border-transparent shadow-sm"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center px-4 py-4 md:px-6 md:py-5 text-left"
              >
                <span className="text-base md:text-lg font-medium text-gray-900 transition">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === idx
                      ? "rotate-180 text-[#B89347]"
                      : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`px-6 md:px-4 pb-6 text-gray-700 text-sm md:text-base leading-relaxed transition-all duration-300 ease-in-out ${
                  openIndex === idx ? "block animate-fadeIn" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.35s ease-out;
        }
      `}</style>
    </section>
  )
}
