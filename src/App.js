import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Home/Header'
import { Home } from './components/Home/Home'
import { CareersPage } from './components/careers/CareersPage'
import { Footer } from './components/Footer'
import { AboutUs } from './components/about/AboutUs'
import './Footer.css'
// import { SideNavBar } from './components/SideNavBar'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SideNavBar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careerspage" element={<CareersPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
