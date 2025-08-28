import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
// import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PackagesSection } from "@/components/packages-section"
// import { TestimonialsSection } from "@/components/testimonials-section"
// import { OrderFormSection } from "@/components/order-form-section"
// import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/Navbar"
import ProblemSection from "@/components/problem-section"
import FeaturesSection from "@/components/features"
import PricingSection from "@/components/pricing"
import TestimonialsSection from "@/components/testimonial"
import WhyUs from "@/components/whyUs"
import OrderFormSection from "@/components/Order"
import FAQSection from "@/components/Faq"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className="">
      {/* <Navbar />   */}
      <HeroSection />
      <ProblemSection/> 
      <FeaturesSection/>
      <PricingSection/>
      <TestimonialsSection/>
      <WhyUs/>
      <Suspense fallback={<div />}> 
        <OrderFormSection/>
      </Suspense>
      <FAQSection/>

    </main>
  )
}


// <ProblemSolutionSection />
//       <FeaturesSection />
//       <HowItWorksSection />
//       <PackagesSection />
//       <TestimonialsSection />
//       <OrderFormSection />
//       <FAQSection />
//       <Footer />