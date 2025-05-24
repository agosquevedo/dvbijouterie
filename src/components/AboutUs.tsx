import Image from "next/image"
import { Heart, Star, Gift } from "lucide-react"

export default function AboutUs() {
  return (
    <section id="sobre-nosotras" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-cursive text-4xl text-lavender-600">Sobre Mi 💕</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Del Valle Bijouterie nació del amor por crear piezas únicas y especiales. Soy Claudia, una mamá emprendedora que
              decidió convertir su pasión por los accesorios en un proyecto lleno de amor y dedicación.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cada pulsera, collar y tobillera está hecha a mano con materiales de calidad, pensando en acompañarte en
              tus momentos más especiales. Creemos que los accesorios no solo complementan tu look, sino que también
              cuentan tu historia.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-lavender-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-lavender-600 mb-2">Hecho con Amor</h3>
                <p className="text-sm text-gray-600">Cada pieza está creada con dedicación y cariño a mano</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-lavender-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-lavender-600 mb-2">Calidad Premium</h3>
                <p className="text-sm text-gray-600">Utilizo solo los mejores materiales</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-lavender-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Gift className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-lavender-600 mb-2">Piezas Únicas</h3>
                <p className="text-sm text-gray-600">Diseños exclusivos que te harán brillar</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/mompic.png"
              alt="Foto de la fundadora de Del Valle Bijouterie"
              fill
              className="object-cover"
            />

            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-pink-400 to-lavender-400 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-lavender-400 to-pink-400 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
