"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ChevronLeft, ChevronRight, Star } from "lucide-react"

const packages = [
  {
    name: "REGULAR",
    price: 34000,
    originalPrice: 45000,
    savings: 11000,
    badge: "Most Popular",
    description: "Buy 1 get 1 mini mop free",
    features: [
      "One Self-Wrining Mop",
      "One Free Mini Mop",
      "Free Shipping",
      "Easy Return Policy",
    ],
    image: "/single-modern-mop-starter-kit.png",
  },
  {
    name: "SILVER",
    price: 68000,
    originalPrice: 102000,
    savings: 34000,
    badge: "Best Value",
    description: "Buy 2 get one free + 2 free mini Mop",
    features: [
      "Two Self-Wrining Mops",
      "One extra Self-Wrining Mop",
      "Two Free Mini Mops",
      "Free Shipping",
      "Easy Return Policy",
      "Perfect for gifting",
    ],
    image: "/family-pack-modern-mop-with-extra-pads.png",
  },
  {
    name: "GOLD",
    price: 102000,
    originalPrice: 170000,
    savings: 68000,
    badge: "Premium",
    description: "Buy 3 get 2 free + 3 free mini Mop",
    features: [
      "Three Self-Wrining Mops",
      "Two extra Self-Wrining Mops",
      "Three Free Mini Mops",
      "Free Shipping",
      "Perfect for managing multiple spaces",
      "Easy Return Policy",
      "Perfect for gifting",
    ],
    image: "/professional-cleaning-kit-with-multiple-mops.png",
  },
]

export function PackagesSection() {
  const [currentPackage, setCurrentPackage] = useState(1) // Start with Family Pack (Best Value)

  // Replace with the site owner's WhatsApp number (any format is fine; we'll sanitize to digits)
  // Example input: "+2348012345678" or "234 801 234 5678" -> we will convert to "2348012345678"
  const WHATSAPP_NUMBER = "+2347048667548"

  const handleOrder = (pkg: typeof packages[number]) => {
    const message = `Hello! I'm interested in the ${pkg.name} package.\n\nDetails:\n- Description: ${pkg.description}\n- Price: ₦${pkg.price.toLocaleString()} (Original: ₦${pkg.originalPrice.toLocaleString()}, Save: ₦${pkg.savings.toLocaleString()})\n\nPlease let me know the next steps.`
    // Sanitize number to digits only; WhatsApp requires international format without '+'
    const phone = WHATSAPP_NUMBER.replace(/[^0-9]/g, "")
    // Use api.whatsapp.com for better compatibility across devices/browsers
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
    if (typeof window !== "undefined") {
      window.open(url, "_blank")
    }
  }

  const nextPackage = () => {
    setCurrentPackage((prev) => (prev + 1) % packages.length)
  }

  const prevPackage = () => {
    setCurrentPackage((prev) => (prev - 1 + packages.length) % packages.length)
  }

  return (
    <section className="py-24 bg-background" id="packages">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Choose Your
            <span className="text-primary"> Perfect Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Select the package that fits your cleaning needs. All packages include our 30-day money-back guarantee and
            free shipping.
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-card rounded-2xl p-8 border-2 transition-all hover:shadow-xl ${
                index === 1 ? "border-primary scale-105" : "border-border"
              }`}
            >
              {pkg.badge && (
                <Badge
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 ${index === 1 ? "bg-primary" : "bg-secondary"}`}
                >
                  {pkg.badge}
                </Badge>
              )}

              <div className="text-center mb-6">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground">{pkg.description}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-primary">₦{pkg.price.toLocaleString()}</span>
                  <span className="text-lg text-muted-foreground line-through">₦{pkg.originalPrice.toLocaleString()}</span>
                </div>
                <div className="text-sm text-green-600 font-medium">Save ₦{pkg.savings.toLocaleString()}!</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button onClick={() => handleOrder(pkg)} className="w-full" size="lg" variant={index === 1 ? "default" : "outline"}>
                Order Now
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="lg:hidden">
          <div className="relative">
            <motion.div
              key={currentPackage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-6 border-2 border-primary mx-4"
            >
              {packages[currentPackage].badge && (
                <Badge className="mb-4 bg-primary">{packages[currentPackage].badge}</Badge>
              )}

              <div className="text-center mb-6">
                <img
                  src={packages[currentPackage].image || "/placeholder.svg"}
                  alt={packages[currentPackage].name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">{packages[currentPackage].name}</h3>
                <p className="text-muted-foreground">{packages[currentPackage].description}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-primary">${packages[currentPackage].price}</span>
                  <span className="text-lg text-muted-foreground line-through">
                    ${packages[currentPackage].originalPrice}
                  </span>
                </div>
                <div className="text-sm text-green-600 font-medium">Save ${packages[currentPackage].savings}!</div>
              </div>

              <ul className="space-y-3 mb-8">
                {packages[currentPackage].features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={() => handleOrder(packages[currentPackage])} className="w-full" size="lg">
                Order Now
              </Button>
            </motion.div>

            {/* Navigation buttons */}
            <button
              onClick={prevPackage}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextPackage}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {packages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPackage(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentPackage ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 font-medium">4.9/5 Customer Rating</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Join 50,000+ Happy Customers</h3>
            <p className="text-lg text-muted-foreground">
              "Best cleaning investment I've ever made. My floors have never looked better!" - Sarah M.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
