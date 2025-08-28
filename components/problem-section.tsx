"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const problemPoints = [
    "Mops that push dirt around instead of picking it up",
    "Soggy, smelly mop heads that take forever to dry",
    "Dirty water making your floor even worse",
    "Struggling to squeeze out water with your hands",
    "Buying multiple cleaning tools just to get the job done",
]

export default function ProblemSection() {
    // Simple autoplay testimonial carousel data
    const testimonials = [
        {
            name: "Chioma A., Lagos",
            avatar: "/mod1.jpg",
            rating: 5,
            text:
                "Bending down and wringing a mop was impossible after my surgery. This mop lets me clean with minimal effort! I love how it rotates and does the hard work.",
        },
        {
            name: "Hassan B., Abuja",
            avatar: "/mod2.jpg",
            rating: 5,
            text:
                "I used to dread mopping. Now it’s quick and satisfying. The self-wringing feature keeps my hands dry and floors spotless.",
        },
        {
            name: "Amaka O., Enugu",
            avatar: "/mod3.jpg",
            rating: 5,
            text:
                "Great for tiles and wooden floors. It glides smoothly and dries fast. I ordered an extra set for my mum!",
        },
    ]
    const [current, setCurrent] = useState(0)
    useEffect(() => {
        const id = setInterval(() => {
            setCurrent((i) => (i + 1) % testimonials.length)
        }, 4000)
        return () => clearInterval(id)
    }, [testimonials.length])
    return (
        <section className="py-16 px-4 bg-white">
            <div className=" container mx-auto ">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="container  text-center mx-auto text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-8 leading-tight"
                >
                    Tired of Mops That Leave Streaks, Drip Water Everywhere & Take Forever to Dry?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-gray-700 mb-2"
                >
                    Same here, cleaning your home shouldn't feel like a workout.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-700 mb-2"
                >
                    Yet, traditional mops and other cleaning methods make it harder than it needs to be.
                </motion.p>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-[18px] font-bold text-gray-900 mb-3"
                >
                    Do any of these sound familiar?
                </motion.h3>

                <div className=" mx-auto mb-3">
                    {problemPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            className="flex items-start gap-3 mb-2 text-left"
                        >
                            <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-lg max-sm:text-base">{point}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="text-lg text-gray-700 mb-6"
                >
                    You're not alone. Thousands of people struggle daily with these issues—until they find{" "}
                    <span className="font-bold text-gray-900">THE ULTIMATE SELF-WRINGING MOP!</span>
                </motion.p>

                <div className="grid grid-cols-1 w-fit mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="relative"
                    >
                        <Image
                            src="/mod6.jpg"
                            alt="Traditional mop problems"
                            width={300}
                            height={300}
                            className="rounded-lg w-full h-fit sm:h-[500px] sm:w-[500px]"
                        />
                    </motion.div>
                </div>

                {/* autoplay testimonial carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto my-8"
                >
                    <div className="border border-gray-200 rounded-xl bg-white shadow-sm p-4 sm:p-6">
                        <div className="flex items-start gap-3">
                            <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-white/40 flex-shrink-0">
                                <Image src={testimonials[current].avatar} alt={testimonials[current].name} width={40} height={40} className="h-full w-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold text-gray-900 truncate">{testimonials[current].name}</p>
                                    <div className="text-yellow-500 text-sm" aria-label={`${testimonials[current].rating} stars`}>
                                        {"★★★★★".slice(0, testimonials[current].rating)}
                                    </div>
                                </div>
                                <p className="text-gray-700 mt-2">{testimonials[current].text}</p>
                            </div>
                        </div>
                    </div>
                    {/* dots */}
                    <div className="flex justify-center gap-2 mt-3">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-2 w-2 rounded-full ${i === current ? "bg-gray-900" : "bg-gray-300"}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* imagine  */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="container mt-20 text-center mx-auto text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-8 leading-tight"
                >
                    Imagine a World Where Mopping Is Effortless and Even Enjoyable…
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-gray-700 mb-2"
                >
                    No bending, no wringing, no touching dirty water.
                </motion.p>

                <div className="grid grid-cols-1 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="relative"
                    >
                        <img decoding="async" width="640" height="640" src="https://kadimashop.store/wp-content/uploads/2025/04/stresscleaning.gif" alt="" />
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-gray-700 mb-6 pt-5"
                >
                    Picture this: You glide your mop effortlessly across the floor, and in just seconds, every speck of dust, dirt, and spill disappears. No bending, no wringing, no touching dirty water.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-gray-700 mb-2"
                >
                    The mop does all the work for you. Your floors dry instantly, leaving your home fresh, clean, and spotless. Cleaning no longer feels like a chore—it’s quick, easy, and satisfying!
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-gray-700 mb-2"
                >
                    Sounds too good to be true? Not anymore!
                </motion.p>

                <div className="grid grid-cols-1 max-w-3xl justify-center mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="relative"
                    >
                        <img decoding="async" width="300" height="300" src="https://kadimashop.store/wp-content/uploads/2025/03/YouCut_20241106_122354696-ezgif.com-resize.webp" alt="" srcSet="https://kadimashop.store/wp-content/uploads/2025/03/YouCut_20241106_122354696-ezgif.com-resize.webp 300w, https://kadimashop.store/wp-content/uploads/2025/03/YouCut_20241106_122354696-ezgif.com-resize-150x150.webp 150w, https://kadimashop.store/wp-content/uploads/2025/03/YouCut_20241106_122354696-ezgif.com-resize-100x100.webp 100w, https://kadimashop.store/wp-content/uploads/2025/03/YouCut_20241106_122354696-ezgif.com-resize-200x200.webp 200w" sizes="(max-width: 300px) 100vw, 300px" />
                    </motion.div>
                </div>

                {/* into-solution */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="container mt-20 text-center mx-auto text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-8 leading-tight"
                >
                    Introducing the Revolutionary Self-Wringing Mop – The Only Mop You’ll Ever Need!
                </motion.h2>

                <div>
                    <div className="grid grid-cols-1 max-w-[300px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="relative"
                        >
                            <Image
                                src="/intro1.jpg"
                                alt="Traditional mop problems"
                                width={300}
                                height={300}
                                className="rounded-lg w-full h-fit"
                            />
                        </motion.div>
                    </div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-gray-700  py-5"
                >
                    Say goodbye to messy, back-breaking cleaning!
                </motion.p>

                <div className="flex  mx-auto justify-center ">
                    <div className="grid grid-cols-1 max-w-[400px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="relative w-full h-full mb-3 "
                        >
                          <Image
                                src="/mod7.jpg"
                                alt="Traditional mop problems"
                                width={300}
                                height={300}
                                className="rounded-lg w-fit h-[300px] object-contain  "
                            />
                        </motion.div>
                    </div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-gray-700 "
                >
                    This innovative mop is designed to make your cleaning effortless, faster, and more hygienic.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-gray-700 mb-2"
                >
                    Whether you’re tackling dust, spills, or tough stains, this mop does it ALL with zero hassle!
                </motion.p>

                <div className="flex  mx-auto justify-center py-5">
                    <div className="grid grid-cols-1 max-w-[500px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="relative"
                        >
                            <img loading="lazy" decoding="async" width="300" height="300" src="https://kadimashop.store/wp-content/uploads/2025/03/YouCut_20241106_121705107-ezgif.com-resize.webp" alt="" srcSet="https://kadimashop.store/wp-content/uploads/2025/03/YouCut_20241106_121705107-ezgif.com-resize.webp 300w, https://kadimashop.store/wp-content/uploads/2025/03/YouCut_20241106_121705107-ezgif.com-resize-150x150.webp 150w, https://kadimashop.store/wp-content/uploads/2025/03/YouCut_20241106_121705107-ezgif.com-resize-100x100.webp 100w, https://kadimashop.store/wp-content/uploads/2025/03/YouCut_20241106_121705107-ezgif.com-resize-200x200.webp 200w" sizes="(max-width: 300px) 100vw, 300px" />
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    )
}
