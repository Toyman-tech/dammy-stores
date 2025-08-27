"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { buildPackageMessage, openWhatsApp } from "@/lib/order"

export default function PricingSection() {
    const pricingTiers = [
        {
            name: "REGULAR",
            topDeal: "BUY 1 GET 1 MINI MOP FREE",
            banner: "BUY 1 GET 1 MINI MOP FREE",
            image: "/package1.jpg",
            features: ["ONE SELF-WRINGING MOP", "ONE FREE MINI MOP", "FREE SHIPPING", "EASY RETURN POLICY"],
            price: "₦34,000",
            normalPrice: "₦45,000",
            savings: "₦11,000",
            isPopular: false,
        },
        {
            name: "SILVER",
            topDeal: "BUY 2 GET ONE FREE + 2 FREE MINI MOP",
            banner: "BUY 2 GET 1 FREE + 2 MINI MOPS",
            image: "/package2.jpg",
            features: [
                "2 SELF-WRINGING MOPS",
                "1 EXTRA SELF-WRINGING MOP",
                "2 FREE MINI MOPS",
                "FREE SHIPPING",
                "EASY RETURN POLICY",
                "PERFECT FOR GIFTING ",
            ],
            price: "₦68,000",
            normalPrice: "₦102,000",
            savings: "₦34,000",
            isPopular: true,
        },
        {
            name: "GOLD",
            topDeal: "BUY 3 GET 2 FREE + 3 FREE MINI MOP",
            banner: "BUY 3 GET 2 FREE + 3 MINI MOPS",
            image: "/package3.jpg",
            features: [
                "3 SELF-WRINGING MOPS",
                "2 EXTRA SELF-WRINGING MOP",
                "3 FREE MINI MOPS",
                "FREE SHIPPING",
                "PERFECT FOR MANAGING MULTIPLE SPACES",
                "PERFECT FOR GIFTING ",
            ],
            price: "₦102,000",
            normalPrice: "₦170,000",
            savings: "₦68,000",
            isPopular: false,
        },
    ]

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* choose your package */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#C61313] mb-4">
                        Choose Your Package
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-gray-700 mb-6"
                >
                    I know you’re probably thinking, “I just need one mop for my home.” But let’s pause for a second—have you considered all the places you might actually need one?
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-700 mb-6"
                >
                    🏡 Your Home – Of course, that’s a given. But what happens when your mop gets dirty or needs washing? Having a backup saves you the hassle.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-700 mb-6"
                >
                    🛍 Your Business or Shop – Whether it’s a salon, boutique, or grocery store, a clean space makes your customers feel comfortable. A messy floor? That’s bad for business.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-700 mb-6"
                >
                    🏨 Hotels & Short-Lets – If you manage a rental, you already know—cleaning is constant. The faster and easier it is, the better for you and your guests.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-700 mb-6"
                >
                    ⛪️🕌 Churches & Mosques – High-traffic places need frequent cleaning. This mop makes the process quick, efficient, and stress-free.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-700 mb-6"
                >
                    🍽 Restaurants & Cafés – Spills happen daily. A mop that cleans effortlessly means you or your staff won’t waste time struggling with dirty floors.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-700 mb-6"
                >
                    🏫 Schools & Offices – With people walking in and out all day, a hygienic, hands-free cleaning tool keeps everything looking neat without much effort.
                </motion.p>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl pt-5  font-bold text-[#D28600] mb-2">
                        Get More, Save More! (And Never Worry About Cleaning Again!)
                    </h2>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg m-5 text-gray-700 mb-6"
                >
                    Instead of buying one now and realizing later that you need another, grab a bigger package and save BIG!
                </motion.p>
                {/* Silver/Gold explainer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid md:grid-cols-2 gap-6 mb-10"
                >
                    <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
                        <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Silver Package – Buy 2, Get 1 Free!</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>One for your home, one for your workplace—no stress!</li>
                            <li>Keep a spare so you never get stuck</li>
                            <li>Or gift one to someone who needs it!</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
                        <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Gold Package – Buy 3, Get 2 Free!</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Perfect for those who manage multiple spaces</li>
                            <li>One for your home, business, and rental property—all sorted!</li>
                            <li>Ideal for hotels, churches, or cleaning staff</li>
                        </ul>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg m-5 text-gray-700 mb-6"
                >
                    <span className="font-bold">🚨 Trust me—you don’t want to regret not grabbing this deal.</span> Get yours now while this offer is still available! <span className="font-bold">[ORDER NOW] ⏳</span>
                </motion.p>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Popular Badge */}
                            {tier.isPopular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">MOST POPULAR</div>
                                </div>
                            )}

                            <div className="bg-[#2A2420] rounded-3xl p-6 h-full flex flex-col relative overflow-hidden">
                                {/* Header */}
                                <div className="text-center mb-4">
                                    <h3 className="text-white text-2xl font-bold mb-2">{tier.name}</h3>
                                    <p className="text-white text-sm font-medium">{tier.topDeal}</p>
                                </div>

                                {/* Red Banner */}
                                {/* <div className="bg-red-600 text-white text-center py-2 px-4 rounded-lg mb-4">
                                    <span className="font-bold text-sm">{tier.banner}</span>
                                </div> */}

                                {/* Product Image */}
                                <div className="bg-gray-200 rounded-lg mb-6 min-h-[200px] flex items-center justify-center">
                                    <Image
                                        src={tier.image || "/placeholder.svg"}
                                        alt={`${tier.name} bundle`}
                                        width={300}
                                        height={200}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Features */}
                                <div className="space-y-3 mb-6 flex flex-col w-full text-center items-center">
                                    {tier.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex justify-center items-center w-full text-center gap-3">
                                            <div className="bg-green-500 rounded-full p-1 flex-shrink-0">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-white text-[18px] font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Pricing */}
                                <div className="text-center mb-6">
                                    <div className="text-white text-4xl font-bold mb-2">{tier.price}</div>
                                    <div className="text-red-500 text-lg  mb-1">NORMAL PRICE: {tier.normalPrice}</div>
                                    <div className="text-yellow-400 text-lg font-bold">SAVE: {tier.savings}</div>
                                </div>

                                {/* CTA Button */}
                                <Button
                                    className="w-full bg-[#3EC381] hover:bg-green-600 text-white font-bold py-3 rounded-none mb-4"
                                    onClick={() => {
                                        const message = buildPackageMessage({
                                            name: tier.name,
                                            price: tier.price,
                                            source: "PricingSection",
                                        })
                                        openWhatsApp(message)
                                    }}
                                >
                                    Place Your Order
                                </Button>

                                {/* Urgency Text */}
                                {/* <p className="text-white text-xs text-center">Order Before 11:59pm Today & Get Free Shipping</p> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
