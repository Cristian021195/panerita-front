import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Comprobantes, Productos } from "../Pages"
import { Footer, Header } from "../Components/Layout"
export const PrivateRouter = () => {
  return (

    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Comprobantes/>} />
            <Route path="productos" element={<Productos/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    
  )
}