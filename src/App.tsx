import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout"
import { HomePage } from "@/pages/home"
import { AboutPage } from "@/pages/about"
import { ServicesPage } from "@/pages/services"
import { FleetPage } from "@/pages/fleet"
import { ToursPage } from "@/pages/tours"
import { AyodhyaPage } from "@/pages/ayodhya"
import { VaranasiPage } from "@/pages/varanasi"
import { GalleryPage } from "@/pages/gallery"
import { ContactPage } from "@/pages/contact"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="fleet" element={<FleetPage />} />
          <Route path="tours" element={<ToursPage />} />
          <Route path="ayodhya" element={<AyodhyaPage />} />
          <Route path="varanasi" element={<VaranasiPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
