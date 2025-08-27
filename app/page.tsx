import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PackagesSection } from "@/components/packages-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { OrderFormSection } from "@/components/order-form-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/Navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />  
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PackagesSection />
      <TestimonialsSection />
      <OrderFormSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
