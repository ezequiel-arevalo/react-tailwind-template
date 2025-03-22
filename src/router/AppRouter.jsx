import { Routes, Route } from "react-router-dom"
import { MainLayout } from "@/layout/MainLayout"
import { HomePage } from "@/pages/HomePage"
import { ErrorPage } from "@/pages/ErrorPage"
import { ContactPage } from "@/pages/ContactPage"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={ <MainLayout /> }>

            {/* Initial Page */}
            <Route index element={ <HomePage /> } />
            
            {/* Initial Page */}
            <Route path="/contact" element={ <ContactPage /> } />

            {/* Error Page not found */}
            <Route path="*" element={ <ErrorPage /> } />
        </Route>
    </Routes>
  )
}
