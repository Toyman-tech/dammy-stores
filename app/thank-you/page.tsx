"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { getWhatsAppDigits } from "@/lib/order"

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const [orderDetails, setOrderDetails] = useState({
    orderNumber: "",
    amount: "0",
    package: "",
  })

  useEffect(() => {
    // Get order details from URL
    const details = {
      orderNumber:
        searchParams.get("order") ||
        `ORD-${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
      amount: searchParams.get("amount") || "0",
      package: decodeURIComponent(searchParams.get("package") || "Your Order"),
    }

    setOrderDetails(details)

    // ✅ Fire Facebook Pixel Purchase event
    if (typeof window !== "undefined" && typeof (window as any).fbq !== "undefined") {
      ;(window as any).fbq("track", "Purchase", {
        value: Number(details.amount),
        currency: "NGN",
        content_name: details.package,
        order_id: details.orderNumber,
      })
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>

        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-600 mb-8">
          Your order has been received and is being processed. We'll contact you
          shortly to confirm the details.
        </p>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-4 text-left space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Order ID</span>
              <span className="font-medium">#{orderDetails.orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Package</span>
              <span className="font-medium">{orderDetails.package}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Amount</span>
              <span className="font-medium text-green-600">
                ₦{Number(orderDetails.amount).toLocaleString()}
              </span>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <a
              href={`https://wa.me/${getWhatsAppDigits()}?text=Hello%20Kadima%20Shop%2C%20I%20just%20placed%20an%20order%20%23${orderDetails.orderNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] h-12 text-white flex items-center justify-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.174.196-.347.221-.644.075-.297-.15-1.264-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.298-.018-.46.13-.606.136-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.508-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.005-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.723 1.465h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Confirm Your Transaction
              </Button>
            </a>

            <Link href="/" className="block">
              <Button variant="outline" className="w-full h-12">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
