"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Austin, TX",
    rating: 5,
    text: "I was skeptical at first, but this mop has completely changed my cleaning routine. The 360° head gets into corners I never could reach before, and my floors dry instantly!",
    image: "/happy-woman-customer-testimonial.png",
  },
  {
    name: "Mike Chen",
    location: "Seattle, WA",
    rating: 5,
    text: "As a father of three, I need cleaning tools that work fast and effectively. This mop saves me 30 minutes every time I clean. The built-in spray is genius!",
    image: "/satisfied-dad-customer-testimonial.png",
  },
  {
    name: "Lisa Rodriguez",
    location: "Miami, FL",
    rating: 5,
    text: "I have hardwood floors throughout my house and was always worried about water damage. This mop leaves them perfectly dry and streak-free every time.",
    image: "/professional-woman-customer-testimonial.png",
  },
  {
    name: "David Thompson",
    location: "Denver, CO",
    rating: 5,
    text: "I run a small cleaning business and these mops have increased my efficiency by 40%. My clients love the results and I love how easy they are to use.",
    image: "/professional-cleaner-customer-testimonial.png",
  },
  {
    name: "Emma Wilson",
    location: "Boston, MA",
    rating: 5,
    text: "The microfiber technology is incredible. I can clean my entire kitchen with just water - no chemicals needed. Perfect for my family with young kids.",
    image: "/young-mother-customer-testimonial.png",
  },
  {
    name: "Robert Kim",
    location: "Phoenix, AZ",
    rating: 5,
    text: "I've tried every mop on the market. This is hands down the best. The rotating head and spray system make cleaning effortless. Worth every penny!",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30 scroll-mt-16" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            What Our Customers
            <span className="text-primary"> Are Saying</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Don't just take our word for it. Here's what real customers say about their CleanPro Mop experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">"{testimonial.text}"</p>
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
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-xl font-bold ml-2">4.9/5 Average Rating</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Over 50,000 Satisfied Customers</h3>
            <p className="text-lg mb-6 opacity-90">Join the thousands who've already upgraded their cleaning routine</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link target="blank" href={"https://wa.me/+2347048667548"}>
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Order Your CleanPro Mop
              </button>
              </Link>
              {/* <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Read More Reviews
              </button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
