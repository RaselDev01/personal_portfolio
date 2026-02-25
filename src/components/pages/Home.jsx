import About from '../layouts/About';
import Resume from '../layouts/Resume';
import Service from '../layouts/Service';
import Skills from '../layouts/Skills';
import Banner from './../layouts/Banner';

const Home = () => {
  return (
    <>
      <Banner />
      <About/>
      <Service/>
      <Resume/>
      <Skills/>
    </>
  )
}

export default Home
