import React from 'react';
import { motion } from "framer-motion";

import { HandleDragItem } from '../Components';
import { usePositionReorder } from '../Hooks';

const ItemListings = () => {
  const [ order, updatePosition, updateOrder ] = usePositionReorder(items);

  return (
    <motion.div 
      className="App"
      initial= {{ opacity: 0, x: -100 }}
      animate= {{ opacity: 1, x: 0 }}
      exit= {{ opacity: 0, x: 100 }}
    >
      <main className="layout">
        <h3>List of Items</h3>
        {order.map((item, index) => 
          <HandleDragItem
            key={item} 
            item={item} 
            index={index}
            updateOrder={updateOrder}
            updatePosition={updatePosition}
          />
        )}
      </main>
    </motion.div>
  );
};

export default ItemListings;

const items = [0, 1, 2, 3, 4, 5, 6, 7, 8];
