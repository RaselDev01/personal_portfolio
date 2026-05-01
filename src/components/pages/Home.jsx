import About from '../layouts/About';
import Portfolio from '../layouts/Portfolio';
import Resume from '../layouts/Resume';
import Service from '../layouts/Service';
import Skills from '../layouts/Skills';
import Banner from './../layouts/Banner';
import HireMeSection from '../layouts/HireMeSection';
import FaqAsk from '../layouts/FaqAsk';
import Testimonial from '../layouts/Testimonial';
import Contact from '../layouts/Contact';

const Home = () => {
  return (
    <>
      <Banner />
      <About/>
      <Service/>
      <Resume/>
      <Skills/>
      <Portfolio/>
      <HireMeSection/>
      <FaqAsk/>
      <Testimonial/>
      <Contact/>
    </>
  )
}

export default Home
