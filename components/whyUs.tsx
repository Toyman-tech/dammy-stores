"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function WhyUs() {
  const points = [
    "More than 500 shipments to satisfied customers!",
    "Immediate and high-quality service: shipping parcels the same day.",
    "Quick delivery: 2–5 days delivery to any location.",
    "Guarantees: Each item undergoes a 100% quality check before it is sent to you.",
    "Follow Up: We follow up to ensure you are satisfied with your order and fix any issue immediately.",
    // "Free nationwide delivery and payment on delivery acceptable in Nigeria if you order before 11:59pm today.",
  ]

  return (
    <section className="py-16 px-4 bg-[#0000003B]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF0000] text-center mb-8"
        >
          WHY BUYERS TRUST US?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-lg text-gray-700 mb-10"
        >
          More than 500 shipments to satisfied customers!
        </motion.p>

        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {points.slice(1).map((text, idx) => (
              <li key={idx} className="list-none">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4"
                >
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
                  <span className="text-gray-800 text-base leading-relaxed">{text}</span>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
        {/* start */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF0000] text-center mb-8 pt-10"
        >
          Still Skeptical If Your Money is Safe?
        </motion.h2>

        <div className="grid grid-cols-1 w-full mx-auto m-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="relative justify-center flex w-full"
          >
            <Image
              src="/usG.png"
              alt="Traditional mop problems"
              width={90}
              height={90}
              className="rounded-lg w-[200px] h-[200px]"
            />
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-lg text-gray-700 mb-10"
        >
          Our package comes with a solid money-back guarantee. <br />
          If You Are Unhappy With your Order, We Will Take It Back And Give You a Refund or replace it for you! <br />
          We stand by our HIGH-QUALITY products, and your satisfaction is 100% guaranteed.
        </motion.p>
      </div>
    </section >
  )
}
