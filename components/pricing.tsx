"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function PricingSection() {
    const router = useRouter()
    // persistent 12-hour countdown for free delivery banner
    const TWELVE_HOURS = 12 * 60 * 60
    const [remaining, setRemaining] = useState(0)
    useEffect(() => {
        const key = "freeShippingCountdownEnd"
        const now = Date.now()
        let end = 0
        const stored = typeof window !== "undefined" ? window.localStorage.getItem(key) : null
        if (stored) {
            const parsed = parseInt(stored)
            if (!Number.isNaN(parsed) && parsed > now) end = parsed
        }
        if (!end) {
            end = now + TWELVE_HOURS * 1000
            try { window.localStorage.setItem(key, String(end)) } catch { }
        }
        setRemaining(Math.max(0, Math.floor((end - Date.now()) / 1000)))
        const id = setInterval(() => {
            const diff = Math.max(0, Math.floor((end - Date.now()) / 1000))
            setRemaining(diff)
            if (diff <= 0) clearInterval(id)
        }, 1000)
        return () => clearInterval(id)
    }, [])
    const hours = Math.floor(remaining / 3600)
    const minutes = Math.floor((remaining % 3600) / 60)
    const seconds = remaining % 60
    const pad = (n: number) => n.toString().padStart(2, "0")
    const pricingTiers = [
        {
            name: "REGULAR",
            topDeal: "BUY 1 GET 1 MINI MOP FREE",
            banner: "1 MOP",
            image: "/package1.png",
            features: ["FREE SHIPPING", "EASY RETURN POLICY"],
            price: "₦18,000",
            normalPrice: "₦23,000",
            savings: "₦5,000",
            isPopular: false,
        },
        {
            name: "SILVER",
            topDeal: "BUY 2 GET ONE FREE + 2 FREE MINI MOP",
            banner: "2 MOPS",
            image: "/package2.jpg",
            features: [
                "FREE SHIPPING",
                "EASY RETURN POLICY",
                "PERFECT FOR GIFTING ",
            ],
            price: "₦32,000",
            normalPrice: "₦46,000",
            savings: "₦14,000",
            isPopular: true,
        },
        {
            name: "GOLD",
            topDeal: "3 MOPS",
            banner: "3 MOPS",
            image: "/package3.jpg",
            features: [
                "FREE SHIPPING",
                "PERFECT FOR MANAGING MULTIPLE SPACES",
                "PERFECT FOR GIFTING ",
            ],
            price: "₦45,000",
            normalPrice: "₦69,000",
            savings: "₦24,000",
            isPopular: false,
        },
    ]

    return (
        <section className="py-2 bg-white">

            {/* Free delivery banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 bg-gray-100 rounded-xl py-8 px-4"
            >
                <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 mb-3">
                    DO YOU WANT FREE DELIVERY?
                </h2>
                <p className="font-semibold mb-4">
                    Order Before <span className="underline">11:59pm Today</span> & Get Free Shipping
                </p>
                <div className="max-w-4xl mx-auto text-gray-800 space-y-3 mb-6">
                    <p>We’ve arranged a special delivery service for a limited number of customers who order before the countdown hits zero.</p>
                    <p>Instead of paying ₦4,000 for Lagos or ₦8,000 for Nationwide – order now and get free delivery.</p>
                    <p>If you’re interested in this <span className="font-semibold">Self‑Wringing Mop</span>, then you should order now to get the free shipping.</p>
                </div>
                {/* Countdown */}
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="bg-orange-500 text-white rounded-md px-6 py-4 text-center">
                        <div className="text-4xl font-extrabold leading-none">{pad(hours)}</div>
                        <div className="text-sm mt-1 uppercase tracking-wide">Hours</div>
                    </div>
                    <div className="bg-orange-500 text-white rounded-md px-6 py-4 text-center">
                        <div className="text-4xl font-extrabold leading-none">{pad(minutes)}</div>
                        <div className="text-sm mt-1 uppercase tracking-wide">Minutes</div>
                    </div>
                    <div className="bg-orange-500 text-white rounded-md px-6 py-4 text-center">
                        <div className="text-4xl font-extrabold leading-none">{pad(seconds)}</div>
                        <div className="text-sm mt-1 uppercase tracking-wide">Seconds</div>
                    </div>
                </div>
                <Button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-md shadow-md"
                    onClick={() => router.push('/?pkg=regular#order')}
                >
                    Yes!! I Want The Free Shipping
                </Button>
            </motion.div>
            <div className="max-w-7xl mx-auto px-4">
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
                    You might think you only need one… until you realize you also need to mop.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-700 mb-6"
                >
                    🏡 Your Home
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-700 mb-6"
                >
                    🛍 Your shop or salon.
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
                    ⛪️🕌 Your Airbnb or mosque.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-700 mb-6"
                >
                    🍽 Your restaurant or café.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-700 mb-6"
                >
                    🏫 Your school, office or clinic.
                </motion.p>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <h2 className="text-3xl md:text-4xl pt-5  font-bold text-[#D28600] mb-2">
                        SO WHY NOT GET MORE AND SAVE BIG?
                    </h2>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg m-5 text-gray-700 mb-3"
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
                        <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Silver Package </h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>One for your home, one for your workplace—no stress!</li>
                            <li>Keep a spare so you never get stuck</li>
                            <li>Or gift one to someone who needs it!</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
                        <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Gold Package </h3>
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
                                    <p className="text-white text-sm font-medium">{tier.banner}</p>
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
                                    onClick={() => router.push(`/?pkg=${tier.name.toLowerCase()}#order`)}
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
