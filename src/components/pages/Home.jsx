import About from '../layouts/About';
import Resume from '../layouts/Resume';
import Service from '../layouts/Service';
import Banner from './../layouts/Banner';

const Home = () => {
  return (
    <>
      <Banner />
      <About/>
      <Service/>
      <Resume/>
    </>
  )
}

export default Home
