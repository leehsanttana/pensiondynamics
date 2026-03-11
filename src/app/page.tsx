import { Header } from "@/sections/header"
import { Hero } from "@/sections/hero"
import { Partners } from "@/sections/partners"
import { Description } from "@/sections/description"
import { FeaturesHighlights } from "@/sections/features-highlights"
import { FeaturesGrid } from "@/sections/features-grid"
import { ApplicationShowcase } from "@/sections/application-showcase"
import { Testimonials } from "@/sections/testimonials"
import { ContactCTA } from "@/sections/contact-cta"
import { Footer } from "@/sections/footer"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background w-full">
      <Header />
      <Hero />
      <Partners />
      <Description />
      <FeaturesHighlights />
      <FeaturesGrid />
      <ApplicationShowcase />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  )
}
