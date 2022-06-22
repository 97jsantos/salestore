import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Footer } from "./layout/Footer"
import { Navigation } from "./layout/Navigation"
import { Computer } from "./pages/Computer"
import { Decoration } from "./pages/Decoration"
import { Electronics } from "./pages/Electronics"
import { ForgotPassword } from "./pages/ForgotPassword"
import { Home } from "./pages/Home"
import { House } from "./pages/House"
import { Cart } from "./pages/Cart"
import { Login } from "./pages/Login"
import { Recreation } from "./pages/Recreation"
import { Register } from "./pages/Register"
import { Sports } from "./pages/Sports"
import { FooterDivider } from "./layout/FooterDivider"
import { NewProduct } from "./pages/NewProduct"

import { useAppSelector } from './store/Hooks'

export function App() {

  const count = useAppSelector((state) => state.counter.value)

  return (
    <Router>
      <Navigation count={count} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casa" element={<House />} />
        <Route path="/decoracao" element={<Decoration />} />
        <Route path="/eletronicos" element={<Electronics />} />
        <Route path="/esportes" element={<Sports />} />
        <Route path="/informatica" element={<Computer />} />
        <Route path="/lazer" element={<Recreation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/esqueciminhasenha" element={<ForgotPassword />} />
        <Route path="/registrar" element={<Register />} />
        <Route path="/novoproduto" element={<NewProduct />} />
        <Route path="/carrinho" element={<Cart cartAmount={count} />} />
      </Routes>
      <FooterDivider />
      <Footer />
    </Router>
  )
}
