import ProductsGrid from "@/components/ProductsGrid"

export default function ProductosPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-cursive text-lavender-600 text-center mb-8">Nuestros Productos ✨</h1>
        <ProductsGrid />
      </div>
    </main>
  )
}
