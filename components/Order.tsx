"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { getWhatsAppDigits } from "@/lib/order"
import { toast } from "sonner"
import { useSearchParams } from "next/navigation"

export default function OrderFormSection() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNo: "",
    whatsappNo: "",
    state: "",
    city: "",
    deliveryAddress: "",
    order: "",
    availability: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<{ ok?: boolean; error?: string } | null>(null)
  // 12-hour countdown (in seconds) that persists across reloads
  const TWELVE_HOURS = 12 * 60 * 60
  const [remaining, setRemaining] = useState<number>(0)

  // Preselect package from query string e.g. /?pkg=regular#order
  useEffect(() => {
    const pkg = (searchParams.get("pkg") || "").toLowerCase()
    const valid = ["regular", "silver", "gold", "more"] as const
    if (pkg && (valid as readonly string[]).includes(pkg) && formData.order !== pkg) {
      setFormData((prev) => ({ ...prev, order: pkg }))
    }
  }, [searchParams, formData.order])

  // Countdown ticking effect using an absolute end time persisted in localStorage
  useEffect(() => {
    const key = "orderCountdownEnd"
    const now = Date.now()
    let end = 0

    const stored = typeof window !== "undefined" ? window.localStorage.getItem(key) : null
    if (stored) {
      const parsed = parseInt(stored)
      if (!Number.isNaN(parsed) && parsed > now) {
        end = parsed
      }
    }
    if (!end) {
      end = now + TWELVE_HOURS * 1000
      try {
        window.localStorage.setItem(key, String(end))
      } catch { }
    }

    // initialize remaining immediately
    setRemaining(Math.max(0, Math.floor((end - Date.now()) / 1000)))

    const id = setInterval(() => {
      const diff = Math.max(0, Math.floor((end - Date.now()) / 1000))
      setRemaining(diff)
      if (diff <= 0) {
        clearInterval(id)
      }
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const hours = Math.floor(remaining / 3600)
  const minutes = Math.floor((remaining % 3600) / 60)
  const seconds = remaining % 60
  const pad = (n: number) => n.toString().padStart(2, "0")

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setResult(null)

    // Map selected order to package details
    const pkgMap: Record<string, { id: string; name: string; description: string; price: number; originalPrice: number; savings: number }> = {
      regular: {
        id: "regular",
        name: "REGULAR",
        description: "Buy 1 get 1 mini mop free",
        price: 18000,
        originalPrice: 23000,
        savings: 5000,
      },
      silver: {
        id: "silver",
        name: "SILVER",
        description: "Buy 2 get one free + 2 free mini Mop",
        price: 32000,
        originalPrice: 46000,
        savings: 14000,
      },
      gold: {
        id: "gold",
        name: "GOLD",
        description: "Buy 3 get 2 free + 3 free mini Mop",
        price: 45000,
        originalPrice: 69000,
        savings: 24000,
      },
      more: {
        id: "more",
        name: "MORE",
        description: "Custom order (see details)",
        price: 0,
        originalPrice: 0,
        savings: 0,
      },
    }

    const selected = pkgMap[formData.order]
    if (!selected) {
      setSubmitting(false)
      setResult({ error: "Please select an order option." })
      return
    }

    try {
      const payload = {
        selectedPackage: { id: selected.id, name: selected.name },
        packageDetails: {
          description: selected.description,
          price: selected.price,
          originalPrice: selected.originalPrice,
          savings: selected.savings,
        },
        formData: {
          firstName: formData.firstName,
          lastName: "",
          email: formData.email,
          phone: formData.phoneNo,
          address: formData.deliveryAddress,
          city: formData.city,
          state: formData.state,
          zipCode: "",
          whatsappNo: formData.whatsappNo,
          availability: formData.availability,
        },
      }

      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Failed to send order")

      // Send Facebook CAPI event
      try {
        await fetch('/api/fb-capi', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'Purchase',
            email: formData.email,
            value: selected.price,
            currency: 'NGN',
            // Add any additional tracking data needed
          }),
        });
      } catch (error) {
        console.error('Error sending Facebook event:', error);
        // Don't fail the order if FB tracking fails
      }

      // Redirect to thank you page with order details
      // ✅ Redirect to thank you page with email included
      const orderNumber = `ORD-${Date.now().toString().slice(-8)}`
      const params = new URLSearchParams({
        order: orderNumber,
        amount: selected.price.toString(),
        package: selected.name,
        email: formData.email, // ✅ Add email to URL
        phone: formData.phoneNo, // ✅ Add phone to URL
      });

      window.location.href = `/thank-you?${params.toString()}`

    } catch (err: any) {
      setResult({ error: err?.message || "Unknown error" })
      toast.error("Failed to submit order", {
        description: err?.message || "Unknown error",
      })
    } finally {
      setSubmitting(false)
      setFormData({
        firstName: "",
        email: "",
        phoneNo: "",
        whatsappNo: "",
        state: "",
        city: "",
        deliveryAddress: "",
        order: "",
        availability: "",
      })
    }
  }

  return (
    <section id="order" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">Fill The Form Below To Make Your Order</h2>

          <div className="space-y-4 text-gray-700 max-w-5xl mx-auto">
            <p className="text-lg">
              Please fill the form below with your details and our delivery personnel will contact you with your
              package.
            </p>

            <p className="text-base">
              Note – Make sure you are FULLY ready for the product and that the money payable at the time of delivery is
              available before ordering or you are ready to transfer to the dispatch rider.
            </p>

            <p className="text-base font-semibold uppercase">
              PLEASE DO NOT FILL THE FORM IF YOU ARE NOT READY TO RECEIVE AND PAY FOR YOUR PACKAGE OR IF YOU WILL BE
              TRAVELING OUT OF TOWN.
            </p>

            <p className="text-base font-medium">PLACE YOUR ORDER NOW AS THE PRICE GO OFF IN...</p>
            {/* Countdown */}
            <div className="flex items-center justify-center gap-4 mt-4">
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
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-base font-medium">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                placeholder="Enter Your First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-medium">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="h-12"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phoneNo" className="text-base font-medium">
                Phone No <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phoneNo"
                placeholder="Mobile Number"
                value={formData.phoneNo}
                onChange={(e) => handleInputChange("phoneNo", e.target.value)}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsappNo" className="text-base font-medium">
                Whatsapp No <span className="text-red-500">*</span>
              </Label>
              <Input
                id="whatsappNo"
                placeholder="Mobile Number"
                value={formData.whatsappNo}
                onChange={(e) => handleInputChange("whatsappNo", e.target.value)}
                required
                className="h-12"
              />
            </div>
          </div>

          {/* Address Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Address</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="state" className="text-base font-medium">
                  State <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city" className="text-base font-medium">
                  City <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  required
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="deliveryAddress" className="text-base font-medium">
                Delivery Address <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="deliveryAddress"
                placeholder="Delivery Address"
                value={formData.deliveryAddress}
                onChange={(e: any) => handleInputChange("deliveryAddress", e.target.value)}
                required
                className="min-h-[100px]"
              />
            </div>
          </div>

          {/* Order Selection */}
          <div className="space-y-4">
            <Label className="text-base font-medium">
              Order <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={formData.order}
              onValueChange={(value: any) => handleInputChange("order", value)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="regular" id="regular" />
                <Label htmlFor="regular" className="text-base cursor-pointer">
                  1 Mop for ⇒ ₦18,000
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="silver" id="silver" />
                <Label htmlFor="silver" className="text-base cursor-pointer">
                  2 Mops for ⇒ ₦32,000
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="gold" id="gold" />
                <Label htmlFor="gold" className="text-base cursor-pointer">
                  3 Mops for ⇒ ₦45,000
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="more" id="more" />
                <Label htmlFor="more" className="text-base cursor-pointer">
                  More
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Availability */}
          <div className="space-y-4">
            <Label className="text-base font-medium">
              When will you be available to receive your order? <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={formData.availability}
              onValueChange={(value: any) => handleInputChange("availability", value)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="today" id="today" />
                <Label htmlFor="today" className="text-base cursor-pointer">
                  Today
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="tomorrow" id="tomorrow" />
                <Label htmlFor="tomorrow" className="text-base cursor-pointer">
                  Tomorrow
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="next-tomorrow" id="next-tomorrow" />
                <Label htmlFor="next-tomorrow" className="text-base cursor-pointer">
                  Next Tomorrow
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6 space-y-2">
            <Button
              type="submit"
              disabled={submitting}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-none"
            >
              {submitting ? "Sending Order..." : "Place Your Order"}
            </Button>
            {result?.ok && (
              <p className="text-green-600 text-sm">Order sent successfully. We'll contact you shortly.</p>
            )}
            {result?.error && (
              <p className="text-red-600 text-sm">Failed to send order: {result.error}</p>
            )}
          </div>
        </motion.form>

        {/* Bulk Orders Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 space-y-4"
        >
          <h3 className="text-2xl font-bold text-red-600">Want To Make Bulk Orders Or Enquires?</h3>
          <p className="text-gray-700">Click on the Whatsapp Icon to send a message to us on whatsapp</p>

          <div className="flex justify-center">
            <a
              href={`https://api.whatsapp.com/send?phone=${getWhatsAppDigits()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full transition-colors"
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
