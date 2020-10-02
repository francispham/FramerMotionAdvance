import React, { useState } from 'react';
import { motion, useMotionValue } from "framer-motion";

import { useMeasurePosition } from '../Hooks';

export default function DragItem({ 
  item, updatePosition, index, updateOrder
}) {
  const [isDragging, setIsDragging] = useState(false);

  const ref = useMeasurePosition(pos => {
    updatePosition(index, pos);
  });

  // https://www.framer.com/api/motion/motionvalue/#usemotionvalue
  const y = useMotionValue();
  
  return (
    <div className="flex">
      <motion.div
        ref={ref}
        layout
        drag="y"
        dragElastic={1}
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        key={item}
        animate={{
          scale: isDragging ? 1.05 : 1
        }}
        onViewportBoxUpdate={(_, delta) => {
          if (isDragging) updateOrder(index, delta.y.translate);
          y.set(delta.y.translate);
        }}
      >Drag Handle</motion.div>
      <motion.div style={{ y }} className="card">
        <h4>Draggable Item with Handle {item}</h4>
        <p>Drag My Handle Please!!!!</p>
      </motion.div>
    </div>
  );
};