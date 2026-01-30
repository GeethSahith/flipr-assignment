import '../styles/OpportunityCard.css'

export default function OpportunityCard({ icon, title, description, count }) {
  return (
    <div className="opportunity-card">
      <div className="card-icon">
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-footer">
        <span className="count">{count}+ Opportunities</span>
      </div>
    </div>
  )
}
