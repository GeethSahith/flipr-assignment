import '../styles/Features.css'
import featureImage from '../assets/images/pexels-brett-sayles-2881232.svg'
import shapeA from '../assets/shapes/Ellipse 20.svg'
import shapeB from '../assets/shapes/Ellipse 21.svg'

export default function Features() {
  const features = [
    {
      id: 1,
      title: 'Easy Job Discovery',
      description: 'Find roles that match your skills and aspirations effortlessly.'
    },
    {
      id: 2,
      title: 'Expert Guidance',
      description: 'Get mentorship and career advice from industry professionals.'
    },
    {
      id: 3,
      title: 'Skill Building',
      description: 'Access resources to enhance your professional capabilities.'
    },
    {
      id: 4,
      title: 'Network Growth',
      description: 'Connect with peers, mentors, and industry leaders.'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="features-header">
        <h2>Why Choose Flipr?</h2>
        <p>Everything you need for career success</p>
      </div>

      <div className="features-grid">
        {features.map(feature => (
          <div key={feature.id} className="feature-item">
            <div className="feature-number">{feature.id}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="features-image">
        <img 
          src={featureImage} 
          alt="Team working together"
        />
      </div>

      <div className="features-shapes">
        <img src={shapeA} alt="" className="shape" />
        <img src={shapeB} alt="" className="shape" />
      </div>
    </section>
  )
}
