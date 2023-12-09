import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import {
  Hero,
  About,
  Explore,
  GetStarted,
  WhatsNew,
  World,
  Insights,
  Feedback,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </>
  )
}
