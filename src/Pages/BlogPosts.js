import React, { useState } from 'react';
import { motion } from "framer-motion";

import { Drawer, DragItem } from '../Components';
import { usePositionReorder } from '../Hooks';

const BlogPosts = () => {
  const [isActive, setIsActive] = useState(false);

  const [ order, updatePosition, updateOrder ] = usePositionReorder(posts);

  return (
    <motion.div 
      className="App"
      initial= {{ opacity: 0, x: -100 }}
      animate= {{ opacity: 1, x: 0 }}
      exit= {{ opacity: 0, x: 100 }}
    >
      <main className="layout">
        <h3>Blog Posts</h3>
        <button onClick={() => setIsActive(true)}>
          Open Drawer
        </button>
        <Drawer
          isActive={isActive}
          setIsActive={setIsActive}
        >
          <h1>Animating Draggable Drawer Feature</h1>
        </Drawer>
        {order.map((post, index) => 
          <DragItem
            key={post} 
            post={post} 
            index={index}
            updateOrder={updateOrder}
            updatePosition={updatePosition}
          />
        )}
      </main>
    </motion.div>
  );
};

export default BlogPosts;

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];
