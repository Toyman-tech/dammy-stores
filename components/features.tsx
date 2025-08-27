"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { buildPackageMessage, openWhatsApp } from "@/lib/order"

export default function FeaturesSection() {
    return (
        <div>
            <section className="bg-[#3D8D7A] py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-[#DACC23] text-center mb-12"
                    >
                        Why you'll LOVE This Mop
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-start max-sm:align-center justify-between max-sm:justify-center mt-5 mb-12 gap-8 w-full max-sm:items-center"
                    >
                        <div className="max-sm:align-middle max-sm:text-center flex items-start align-start h-full gap-4 flex-1">
                            <div className="max-sm:hidden bg-green-400  rounded-none p-2 flex-shrink-0">
                                <Check className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#DACC23] mb-4">
                                    Hands-Free Wringer System
                                </h3>
                                <p className="text-white max-w-xl text-lg leading-relaxed">
                                    No more squeezing dirty water with your hands! Just twist and wring effortlessly.
                                </p>
                            </div>
                        </div>
                        <div className="max-sm:flex relative max-sm:justify-center max-sm:w-full">
                            <Image
                                src="/why1.jpg"
                                alt="Traditional mop problems"
                                width={500} 
                                height={300}
                                className="rounded-lg h-[350px] w-[300px]"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col lg:flex-row items-start max-sm:align-center justify-between max-sm:justify-center mt-5 mb-12 gap-8 w-full max-sm:items-center"
                    >
                        <div className="max-sm:align-middle max-sm:text-center flex items-start align-start h-full gap-4 flex-1">
                            <div className="max-sm:hidden bg-green-400  rounded-none p-2 flex-shrink-0">
                                <Check className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#DACC23] mb-4">
                                    Ultra-Absorbent Microfiber Head
                                </h3>
                                <p className="text-white max-w-xl text-lg leading-relaxed">
                                    Traps dust, dirt, and spills in one swipe, leaving your floors spotless.
                                </p>
                            </div>
                        </div>
                        <div className="max-sm:flex relative max-sm:justify-center max-sm:w-full">
                            <Image
                                src="/why2.jpg"
                                alt="Traditional mop problems"
                                width={500}
                                height={300}
                                className="rounded-lg h-[350px] w-[300px]"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col lg:flex-row items-start max-sm:align-center justify-between max-sm:justify-center mt-5 mb-12 gap-8 w-full max-sm:items-center"
                    >
                        <div className="max-sm:align-middle max-sm:text-center flex items-start align-start h-full gap-4 flex-1">
                            <div className="max-sm:hidden bg-green-400  rounded-none p-2 flex-shrink-0">
                                <Check className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#DACC23] mb-4">
                                    360° Rotating Head
                                </h3>
                                <p className="text-white max-w-xl text-lg leading-relaxed">
                                    Reaches tight corners, under furniture, and even baseboards with ease.
                                </p>
                            </div>
                        </div>
                        <div className="max-sm:flex relative max-sm:justify-center max-sm:w-full">
                            <Image
                                src="/why3.jpg"
                                alt="Traditional mop problems"
                                width={500}
                                height={300}
                                className="rounded-lg h-[350px] w-[300px]"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col lg:flex-row items-start max-sm:align-center justify-between max-sm:justify-center mt-5 mb-12 gap-8 w-full max-sm:items-center"
                    >
                        <div className="max-sm:align-middle max-sm:text-center flex items-start align-start h-full gap-4 flex-1">
                            <div className="max-sm:hidden bg-green-400  rounded-none p-2 flex-shrink-0">
                                <Check className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#DACC23] mb-4">
                                    Wet & Dry Functionality
                                </h3>
                                <p className="text-white max-w-xl text-lg leading-relaxed">
                                    Use it wet for deep cleaning or dry to pick up dust and hair.
                                </p>
                            </div>
                        </div>
                        <div className="max-sm:flex relative max-sm:justify-center max-sm:w-full">
                            <Image
                                src="/why4.jpg"
                                alt="Traditional mop problems"
                                width={500}
                                height={300}
                                className="rounded-lg h-[350px] w-[300px]"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col lg:flex-row items-start max-sm:align-center justify-between max-sm:justify-center mt-5 mb-12 gap-8 w-full max-sm:items-center"
                    >
                        <div className="max-sm:align-middle max-sm:text-center flex items-start align-start h-full gap-4 flex-1">
                            <div className="max-sm:hidden bg-green-400  rounded-none p-2 flex-shrink-0">
                                <Check className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#DACC23] mb-4">
                                    Super Lightweight & Easy to Maneuver
                                </h3>
                                <p className="text-white max-w-xl text-lg leading-relaxed">
                                    Clean without heavy lifting or fatigue.
                                </p>
                            </div>
                        </div>
                        <div className="max-sm:flex relative max-sm:justify-center max-sm:w-full">
                            <Image
                                src="/why2.jpg"
                                alt="Traditional problems"
                                width={500}
                                height={300}
                                className="rounded-lg h-[350px] w-[300px]"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col lg:flex-row items-start max-sm:align-center justify-between max-sm:justify-center mt-5 mb-12 gap-8 w-full max-sm:items-center"
                    >
                        <div className="max-sm:align-middle max-sm:text-center flex items-start align-start h-full gap-4 flex-1">
                            <div className="max-sm:hidden bg-green-400  rounded-none p-2 flex-shrink-0">
                                <Check className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#DACC23] mb-4">
                                    Dries Quickly & Eliminates Odors
                                </h3>
                                <p className="text-white max-w-xl text-lg leading-relaxed">
                                    No more smelly, bacteria-infested mops sitting in your home.
                                </p>
                            </div>
                        </div>
                        <div className="max-sm:flex relative max-sm:justify-center max-sm:w-full">
                            <Image
                                src="/why6.jpg"
                                alt="Traditional mop problems"
                                width={500}
                                height={300}
                                className="rounded-lg h-[350px] w-[300px]"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col lg:flex-row items-start max-sm:align-center justify-between max-sm:justify-center mt-5 mb-12 gap-8 w-full max-sm:items-center"
                    >
                        <div className="max-sm:align-middle max-sm:text-center flex items-start align-start h-full gap-4 flex-1">
                            <div className="max-sm:hidden bg-green-400  rounded-none p-2 flex-shrink-0">
                                <Check className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#DACC23] mb-4">
                                    Safe for All Floor Types
                                </h3>
                                <p className="text-white max-w-xl text-lg leading-relaxed">
                                    Works on tile, hardwood, marble, laminate, and more without damage!
                                </p>
                            </div>
                        </div>
                        <div className="max-sm:flex relative max-sm:justify-center max-sm:w-full">
                            <Image
                                src="/why7.jpg"
                                alt="Traditional mop problems"
                                width={500}
                                height={300}
                                className="rounded-lg h-[350px] w-[300px]"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col lg:flex-row items-start max-sm:align-center justify-between max-sm:justify-center mt-5 mb-12 gap-8 w-full max-sm:items-center"
                    >
                        <div className="max-sm:align-middle max-sm:text-center flex items-start align-start h-full gap-4 flex-1">
                            <div className="max-sm:hidden bg-green-400  rounded-none p-2 flex-shrink-0">
                                <Check className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#DACC23] mb-4">
                                    Long-Lasting & Reusable Mop Head
                                </h3>
                                <p className="text-white max-w-xl text-lg leading-relaxed">
                                    Save money on replacements and reduce waste.
                                </p>
                            </div>
                        </div>
                        <div className="max-sm:flex relative max-sm:justify-center max-sm:w-full">
                            <Image
                                src="/why8.jpg"
                                alt="Traditional mop problems"
                                width={500}
                                height={300}
                                className="rounded-lg h-[350px] w-[300px]"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col lg:flex-row items-start max-sm:align-center justify-between max-sm:justify-center mt-5 mb-12 gap-8 w-full max-sm:items-center"
                    >
                        <div className="max-sm:align-middle max-sm:text-center flex items-start align-start h-full gap-4 flex-1">
                            <div className="max-sm:hidden bg-green-400  rounded-none p-2 flex-shrink-0">
                                <Check className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#DACC23] mb-4">
                                    The Perfect Gift for Your Loved Ones
                                </h3>
                                <p className="text-white max-w-xl text-lg leading-relaxed">
                                    Surprise your loved ones with a cleaning tool that makes
                                    <br />
                                    their life easier and their home spotless!
                                </p>
                            </div>
                        </div>
                        <div className="max-sm:flex relative max-sm:justify-center max-sm:w-full">
                            <Image
                                src="/why9.jpg"
                                alt="Traditional mop problems"
                                width={500}
                                height={300}
                                className="rounded-lg h-[150px] w-[300px]"
                            />
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Product Features */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-6"
                        >
                            {/* Suspension Design Card */}
                            <div className="bg-white rounded-lg p-2">
                                <div className="grid grid-cols-1 w-full gap-2 mb-1">
                                    <Image
                                        src="/hero4.jpg"
                                        alt="Mop suspension design"
                                        width={300}
                                        height={300}
                                        className="rounded-lg w-full"
                                    />

                                </div>
                            </div>

                        </motion.div>

                        {/* Center Column - Product Parameters */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-6"
                        >
                            {/* Product Parameters Table */}
                            {/* <div className="bg-white rounded-lg p-6">
                                <h3 className="flex justify-center text-2xl font-bold tex-center w-full text-gray-800 mb-6">Product parameters</h3>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-600">Product name:</p>
                                            <p className="font-semibold">Upgraded bamboo fiber mop</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Product material:</p>
                                            <p className="font-semibold">Stainless steel/bamboo fiber/PP</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-600">Product color:</p>
                                            <p className="font-semibold">Dark Gray</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Product Size:</p>
                                            <p className="font-semibold">Length 134CM</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* Product Demo Image */}
                            <div className="bg-white rounded-lg p-4">
                                <Image
                                    src="/why10.jpg"
                                    alt="Mop product demonstration"
                                    width={400}
                                    height={500}
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </motion.div>

                        {/* Right Column - Product Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="space-y-6"
                        >
                            <div className="bg-white rounded-lg p-6">
                                {/* <h3 className="text-2xl font-bold text-gray-800 mb-6">PRODUCT DETAILS</h3> */}

                                <div className="space-y-6">
                                    {/* Hanging Design */}
                                    <div className="flex relative w-full gap-4">
                                        <Image
                                            src="/why11.jpg"
                                            alt="Hanging design"
                                            width={300}
                                            height={300}
                                            className="rounded-lg w-full"
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="mt-8 w-full justify-center flex">
                                <Button
                                    className="max-w-[250px] shadow-2xl shadow-black w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 text-lg rounded-lg"
                                    onClick={() => {
                                        const message = buildPackageMessage({
                                            name: "Self-Wringing Mop",
                                            source: "FeaturesSection",
                                        })
                                        openWhatsApp(message)
                                    }}
                                >
                                    Place Your Order
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* how it works  */}

            {/* how it works  */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-[#FF0000] text-center mb-12"
                    >
                        See How it works in Action
                    </motion.h2>

                    {/* YouTube Video Component */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative w-full max-w-4xl mx-auto cursor-pointer group"
                        onClick={() => window.open('https://www.youtube.com/watch?v=zxouUSrFLbs', '_blank')}
                    >
                        {/* Video thumbnail container */}
                        <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
                            {/* Background image */}
                            <div
                                className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
                                style={{
                                    backgroundImage: 'url("https://i.ytimg.com/vi/zxouUSrFLbs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHOBYACgAqKAgwIABABGFMgXChlMA8=&rs=AOn4CLDBeQUwKtSa5whDhSyvhy9nIE3yAw")'
                                }}
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300" />

                            {/* Play button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                                    </svg>
                                </div>
                            </div>

                            {/* YouTube logo */}
                            <div className="absolute top-4 right-4 opacity-80">
                                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </div>

                            {/* Video title overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-lg font-semibold">Watch the Ultimate Mop in Action!</h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Optional: Call to action below video */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center mt-8"
                    >
                        <p className="text-gray-600 text-lg mb-6">
                            See for yourself why thousands of customers love this revolutionary mop!
                        </p>
                        <Button
                            className="bg-[#FF0000] hover:bg-red-700 text-white font-bold py-4 px-8 text-lg rounded-lg shadow-lg"
                            onClick={() => {
                                const message = buildPackageMessage({
                                    name: "Self-Wringing Mop",
                                    source: "FeaturesSection-VideoCTA",
                                })
                                openWhatsApp(message)
                            }}
                        >
                            Order Yours Today
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/*  */}
        </div>
    )
}
