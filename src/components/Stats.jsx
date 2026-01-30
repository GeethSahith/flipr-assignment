import '../styles/Stats.css'

export default function Stats() {
  const stats = [
    {
      id: 1,
      number: '10K+',
      label: 'Job Opportunities'
    },
    {
      id: 2,
      number: '500+',
      label: 'Partner Companies'
    },
    {
      id: 3,
      number: '50K+',
      label: 'Successful Placements'
    },
    {
      id: 4,
      number: '95%',
      label: 'Success Rate'
    }
  ]

  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map(stat => (
          <div key={stat.id} className="stat-item">
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
