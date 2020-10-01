import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Scale = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      <motion.div layout className="card">
        <motion.h4 layout>Scale Correction</motion.h4>
        {isToggled && (
          <p>
            "The inside 'layout' in this case is necessary to fix
            the Scaling Problem caused from the effect of the first
            'layout'. Therefore, everything inside the 'layout' will
            be effected and to fix this, another 'layout' has to be 
            added for the children Element!"
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default Scale;
