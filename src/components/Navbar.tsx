"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logodvb.png"
              alt="Logo Del Valle Bijouterie"
              width={70}
              height={70}
              className="rounded-full"
            />
            <span className="font-cursive text-2xl text-black">Del Valle Bijouterie</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-lavender-600 transition-colors">
              Inicio
            </Link>
            <Link href="/productos" className="text-gray-700 hover:text-lavender-600 transition-colors">
              Productos
            </Link>
            <Link href="/#sobre-nosotras" className="text-gray-700 hover:text-lavender-600 transition-colors">
              Sobre Mi
            </Link>
            <Link href="/#contacto" className="text-gray-700 hover:text-lavender-600 transition-colors">
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-lavender-600 transition-colors">
                Inicio
              </Link>
              <Link href="/productos" className="text-gray-700 hover:text-lavender-600 transition-colors">
                Productos
              </Link>
              <Link href="/#sobre-nosotras" className="text-gray-700 hover:text-lavender-600 transition-colors">
                Sobre Mi
              </Link>
              <Link href="/#contacto" className="text-gray-700 hover:text-lavender-600 transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
