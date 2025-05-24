"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  const response = await fetch("https://formspree.io/f/mwgajozn", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: formData.nombre,
      email: formData.email,
      mensaje: formData.mensaje,
    }),
  })

  const result = await response.json()

  if (result.ok || response.status === 200) {
    alert("¡Gracias por tu mensaje! Te responderemos pronto 💖")
    setFormData({ nombre: "", email: "", mensaje: "" })
  } else {
    alert("Ocurrió un error 😢 Intenta más tarde.")
  }
}


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-cursive text-4xl text-center text-lavender-600 mb-12">Contactanos 💌</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-lavender-50 to-pink-50 rounded-2xl p-8">
            <h3 className="font-cursive text-2xl text-lavender-600 mb-6">Envíanos un mensaje</h3>

            <form
              action="https://formspree.io/f/mvgajozn"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Cuéntanos qué producto te interesa o cualquier consulta que tengas..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-lavender-500 to-pink-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-cursive text-2xl text-lavender-600 mb-6">Otras formas de contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-lavender-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">claudianuevacuenta@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-lavender-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Ubicación</h4>
                    <p className="text-gray-600">Rio Cuarto, Córdoba, Argentina</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-lavender-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horarios de atención</h4>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-gray-600">Sábados: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <h4 className="font-cursive text-xl text-green-700 mb-3">¡Contacto directo por WhatsApp! 📱</h4>
              <p className="text-green-600 mb-4">Para consultas rápidas y pedidos personalizados</p>
              <a
                href="https://wa.me/5493585073084"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
