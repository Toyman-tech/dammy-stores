"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jessica O.",
    location: "Lagos",
    rating: 5,
    image: "/test1.jpg",
    text: "It's a great product! The quality is great, and it feels sturdy yet lightweight. The mop head is super soft yet highly absorbent. For a lazy person like me, it is a worthy purchase. Wringing out the mop is simple and mess-free. Overall, this mop has made cleaning so much easier and quicker. No more backpains with old mopping clothes.",
  },
  {
    name: "Tunde A.",
    location: "Abuja",
    rating: 4.5,
    image: "/test2.jpg",
    text: "Initially I was doubtful to buy this but after I received it I liked it. Now no need to put hands in water to spin. Design and quality is good and spinning is fast and durable enough. I use this for mopping floors and this works pretty well to clean dirt and stains and gets dry fastly.",
  },
  {
    name: "Miriam E.",
    location: "Port Harcourt",
    rating: 5,
    image: "/test3.jpg",
    text: "We are using it since few days sweep the floor of dust which is main issue summer season. It's really lightweight also handle length is enough to use. The quality is superb. the microfiber head absorbs dust and dirt efficiently, leaving floors spotless. Easy to use. reasonable price. Highly recommended",
  },
  {
    name: "Emeka O.",
    location: "Enugu",
    rating: 5,
    image: "/test4.jpg",
    text: "I really like this product .. Perfect standing mop for easy cleaning the floors. The height of the mop is good and can be adjusted. The good part is that no need to wet hand to squeeze.Highly recommended ."
   },
   
  {
    name: "Aisha K.",
    location: "Kano",
    rating: 5,
    image: "/s5.jpg",
    text: "Excellent mop, very durable material. It’s incredibly user-friendly and simplifies daily tasks. You won’t even need to use a broom because it functions as both a dry and a wet mop. The substance of the cloth is so silky that it glides across the floor and cleans even more effectively..Recommended"
  },
  
  {
    name: "Mrs. Oladipo",
    location: "Ibadan",
    rating: 5,
    image: "/test6.jpg",
    text: "The mop clear is so amazing and so easy to use it is having build in water dryer which pulls out all the water and easliy can be used at anytime. I like the mop very much. It is much household need."
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
