import '../styles/Hero.css'
import heroImage from '../assets/images/pexels-fauxels-3182834.svg'
import shape1 from '../assets/shapes/Ellipse 7.svg'
import shape2 from '../assets/shapes/Ellipse 8.svg'
import shape3 from '../assets/shapes/Ellipse 10.svg'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Your Path to Success Starts Here</h1>
        <p>Connect with top opportunities at leading companies. Build your career with Flipr.</p>
        
        <div className="hero-actions">
          <button className="btn btn-primary">Explore Opportunities</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>

      <div className="hero-visual">
        <img 
          src={heroImage} 
          alt="Professional team collaboration"
          className="hero-image"
        />
      </div>

      <div className="hero-shapes">
        <img src={shape1} alt="" className="shape shape-1" />
        <img src={shape2} alt="" className="shape shape-2" />
        <img src={shape3} alt="" className="shape shape-3" />
      </div>
    </section>
  )
}
