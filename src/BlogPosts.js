import React, { useState } from 'react';
import { motion } from "framer-motion";

import Drawer from './Drawer';

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
          <h1>I am the Drawer</h1>
        </Drawer>
        {posts.map(post => 
          <div className="card" key={post}>
              <h4>Post Number one</h4>
              <p>this is inside the card</p>
          </div>
        )}
      </main>
    </motion.div>
  )
}

export default BlogPosts

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];
