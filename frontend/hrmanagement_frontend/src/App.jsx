import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './componenets/Header'
import Footer from './componenets/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import AdminLogin from './pages/AdminLogin'
import AdminHome from './pages/AdminHome'
import Register from './Register'
import Login from './Login'
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/adminlogin" element={<AdminLogin></AdminLogin>}></Route>
        <Route path="/adminhome" element={<AdminHome></AdminHome>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App