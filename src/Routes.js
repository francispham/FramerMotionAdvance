import React from "react";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import App from "./App";
import GridGallery from "./GridGallery";

const Routes = () => {
  let location = useLocation();
  console.log('location:', location);

  return (
    <>
      <header>
        <h1 className="fake-logo">FRAMER MOTION ADVANCE</h1>
        <div>
          <Link to="/">APP</Link>{" "}
          <Link to="/GridGallery">GRID GALLERY</Link>
        </div>
      </header>
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