export type PackagePayload = {
  name: string
  price?: string | number
  quantity?: number
  source?: string
}

export type OrderFormPayload = {
  firstName: string
  email: string
  phoneNo: string
  whatsappNo: string
  state: string
  city: string
  deliveryAddress: string
  order: string
  availability: string
}

export const WHATSAPP_NUMBER = "+2347048667548"

export function getWhatsAppDigits(): string {
  return WHATSAPP_NUMBER.replace(/[^0-9]/g, "")
}

export function openWhatsApp(message: string) {
  const phone = getWhatsAppDigits()
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
  if (typeof window !== "undefined") {
    window.open(url, "_blank")
  }
}

export function buildPackageMessage(payload: PackagePayload): string {
  const { name, price, quantity = 1, source } = payload
  const lines = [
    "Order Inquiry",
    "",
    `Package: ${name}`,
    price ? `Price: ${typeof price === "number" ? `₦${price.toLocaleString()}` : price}` : undefined,
    `Quantity: ${quantity}`,
    source ? `Source: ${source}` : undefined,
  ].filter(Boolean) as string[]
  return lines.join("\n")
}

export function buildOrderFormMessage(data: OrderFormPayload): string {
  const lines = [
    "New Order",
    "",
    "Customer:",
    `- Name: ${data.firstName}`,
    `- Email: ${data.email}`,
    `- Phone: ${data.phoneNo}`,
    `- WhatsApp: ${data.whatsappNo}`,
    `- Address: ${data.deliveryAddress}, ${data.city}, ${data.state}`,
    "",
    "Selected:",
    `- Package: ${data.order}`,
    `- Availability: ${data.availability}`,
  ]
  return lines.join("\n")
}
