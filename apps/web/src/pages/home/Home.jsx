import React from 'react';
import { _home } from './Home.styled';
import Swap from './swap/Swap';
import Footer from '../../shared/footer/Footer';

export const Home = () => {
  return (
    <_home>
      <Swap />
      <Footer />
    </_home>
  );
};

export default Home;
