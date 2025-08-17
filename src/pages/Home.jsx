import ContactUs from "../components/ContactUs"
import AboutUs from "../components/AboutUs"
import { Hero } from "../components/Hero"
import Services from "../components/Services"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Hero />
      <Services/>
      <AboutUs/>
      <ContactUs/>
      <Footer />
    </div>
  )
}

export default Home