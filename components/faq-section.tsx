"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "How does the CleanPro Mop work?",
    answer:
      "The CleanPro Mop features a built-in 500ml water tank with trigger spray system and advanced microfiber pads. Simply fill the tank, spray as needed, and clean. The 360° rotating head reaches all areas, and the microfiber technology captures 99.9% of dirt and bacteria.",
  },
  {
    question: "What floor types can I use it on?",
    answer:
      "The CleanPro Mop is safe for all floor types including hardwood, laminate, tile, marble, vinyl, and more. The gentle microfiber pads won't scratch or damage any surface, and the controlled water spray prevents over-wetting.",
  },
  {
    question: "How often should I replace the microfiber pads?",
    answer:
      "Microfiber pads are reusable and can be washed hundreds of times. For optimal performance, we recommend washing them after every 3-4 uses. Each pad typically lasts 6-12 months with regular use.",
  },
  {
    question: "Is there a warranty?",
    answer:
      "Yes! All CleanPro Mops come with a 2-year manufacturer warranty covering defects and normal wear. Plus, we offer a 30-day money-back guarantee if you're not completely satisfied.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "We offer free shipping on all orders. Standard delivery takes 3-5 business days within the continental US. Express shipping (1-2 days) is available for an additional fee.",
  },
  {
    question: "Can I use cleaning solutions with it?",
    answer:
      "While the CleanPro Mop works great with just water, you can add mild, non-abrasive cleaning solutions to the tank if desired. Avoid bleach or harsh chemicals that could damage the microfiber pads.",
  },
  {
    question: "What's included in each package?",
    answer:
      "The Starter Kit includes 1 mop + 2 pads. The Family Pack includes 1 mop + 6 pads + extra head + 2-year warranty. The Professional Kit includes 2 mops + 12 pads + 2 extra heads + carrying case + 3-year warranty.",
  },
  {
    question: "How do I clean and maintain the mop?",
    answer:
      "Rinse the microfiber pads with warm water after each use and machine wash them weekly. The mop handle can be wiped clean with a damp cloth. Empty and rinse the water tank after each use to prevent buildup.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-muted/30" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Frequently Asked
            <span className="text-primary"> Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Got questions? We've got answers. Here are the most common questions about the CleanPro Mop.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-card rounded-lg p-6 text-left border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground mt-4 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto border border-border">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">Our customer support team is here to help you 24/7</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link target="blank" href={"https://wa.me/+2347048667548"}>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Contact Support
              </button>
              </Link>
              {/* <button className="border border-border px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors">
                Live Chat
              </button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
