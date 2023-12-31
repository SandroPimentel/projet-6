import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import PropertyDetailPage from './pages/PropertyDetailPage'
import './styles/main.scss'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/property/:id" element={<PropertyDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App