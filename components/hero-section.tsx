"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const productImages = [
  {
    src: "/hero1.jpg",
    alt: "CleanPro Mop in action",
  },
  {
    src: "/hero2.jpg",
    alt: "CleanPro Mop in action",
  },
  {
    src: "/hero3.jpg",
    alt: "CleanPro Mop in action",
  },
  {
    src: "/hero5.jpg",
    alt: "CleanPro Mop in action",
  },
  {
    src: "/hero6.jpg",
    alt: "CleanPro Mop in action",
  },
  {
    src: "/mod1.jpg",
    alt: "CleanPro Mop in action",
  },
  {
    src: "/mod6.jpg",
    alt: "CleanPro Mop in action",
  },
]

export  function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const router = useRouter()

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-[#054040]" />

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg viewBox="0 0 1200 120" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.1)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-5"
        >
          <h1 className="text-4xl md:text-5xl  font-bold text-white leading-tight">
            NEVER TOUCH <span className="text-yellow-400">
              DIRTY MOP WATER</span> AGAIN!!!
          </h1>
        
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <p className="text-xl md:text-4xl text-white font-medium ">
            {'This Hands-Free Mop Cleans Faster, Dries Instantly & Keeps Your Hands Clean!"'}
          </p>
        </motion.div>

        {/* Product Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full max-w-5xl mb-8 pb-10"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            autoplay={{ delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              el: ".hero-pagination",
              clickable: true,
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            className="product-slider"
          >
            {productImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <div className="relative bg-white rounded-lg h-fit  shadow-2xl max-w-md w-full">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={1200}
                      height={1200}
                      className="w-full h-full object-contain"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots Below Image */}
          <div className="hero-pagination flex justify-center items-center mt-4" />

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button className="swiper-button-next-custom hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </motion.div>

        {/* Star Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-white text-lg font-medium">320 verified customers</p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Button
            size="lg"
            className="bg-[#3EC381] hover:bg-green-600 text-white font-bold text-xl px-12 py-6 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => router.push("/?pkg=regular#order")}
          >
            Place Your Order
          </Button>
        </motion.div>
      </div>

      {/* Custom styles for swiper pagination */}
      <style jsx global>{`
        .hero-pagination .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.6;
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
        }
        .hero-pagination .swiper-pagination-bullet-active {
          background: #22c55e !important;
          opacity: 1;
        }
      `}</style>
    </section>
  )
}


// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { ChevronLeft, ChevronRight, Sparkles, Star } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"
// import Link from "next/link"

// const heroImages = [
//   {
//     src: "/modern-mop-with-microfiber-head-cleaning-floor.png",
//     alt: "CleanPro Mop in action",
//   },
//   {
//     src: "/ergonomic-mop-handle-with-spray-function.png",
//     alt: "Ergonomic design features",
//   },
//   {
//     src: "/360-degree-rotating-mop-head-cleaning-corners.png",
//     alt: "360° rotating head",
//   },
//   // {
//   //   src: "/microfiber-mop-pads-comparison-dirty-vs-clean.png",
//   //   alt: "Microfiber technology comparison",
//   // },
//   // {
//   //   src: "/spray-mop-cleaning-kitchen-tiles.png",
//   //   alt: "Kitchen cleaning demonstration",
//   // },
//   // {
//   //   src: "/mop-bucket-with-wringer-system.png",
//   //   alt: "Advanced bucket system",
//   // },
//   // {
//   //   src: "/before-after-floor-cleaning-results.png",
//   //   alt: "Before and after results",
//   // },
//   // {
//   //   src: "/mop-storage-compact-design.png",
//   //   alt: "Compact storage solution",
//   // },
// ]

// export function HeroSection() {
//   const [currentImage, setCurrentImage] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % heroImages.length)
//     }, 4000)
//     return () => clearInterval(timer)
//   }, [])

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % heroImages.length)
//   }

//   const prevImage = () => {
//     setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
//   }

//   return (
//     <section className="relative min-h-screen overflow-hidden scroll-mt-16" id="hero">
//       {/* Background Image Carousel */}
//       <div className="absolute inset-0">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={currentImage}
//             src={heroImages[currentImage].src}
//             alt={heroImages[currentImage].alt}
//             className="w-full h-full object-cover"
//             initial={{ opacity: 0, scale: 1.1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             transition={{ duration: 0.5 }}
//           />
//         </AnimatePresence>

//         {/* Dark overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       {/* Static Content Overlay */}
//       <div className="relative z-10 min-h-screen flex items-center justify-center">
//         <div className="container mx-auto px-4 py-16">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-4xl mx-auto text-center space-y-8 text-white"
//           >
//             <div className="flex items-center justify-center gap-2 text-cyan-400">
//               <Sparkles className="h-5 w-5" />
//               <span className="text-sm font-medium">Revolutionary Cleaning Technology</span>
//             </div>

//             <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight">
//               The Future of
//               <span className="text-cyan-400"> Clean</span> is Here
//             </h1>

//             <p className="text-xl md:text-3xl text-gray-200 text-pretty leading-relaxed">
//               Say goodbye to traditional mops that just push dirt around. Our CleanPro Mop uses advanced microfiber
//               technology and 360° rotation to deliver spotless results every time.
//             </p>

//             <div className="flex items-center justify-center gap-4">
//               <div className="flex items-center gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                 ))}
//               </div>
//               <span className="text-sm text-gray-300">4.9/5 from 2,847 reviews</span>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link target="blank" href={"https://wa.me/+2347048667548"}>
//               <Button size="lg" className="text-lg px-8 py-6 bg-cyan-500 hover:bg-cyan-600 text-white">
//                 Order Now 
//               </Button>
//               </Link>
//               <Link target="blank" href={"https://wa.me/+2347048667548"}>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
//               >
//                 Watch Demo
//               </Button>
//               </Link>
//             </div>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-sm text-gray-300">
//               <div className="flex  items-center gap-2">
//                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//                 Free Shipping
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//                 30-Day Guarantee
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//                 2-Year Warranty
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Navigation Controls */}
//       <button
//         onClick={prevImage}
//         className="max-sm:hidden absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
//       >
//         <ChevronLeft className="h-6 w-6 text-white" />
//       </button>
//       <button
//         onClick={nextImage}
//         className="max-sm:hidden absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
//       >
//         <ChevronRight className="h-6 w-6 text-white" />
//       </button>

//       {/* Dots Indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
//         {heroImages.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentImage(index)}
//             className={`w-3 h-3 rounded-full transition-colors ${
//               index === currentImage ? "bg-cyan-400" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }
