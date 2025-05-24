"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const heroImages = [
  "/imagen1.png",
  "/imagen2.png",
  "/imagen3.png",
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Producto destacado ${index + 1}`}
              width={1920}
              height={1080}
              className="object-cover w-full h-full"
              priority={index === 0}
              unoptimized
            />

          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-lavender-100/80 to-pink-100/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-cursive text-5xl md:text-7xl text-lavender-700 mb-6 animate-fade-in">
          Del Valle Bijouterie
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-delay">
          Accesorios hechos a mano con amor ✨
        </p>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
          Cada pieza es única y especial, creada con dedicación y los mejores materiales para acompañarte en cada
          momento.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
          <Link href="/productos">
            <button className="bg-gradient-to-r from-lavender-500 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Ver Productos
            </button>
          </Link>
          <Link href="#sobre-nosotras">
          <button className="border-2 border-lavender-500 text-lavender-600 px-8 py-3 rounded-full hover:bg-lavender-50 transition-all duration-300">
            Conoce Mi Historia
          </button>
          </Link>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
      >
        <ChevronLeft size={24} className="text-lavender-600" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
      >
        <ChevronRight size={24} className="text-lavender-600" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImage ? "bg-lavender-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
