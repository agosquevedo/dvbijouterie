import Hero from "@/components/Hero"
import FeaturedProducts from "@/components/FeaturedProducts"
import AboutUs from "@/components/AboutUs"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <AboutUs />
      <Testimonials />
      <Contact />
    </main>
  )
}
