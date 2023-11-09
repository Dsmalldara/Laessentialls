import Navbar from './Components/Navbar'
import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Product from './Pages/Product'
import Error from './Pages/Error'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import NavbarSm from './Components/NavbarSm'
import ScrollToTop from './Pages/ScrollToTop'
function App() {
 
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <NavbarSm/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='*' element={<Error/>} />
      <Route path='/Laessentials/cart' element={<Cart/>}/>
      <Route path='/Laessentials/cart/login' element={<Login/>}/>
      <Route path='/Laessentials/:id' element={<Product/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
