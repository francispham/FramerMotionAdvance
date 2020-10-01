import React from 'react'
import { motion } from "framer-motion";

const GridGallery = () => {
  return (
    <motion.div
      className="App"
      initial= {{ opacity: 0, y: -100 }}
      animate= {{ opacity: 1, y: 0 }}
      exit= {{ opacity: 0, y: 100 }}
    >
      <main className="layout">
        <h3>Grid Gallery</h3>
        <div className="grid gallery">
          {images.map((image, index) => (
            <img
              key={image}
              style={{
                cursor: "pointer"
              }}
              src={`https://picsum.photos/seed/${image}/500/300`}
              alt="placeholder"
            />
          ))}
        </div>
      </main>
    </motion.div>
  )
};

export default GridGallery;

const images = ["1000", "1001", "1002", "1003", "1004", "1005", "1006", "1008"];
