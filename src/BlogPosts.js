import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

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
        <AnimatePresence>
          {isActive &&(
            <motion.div
              drag="y"
              // This alow the Drawer to move back!
              dragConstraints={{ top: 0, bottom: 0 }}
              className="drawer-wrapper"
            >
              <motion.div
                initial={{ opacity: 0.5, y: "110%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.5, y: "110%" }}
                // This slower the moving Drawer
                transition={{ damping: 25, type: "spring" }}
              >
                <div className="drawer">
                  <button onClick={() => setIsActive(false)}>
                    Close Drawer
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
