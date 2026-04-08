import React, { useEffect } from 'react';
import Skills from '../components/Skills';
import { motion } from 'framer-motion';

const SkillsPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Skills />;
};

export default SkillsPage;
