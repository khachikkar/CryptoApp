import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Marketplace from '../components/Marketplace'
import Footer from '../components/Footer'

export default function Home() {
  return (
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Features />
        <Marketplace />
        <Footer />
      </main>
  )
}

