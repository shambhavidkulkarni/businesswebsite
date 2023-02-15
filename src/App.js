import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Footer } from './components/Footer'
import { careers } from './components/careers'
import './components/contact.css'
import { SlidingCrousel } from './components/SlidingCrousel'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/contact" element={<careers />} />
        {/* <Route path="/about" element={<Aboutus/>}/>
      <Route path="/product" element={<Product/>}/> */}
      </Routes>
      <Home />
      <SlidingCrousel/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
