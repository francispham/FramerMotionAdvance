import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Drawer = ({ isActive, setIsActive, children }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          drag="y"
          // This alow the Drawer to move back!
          dragConstraints={{ top: 0, bottom: 0 }}
          // Drag to Close the Drawer
          onDragEnd={(event, info) => {
            console.log('event:', event);
            console.log('info:', info);
            info.offset.y > 300 && setIsActive(false);
          }}
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
              <button
                className="drawer--close"
                onClick={() => setIsActive(false)}
              >X</button>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Drawer