import React, { useState } from 'react';
import { motion } from "framer-motion";

import { Drawer, DragItem } from '../Components';

const BlogPosts = () => {
  const [isActive, setIsActive] = useState(false);

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
        {posts.map(post => 
          <DragItem post={post} key={post} />
        )}
      </main>
    </motion.div>
  )
}



export default BlogPosts;

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];
