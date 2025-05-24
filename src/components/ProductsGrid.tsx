"use client"

import { useState } from "react"
import Image from "next/image"
import { products } from "@/data/products"

const categories = ["Todos", "Pulseras", "Collares", "Tobilleras"]
const colors = ["Todos", "Rosa", "Celeste", "Negro", "Multicolor", "Dorado"]

export default function ProductsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedColor, setSelectedColor] = useState("Todos")

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "Todos" || product.categoria === selectedCategory
    const colorMatch = selectedColor === "Todos" || product.color === selectedColor
    return categoryMatch && colorMatch
  })

  function colorToHex(color: string) {
  const map: Record<string, string> = {
    Rosa: "#fbcfe8",
    Celeste: "#bae6fd",
    Negro: "#000000",
    Multicolor: "linear-gradient(to right, #f9a8d4, #93c5fd, #fcd34d)",
    Dorado: "#facc15",
    Blanco: "#f9fafb",
    Violeta: "#e9d5ff",
  }
  return map[color] || "#e5e7eb" // gris si no existe
}

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div>
          <div className="text-center mb-6">
            <p className="text-lg text-lavender-600 font-semibold">¿Querés una pulsera personalizada? 💖</p>
            <a
              href="https://wa.me/543585073084?text=¡Hola! Quiero una pulsera personalizada ✨"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-6 py-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition"
            >
              Pedila por WhatsApp
            </a>
          </div>
          <h3 className="font-semibold text-lavender-600 mb-2">Categoría:</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-lavender-500 text-white"
                    : "bg-lavender-100 text-lavender-600 hover:bg-lavender-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lavender-600 mb-2">Color:</h3>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedColor === color ? "bg-pink-500 text-white" : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative h-64">
              <Image src={product.imagen || "/placeholder.svg"} alt={product.nombre} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-cursive text-lg text-lavender-600 mb-2">{product.nombre}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.descripcion}</p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xl font-bold text-pink-500">${product.precio}</span>
                <div className="flex gap-1">
                  <span className="text-xs bg-lavender-100 text-lavender-600 px-2 py-1 rounded-full">
                    {product.categoria}
                  </span>
                  <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full border"
                    style={{
                      backgroundColor: colorToHex(product.color),
                      borderColor: product.color === "Blanco" ? "#d1d5db" : "transparent",
                    }}
                  />
                  <span className="text-xs text-gray-600">{product.color}</span>
                </div>
                </div>
              </div>
              <a
                href={`https://wa.me/543585073084?text=¡Hola! Quiero consultar por el producto: ${encodeURIComponent(product.nombre)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center bg-gradient-to-r from-lavender-500 to-pink-500 text-white py-2 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Consultar
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No se encontraron productos con los filtros seleccionados.</p>
        </div>
      )}
    </div>
  )
}
