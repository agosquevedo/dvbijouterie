import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/products"

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 3)

  return (
    <section className="py-16 bg-gradient-to-b from-cream-50 to-lavender-50">
      <div className="container mx-auto px-4">
        <h2 className="font-cursive text-4xl text-center text-lavender-600 mb-12">Productos Destacados ✨</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-64">
                <Image src={product.imagen || "/placeholder.svg"} alt={product.nombre} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-cursive text-xl text-lavender-600 mb-2">{product.nombre}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.descripcion}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-pink-500">${product.precio}</span>
                  <span className="text-xs bg-lavender-100 text-lavender-600 px-2 py-1 rounded-full">
                    {product.categoria}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/productos"
            className="inline-block bg-gradient-to-r from-lavender-500 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Ver Todos los Productos
          </Link>
        </div>
      </div>
    </section>
  )
}
