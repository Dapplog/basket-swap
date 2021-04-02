import React from 'react';
import { _home } from './Home.styled';
import Swap from './swap/Swap';
// import Roadmap from './roadmap/Roadmap';
// import FAQ from './faq/FAQ';
// import About from './about/About';
import Footer from '../../shared/footer/Footer';

export const Home = () => {
  return (
    <_home>
      <Swap />
      {/*<About />*/}
      {/*<Roadmap />*/}
      {/*<FAQ />*/}
      <Footer />
    </_home>
  );
};

export default Home;
