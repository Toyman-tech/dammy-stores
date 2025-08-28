"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

const problemPoints = [
    "Mops that push dirt around instead of picking it up",
    "Soggy, smelly mop heads that take forever to dry",
    "Dirty water making your floor even worse",
    "Struggling to squeeze out water with your hands",
    "Buying multiple cleaning tools just to get the job done",
]

export default function ProblemSection() {
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
                    className="text-xl font-bold text-gray-900 mb-3"
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
                            <span className="text-gray-700 text-lg">{point}</span>
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
