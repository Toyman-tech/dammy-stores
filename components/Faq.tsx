"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Check } from "lucide-react"

const faqs = [
  {
    question: "How Do I Know This Mop Actually Works?",
    answer:
      "The hands-free wringer system lets you clean effortlessly—no squeezing dirty water with your hands! Simply dip, press, and start mopping. Plus, the 360° rotating head ensures no spot is missed.",
  },
  {
    question: "Will This Damage My Floors?",
    answer:
      "No! The ultra-soft microfiber mop head is safe for ALL floor types—tile, hardwood, marble, laminate, and vinyl. No streaks, no scratches!",
  },
  {
    question: "What if Delivery Takes Too Long?",
    answer:
      "We offer FAST nationwide delivery! Lagos orders arrive in 1-2 days, while other locations take 2-4 days. No long waits!",
  },
  {
    question: "How Long Does The Mop Head Last?",
    answer:
      "Unlike cheap mops that wear out fast, our washable & reusable microfiber head lasts for months before needing a replacement—saving you money!",
  },
  {
    question: "Is The Free Bonus Really Free?",
    answer:
      "Yes! The ₦20,000 Mini Mop is completely FREE for the first 17 customers today. Once they're gone, this offer disappears.",
  },
  {
    question: "Why Should I Buy Now And Not Later?",
    answer:
      "This special discount + free bonus is only available today before 11:59 PM. If you return tomorrow, the free gift might be gone, and the price may increase. Don't wait!",
  },
  {
    question: "How Do I Order?",
    answer:
      'Click the "Order Now" button, fill in your details, and get fast delivery! Simple, secure, and hassle-free!',
  },
]

export default function FAQSection() {
  return (
    <section>
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-red-500 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          I Know You Have Doubts... Let Me Answer Your Questions!
        </motion.h2>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-700 pb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-3 mb-4">
                <X className="text-red-500 mt-1 flex-shrink-0" size={20} />
                <h3 className="text-xl font-semibold text-white">"{faq.question}"</h3>
              </div>

              <div className="flex items-start gap-3 ml-8">
                <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-8 text-lg font-semibold rounded-none transition-colors duration-300"
            size="lg"
          >
            Order Now To Get Your Bonus!!!
          </Button>
        </motion.div>

      
      </div>
    </section>
    <motion.div
          className="text-center mt-6 mb-30 max-sm:px-3 text-sm text-black space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <p>
            This website is not affiliated with, endorsed by, or in any way associated with Facebook, Google Inc., or
            any of their subsidiaries.
          </p>
          <p>All trademarks and copyrights are the property of their respective owners.</p>
        </motion.div>
    </section>
  )
}
