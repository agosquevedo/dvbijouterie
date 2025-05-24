import Link from "next/link"
import { Instagram, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-lavender-600 to-pink-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-lavender-600 font-bold text-sm">DV</span>
              </div>
              <span className="font-cursive text-2xl">Del Valle Bijouterie</span>
            </div>
            <p className="text-lavender-100 mb-4 max-w-md">
              Accesorios hechos a mano con amor. Cada pieza es única y especial, creada para acompañarte en tus momentos
              más importantes.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/dvbijouterie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:dvbijouterie@gmail.com"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-lavender-100 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-lavender-100 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="#sobre-nosotras" className="text-lavender-100 hover:text-white transition-colors">
                  Sobre Nosotras
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-lavender-100 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/productos" className="text-lavender-100 hover:text-white transition-colors">
                  Pulseras
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-lavender-100 hover:text-white transition-colors">
                  Collares
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-lavender-100 hover:text-white transition-colors">
                  Tobilleras
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-lavender-100 flex items-center justify-center gap-2">
            © 2024 Del Valle Bijouterie. Hecho con <Heart size={16} className="text-pink-300" /> en Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}
