"use client"

import { motion } from "framer-motion"
import { Droplets, RotateCcw, Zap, Shield, Leaf, Clock } from "lucide-react"

const features = [
  {
    icon: Droplets,
    title: "Built-in Spray System",
    description: "No more heavy buckets! Built-in 500ml tank with trigger spray for precise water control.",
  },
  {
    icon: RotateCcw,
    title: "360° Rotating Head",
    description: "Flexible head rotates in all directions to clean under furniture and tight corners effortlessly.",
  },
  {
    icon: Zap,
    title: "Microfiber Technology",
    description: "Advanced microfiber pads capture 99.9% of dirt, dust, and bacteria without chemicals.",
  },
  {
    icon: Shield,
    title: "Scratch-Safe Design",
    description: "Gentle on all floor types - hardwood, tile, laminate, and marble. No scratches guaranteed.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reusable microfiber pads reduce waste. Clean with just water - no harsh chemicals needed.",
  },
  {
    icon: Clock,
    title: "Quick-Dry Technology",
    description: "Superior absorption leaves floors completely dry in seconds. No more waiting around!",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background scroll-mt-16" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Why DammyStores Mop is
            <span className="text-primary"> Different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Engineered with cutting-edge features that make cleaning faster, easier, and more effective than ever
            before.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>

              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">All Features. One Amazing Price.</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Get professional-grade cleaning technology at affordable prices
            </p>
            {/* <div className="flex items-center justify-center gap-4">
              <span className="text-3xl font-bold text-primary">$49.99</span>
              <span className="text-lg text-muted-foreground line-through">$129.99</span>
              <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                62% OFF
              </span>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
