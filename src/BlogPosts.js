import React from 'react';
import { motion } from "framer-motion";

const BlogPosts = () => {
  return (
    <motion.div 
      className="App"
      initial= {{ opacity: 0, x: -100 }}
      animate= {{ opacity: 1, x: 0 }}
      exit= {{ opacity: 0, x: 100 }}
    >
      <main className="layout">
        <h3>Blog Posts</h3>
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
