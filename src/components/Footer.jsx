import '../styles/Footer.css'
import linkedinIcon from '../assets/icons/Linkedin.svg'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Flipr</h4>
          <p>Connecting talented individuals with amazing career opportunities.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#opportunities">Opportunities</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Stay updated with latest opportunities</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
