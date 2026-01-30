import Header from '../components/Header'
import Hero from '../components/Hero'
import Opportunities from '../components/Opportunities'
import Stats from '../components/Stats'
import Features from '../components/Features'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Stats />
      <Opportunities />
      <Features />
      <Footer />
    </div>
  )
}
