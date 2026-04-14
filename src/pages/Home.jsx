import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import GitActivity from '../components/GitActivity';
import Contact from '../components/Contact';
import TechnicalBlog from '../components/TechnicalBlog';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Projects />
    </>
  );
};

export default Home;
