"use client"

import { usePathname } from "next/navigation"
import Header from "./Header"
import Footer from "./Footer"
import WhatsAppButton from "./WhatsAppButton"
import SmoothScroll from "./SmoothScroll"

const LP_ROUTES = ["/maquinario", "/plataformaselevatorias", "/admin"]

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLP = LP_ROUTES.some(route => pathname.startsWith(route))

  return (
    <SmoothScroll>
      {!isLP && <Header />}
      <main>{children}</main>
      {!isLP && <Footer />}
      {!isLP && <WhatsAppButton />}
    </SmoothScroll>
  )
}
