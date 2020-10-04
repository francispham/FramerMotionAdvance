import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useInterval from '@use-it/interval';

const CountDown = ({ setCountDown }) => {
  const [count, setCount] = useState(10);
  
  useInterval(() => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount -1;
      };
    });
  }, 1000);

  return (
    <motion.div
      layoutId="footer"
      className="count-down"
      onClick={() => setCountDown(false)}
    >
      <motion.h3  
        style={{ position: "absolute", top: 0 }}
        layoutId="count-down">Count Down Feature</motion.h3>
      <motion.div exit={{ opacity: 0 }}>
        <AnimatePresence>
          <motion.h2
            key={"countdown" + count}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0, position: "absolute" }}
            style={{
              fontSize: "6rem",
              margin: 0
            }}
          >{count}</motion.h2>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default CountDown;
