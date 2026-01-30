import { useState } from 'react'
import '../styles/Header.css'
import logo from '../assets/images/logo.svg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Flipr Logo" />
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#opportunities">Opportunities</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  )
}
