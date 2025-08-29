"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ashley A.",
    location: "Ogun State",
    rating: 5,
    image: "/test1.jpg",
    text: "I initially thought it was just another overhyped product, but i ordered the 2 for home and shop. Honestly, this mop is different. My wife even thanked me for the first time for buying a ‘cleaning tool’ LOL",
  },
  {
    name: "Solape M.",
    location: "Lagos State",
    rating: 4.5,
    image: "/test2.jpg",
    text: "Before my nails used to break or get ruined anytime i mop. This Easyclean Mop is different. i don’t touch dirty water again, and my nails are still intact. Girls this one is for us!",
  },
  {
    name: "Johnson P.",
    location: "Lagos State",
    rating: 5,
    image: "/test3.jpg",
    text: "I run a bar, and there’s always something spilling. This mop handles everything sharp sharp. I bought 3 and shared It between my home and my shop. Worth every naira! ",
  },
  {
    name: "Mariam T.",
    location: "Ibadan",
    rating: 5,
    image: "/test4.jpg",
    text: "I work in a hotel, and cleaning the rooms was always stressful, especially squeezing the mop by hand. This mop changed everything. I’m finishing my rounds faster and don’t get back pain anymore. Management even asked where i got it from!"
   },
   
  {
    name: "Chucks P.",
    location: "Lagos State",
    rating: 5,
    image: "/s5.jpg",
    text: "As a guy living alone, i hate stress. i used to just use tissue and my foot to clean spills 🙈. But this mop has made life way easier. It’s so simple to use and I don’t even need to bend or touch anything dirty. clean the floor in seconds."
  },
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1 mb-4 w-full justify-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "fill-orange-400 text-orange-400"
              : star - 0.5 <= rating
                ? "fill-orange-400/50 text-orange-400"
                : "fill-gray-300 text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-[#B3D8A8]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF0000] text-center mb-12 leading-tight"
        >
          Don't Take Just Our Word For It, Here is What Our Happy Customer Are Saying
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#B3D8A8] rounded-lg p-6 shadow-2xl shadow-black"
            >
              <div className="text-center mb-4">
                <h3 className="font-bold text-lg text-gray-800">
                  {testimonial.name}, {testimonial.location}
                </h3>
              </div>

              <StarRating rating={testimonial.rating} />

              <div className="flex items-center mb-4 w-full justify-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`${testimonial.name} using the mop`}
                  className="w-full h-[300px] object-contain rounded-lg"
                />
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
