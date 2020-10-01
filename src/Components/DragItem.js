import React, { useState } from 'react';
import { motion } from "framer-motion";

import { useMeasurePosition } from '../Hooks';

export default function DragItem({ 
  post, updatePosition, index, updateOrder
}) {
  const [isDragging, setIsDragging] = useState(false);

  const ref = useMeasurePosition(pos => {
    updatePosition(index, pos);
  })
  
  return (
    <motion.div
      ref={ref}
      layout
      drag="y"
      dragElastic={1}
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      key={post}
      className="card"
      animate={{
        scale: isDragging ? 1.05 : 1
      }}
      onViewportBoxUpdate={(_, delta) => {
        if (isDragging) updateOrder(index, delta.y.translate);
      }}
    >
      <h4>Draggable Post Item {post}</h4>
      <p>Drag Me Here Please!!!!</p>
    </motion.div>
  );
};