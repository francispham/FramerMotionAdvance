import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Slide = ({ 
  children,
  isActive,
  direction = 1,  // 'direction = 1' will make sure the Function always works
  distance = 200, // Create a System by default distance to 200 
}) => 
  <AnimatePresence>
    {isActive && 
    <motion.div
      initial={{ opacity: 0, x: direction * (distance * -1) }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * distance }}
      // exit={{ opacity: 0, x: direction * 200 }}    'this is before distance'
    >{children}</motion.div>}
  </AnimatePresence>;

export default Slide;
