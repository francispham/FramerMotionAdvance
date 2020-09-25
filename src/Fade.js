import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Fade = ({ children, isActive }) => <AnimatePresence>
  {isActive && 
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >{children}</motion.div>}
  <h1>Francis</h1>
</AnimatePresence>;

export default Fade
