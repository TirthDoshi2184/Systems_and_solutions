import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/HomePage'
// import About from './pages/About'
// import Products from './pages/Products'
// import ProductDetail from './pages/ProductDetail'
// import Gallery from './pages/Gallery'
// import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import About from './Pages/AboutPage'
import Products from './Pages/ProductPage'
import ProductDetail from './Pages/ProductDetailPage'
import Gallery from './Pages/Gallery'
import Contact from './Pages/ContactPage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App