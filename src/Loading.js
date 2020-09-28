import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="loading">
      <h3>Animating Loading Feature</h3>
        <motion.div
          animate={{ width: "100%" }}
          transition={{
            flip: Infinity, // 'Infinity' is a JavaScript keyword!!!
            duration: 1
          }}
          style={{
            background: "var(--primary)",
            height: 6,
            width: 100
          }}
        />
        <p>Is loading ...</p>
        <motion.div
          initial={{ x: -180 }}
          animate={{ x: 180 }}
          transition={{
            flip: Infinity,
            duration: 1.2
          }}
          style={{
            background: "var(--danger)",
            height: 8,
            width: 20
          }}
        />
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{
            flip: Infinity,
            duration: 1
          }}
          style={{
            background: "var(--yellow)",
            height: 4,
            width: 100
          }}
        />
    </div>
  );
};

export default Loading;
