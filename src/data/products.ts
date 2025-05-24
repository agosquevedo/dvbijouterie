export interface Product {
  id: number
  nombre: string
  descripcion: string
  precio: number
  categoria: "Pulseras" | "Collares" | "Tobilleras"
  color: string
  imagen: string
}

export const products: Product[] = [
    {
        "id": 1,
        "nombre": "Pulsera Estrellita Blanca",
        "descripcion": "Pulsera con bolitas plateadas y blancas, acompañada de una estrella blanca delicada.",
        "precio": 3500,
        "categoria": "Pulseras",
        "color": "Blanco",
        "imagen": "/1.png"
    },
    {
        "id": 2,
        "nombre": "Pulsera Corazón Violeta",
        "descripcion": "Pulsera violeta pastel, negra y dorada, con un hermoso corazón violeta pastel al centro.",
        "precio": 4500,
        "categoria": "Pulseras",
        "color": "Violeta",
        "imagen": "/2.png"
    },
    {
        "id": 3,
        "nombre": "Pulsera Negra Simple",
        "descripcion": "Pulsera negra con diseño minimalista y un pequeño corazón plateado.",
        "precio": 3000,
        "categoria": "Pulseras",
        "color": "Negro",
        "imagen": "/3.png"
    },
    {
        "id": 4,
        "nombre": "Pulsera Estrella Azul",
        "descripcion": "Pulsera azul celeste con detalles turquesa oscuro, bolitas doradas y estrella blanca central.",
        "precio": 4000,
        "categoria": "Pulseras",
        "color": "Celeste",
        "imagen": "/4.png"
    },
    {
        "id": 5,
        "nombre": "Pulsera Blanca Pura",
        "descripcion": "Pulsera totalmente blanca, con bolitas blancas para un estilo angelical.",
        "precio": 3500,
        "categoria": "Pulseras",
        "color": "Blanco",
        "imagen": "/5.png"
    },
    {
        "id": 6,
        "nombre": "Pulsera Rosa y Negra Amorosa",
        "descripcion": "Pulsera con bolitas doradas, corazón rosa y combinaciones de rosa y negro.",
        "precio": 4500,
        "categoria": "Pulseras",
        "color": "Rosa",
        "imagen": "/6.png"
    },
    {
        "id": 7,
        "nombre": "Tobillera Estrella de Mar",
        "descripcion": "Tobillera con dijes dorados, celestes y blancos, y una estrella de mar blanca central.",
        "precio": 3500,
        "categoria": "Tobilleras",
        "color": "Celeste",
        "imagen": "/7.png"
    },
    {
        "id": 8,
        "nombre": "Tobillera Rosa con Plumas",
        "descripcion": "Tobillera rosa delicada con plumas plateadas que cuelgan suavemente.",
        "precio": 3000,
        "categoria": "Tobilleras",
        "color": "Rosa",
        "imagen": "/8.png"
    }
]
