import { Outlet, useLocation } from "react-router-dom"
import { Header } from "./header"
import { Footer } from "./footer"
import { BottomNav } from "./bottom-nav"
import { WhatsAppFab } from "./whatsapp-fab"
import { useEffect } from "react"

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppFab />
    </div>
  )
}
