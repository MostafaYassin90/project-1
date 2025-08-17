import ContactUs from "../components/ContactUs"
import AboutUs from "../components/AboutUs"
import  Hero from "../components/Hero"
import Services from "../components/Services"
import Footer from "../components/Footer"
import FeaturesSection from "../components/FeaturesSections"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <div>
      <Hero />
      <Services/>
      <FeaturesSection />
      <AboutUs/>
      <Testimonials/>
      <ContactUs/>
      <Footer />
    </div>
  )
}

export default Home