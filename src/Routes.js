import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

import App from "./App";
import GridGallery from "./GridGallery";

const Routes = () => {
  let location = useLocation();
  const { y } = useWindowScrollPosition({
    throttle: 500
  });
  console.log('y:', y);

  return (
    <>
      <motion.header animate={{ 
        background: y > 20 ? "var(--headerBackground)" : "var(--background)",
        boxShadow: y > 20 ? "var(--level-2)" : "none",
        color: y > 20 ? "white" : "#333"
      }}>
        <div style={{
          flex: 4,
          display: "flex",
          justifyContent: y > 20 ? "flex-end" : "flex-start"
        }}>
          <h1 className="fake-logo">FRAMER MOTION ADVANCE</h1>
        </div>
        <div style={{ flex: 3, textAlign: "end" }} >
          <Link to="/">APP</Link>
          <Link to="/GridGallery">GRID GALLERY</Link>
        </div>
      </motion.header>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={App} />
          <Route exact path="/GridGallery" component={GridGallery} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Routes;