import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-cursive",
})

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Del Valle Bijouterie - Accesorios hechos a mano con amor",
  description:
    "Descubre nuestra colección de pulseras, collares y tobilleras hechas a mano con materiales de calidad. Cada pieza está creada con amor y dedicación.",
  keywords: "bijouterie, accesorios, pulseras, collares, tobilleras, hechos a mano, artesanal",
  openGraph: {
    title: "Del Valle Bijouterie - Accesorios hechos a mano con amor",
    description:
      "Descubre nuestra colección de pulseras, collares y tobilleras hechas a mano con materiales de calidad.",
    type: "website",
    locale: "es_ES",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${nunito.variable}`}>
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className="font-sans bg-cream-50">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
