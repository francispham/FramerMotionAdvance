import React, { useState } from 'react';
import { motion } from "framer-motion";

export default function DragItem({ post }) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
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
    >
      <h4>Draggable Post Item {post}</h4>
      <p>Drag Me Here Please!!!!</p>
    </motion.div>
  );
};