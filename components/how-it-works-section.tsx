"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    step: "01",
    title: "Fill & Attach",
    description: "Fill the built-in tank with clean water and attach your microfiber pad",
    image: "/filling-water-tank-on-modern-mop.png",
  },
  {
    step: "02",
    title: "Spray & Clean",
    description: "Trigger spray for precise water control, then glide across your floors",
    image: "/spraying-and-mopping-floor-with-modern-mop.png",
  },
  {
    step: "03",
    title: "Rotate & Reach",
    description: "Use the 360° head to clean corners, under furniture, and tight spaces",
    image: "/rotating-mop-head-cleaning-under-furniture.png",
  },
  {
    step: "04",
    title: "Rinse & Reuse",
    description: "Rinse the microfiber pad and you're ready for the next room",
    image: "/rinsing-microfiber-mop-pad-in-sink.png",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-muted/30" id="how-it-works">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            How It Works in
            <span className="text-primary"> 4 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Cleaning has never been this easy. See how the CleanPro Mop transforms your cleaning routine in just
            minutes.
          </p>
        </motion.div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <div className="h-px bg-border flex-1 hidden sm:block"></div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>

                <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Next Step</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card">
                  <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of satisfied customers who've revolutionized their cleaning routine
            </p>
            <Link target="blank" href={"https://wa.me/+2347048667548"}>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Order  Now
            </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
