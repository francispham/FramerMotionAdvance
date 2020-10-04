import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';

export function RouteTransition({ children, ...rest }) {
  return <Route {...rest}>
    <motion.div
      className="App"
      initial= {{ opacity: 0, x: 100 }}
      animate= {{ opacity: 1, x: 0, y: 0 }}
      exit= {{ opacity: 0, y: 200 }}
    >{children}</motion.div>
  </Route>;
};

export function AnimatedSwitch({ children }) {
  const location = useLocation();

  return <AnimatePresence exitBeforeEnter>
      <Switch key={location.pathname} location={location}>
        {children}
      </Switch>
    </AnimatePresence>;
};