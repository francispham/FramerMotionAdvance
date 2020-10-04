import React from 'react';
import { motion } from 'framer-motion';

const CountDown = ({ setCountDown }) => {
  console.log('setCountDown:', setCountDown);
  return (
    <motion.div
      layoutId="footer"
      className="count-down"
      onClick={() => setCountDown(false)}
    >
      <motion.h3 layoutId="count-down">Count Down Feature</motion.h3>
      <motion.h2
        exit={{ opacity: 0 }}
        style={{
          fontSize: "6rem",
          margin: 0
        }}
      >{10}</motion.h2>
    </motion.div>
  );
};

export default CountDown;
