import OpportunityCard from './OpportunityCard'
import '../styles/Opportunities.css'
import homeIcon from '../assets/icons/home.svg'
import paintbrushIcon from '../assets/icons/paintbrush-2.svg'
import dollarIcon from '../assets/icons/circle-dollar-sign.svg'

export default function Opportunities() {
  const opportunities = [
    {
      id: 1,
      icon: homeIcon,
      title: 'Real Estate & Properties',
      description: 'Build careers in real estate, property management, and residential development.',
      count: 245
    },
    {
      id: 2,
      icon: paintbrushIcon,
      title: 'Design & Creative',
      description: 'Showcase your creative talents with innovative design opportunities.',
      count: 168
    },
    {
      id: 3,
      icon: dollarIcon,
      title: 'Finance & Banking',
      description: 'Join leading financial institutions and build your expertise in finance.',
      count: 312
    }
  ]

  return (
    <section className="opportunities" id="opportunities">
      <div className="opportunities-header">
        <h2>Explore Opportunities</h2>
        <p>Discover amazing career paths across diverse industries</p>
      </div>

      <div className="opportunities-grid">
        {opportunities.map(opp => (
          <OpportunityCard
            key={opp.id}
            icon={opp.icon}
            title={opp.title}
            description={opp.description}
            count={opp.count}
          />
        ))}
      </div>

      <div className="opportunities-shapes">
        <img src="src/assets/shapes/Ellipse 1.svg" alt="" className="shape" />
        <img src="src/assets/shapes/Ellipse 17.svg" alt="" className="shape" />
      </div>
    </section>
  )
}
