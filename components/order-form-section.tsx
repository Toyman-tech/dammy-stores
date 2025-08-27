"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield, Truck, CreditCard, Lock } from "lucide-react"

// Plans aligned with PackagesSection
const packages = [
  {
    id: "regular",
    name: "REGULAR",
    price: 34000,
    originalPrice: 45000,
    savings: 11000,
    description: "Buy 1 get 1 mini mop free",
  },
  {
    id: "silver",
    name: "SILVER",
    price: 68000,
    originalPrice: 102000,
    savings: 34000,
    description: "Buy 2 get one free + 2 free mini Mop",
  },
  {
    id: "gold",
    name: "GOLD",
    price: 102000,
    originalPrice: 170000,
    savings: 68000,
    description: "Buy 3 get 2 free + 3 free mini Mop",
  },
]

export function OrderFormSection() {
  const [selectedPackage, setSelectedPackage] = useState("silver") // default to SILVER (Best Value)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    agreeToTerms: false,
  })

  const selectedPkg = packages.find((pkg) => pkg.id === selectedPackage)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Use same WhatsApp flow as PackagesSection
  const WHATSAPP_NUMBER = "+2347048667548" // can include '+'; we'll sanitize

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedPkg) return

    const { firstName, lastName, email, phone, address, city, state, zipCode } = formData
    const lines = [
      `New Order Inquiry` ,
      `\nCustomer:` ,
      `- Name: ${firstName} ${lastName}` ,
      `- Email: ${email}` ,
      `- Phone: ${phone}` ,
      `- Address: ${address}, ${city}, ${state} ${zipCode}` ,
      `\nSelected Package:` ,
      `- Plan: ${selectedPkg.name}` ,
      `- Description: ${selectedPkg.description}` ,
      `- Price: ₦${selectedPkg.price.toLocaleString()} (Original: ₦${selectedPkg.originalPrice.toLocaleString()}, Save: ₦${(selectedPkg.savings ?? (selectedPkg.originalPrice - selectedPkg.price)).toLocaleString()})` ,
    ]
    const message = lines.join("\n")
    const phoneDigits = WHATSAPP_NUMBER.replace(/[^0-9]/g, "")
    const url = `https://api.whatsapp.com/send?phone=${phoneDigits}&text=${encodeURIComponent(message)}`
    if (typeof window !== "undefined") {
      window.open(url, "_blank")
    }
  }

  return (
    <section className="py-24 bg-background" id="order">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Order Your
            <span className="text-primary"> CleanPro Mop</span> Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Complete your order below and start experiencing the future of clean. Free shipping and 30-day money-back
            guarantee included.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Order Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <h3 className="text-2xl font-bold mb-6">Shipping Information</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Package Selection */}
              <div className="space-y-3">
                <Label htmlFor="package">Select Package</Label>
                <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {packages.map((pkg) => (
                      <SelectItem key={pkg.id} value={pkg.id}>
                        {pkg.name} - ₦{pkg.price.toLocaleString()} (Save ₦{(pkg.savings ?? (pkg.originalPrice - pkg.price)).toLocaleString()})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Address Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange("zipCode", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the Terms of Service and Privacy Policy
                </Label>
              </div>

              <Button type="submit" size="lg" className="w-full text-lg py-6" disabled={!formData.agreeToTerms}>
                Order via WhatsApp - ₦{selectedPkg?.price.toLocaleString()}
              </Button>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Package Summary */}
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              {selectedPkg && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>{selectedPkg.name}</span>
                    <span className="font-semibold">₦{selectedPkg.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Original Price</span>
                    <span className="line-through">₦{selectedPkg.originalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-green-600 font-medium">
                    <span>You Save</span>
                    <span>₦{(selectedPkg.savings ?? (selectedPkg.originalPrice - selectedPkg.price)).toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span>Shipping</span>
                      <span className="text-green-600 font-medium">FREE</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">₦{selectedPkg.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Guarantees */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                <Shield className="h-6 w-6 text-green-500" />
                <div>
                  <h4 className="font-semibold">30-Day Money-Back Guarantee</h4>
                  <p className="text-sm text-muted-foreground">Not satisfied? Get a full refund</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                <Truck className="h-6 w-6 text-blue-500" />
                <div>
                  <h4 className="font-semibold">Free Shipping</h4>
                  <p className="text-sm text-muted-foreground">Delivered to your door in 3-5 days</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                <Lock className="h-6 w-6 text-purple-500" />
                <div>
                  <h4 className="font-semibold">Secure Checkout</h4>
                  <p className="text-sm text-muted-foreground">256-bit SSL encryption</p>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="h-5 w-5" />
                <span className="font-medium">Accepted Payment Methods</span>
              </div>
              <div className="flex gap-2">
                <div className="bg-white rounded px-2 py-1 text-xs font-medium">VISA</div>
                <div className="bg-white rounded px-2 py-1 text-xs font-medium">MC</div>
                <div className="bg-white rounded px-2 py-1 text-xs font-medium">AMEX</div>
                <div className="bg-white rounded px-2 py-1 text-xs font-medium">PayPal</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
