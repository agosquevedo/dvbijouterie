import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Valentino Machuca",
    text: "Los colores super cuidados y el acabo muy delicado. Se ajusta perfecto a la muñeca, un golazo",
    rating: 5,
    product: "Pulsera de hilo de colores negros",
  },
  {
    id: 2,
    name: "Ilda Zabala",
    text: "Muy delicada, cómoda y hermosa",
    rating: 5,
    product: "Pulsera blanca con estrella blanca",
  },
  {
    id: 3,
    name: "Emilia Pepe",
    text: "Muy linda, ligera y cómoda. El color hermoso, brillante",
    rating: 5,
    product: "Pulsera con toques plateados y estrella blanca",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-lavender-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="font-cursive text-4xl text-center text-lavender-600 mb-12">Lo que dicen nuestros clientes</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

              <div className="border-t pt-4">
                <p className="font-semibold text-lavender-600">{testimonial.name}</p>
                <p className="text-sm text-gray-500">Compró: {testimonial.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
