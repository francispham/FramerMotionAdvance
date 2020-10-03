import React, { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

import { 
  App, GridGallery, BlogPosts, ItemListings
} from "./Pages";

import "./styles.css";
import { Loading, SignIn, SignUp } from "./Components";

const Routes = () => {
  const [loggedIn, setIsLoggedIn] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);

  let location = useLocation();
  const { y } = useWindowScrollPosition({
    throttle: 500
  });

  return (
    <>
      <motion.header 
        animate={{ 
          background: y > 20 ? "var(--headerBackground)" : "var(--background)",
        }}
        style={{
          boxShadow: y > 20 ? "var(--level-2)" : "none",
          color: y > 20 ? "white" : "#333"
        }}
      >
        <div style={{
          flex: 4,
          display: "flex",
          justifyContent: y > 20 ? "flex-end" : "flex-start"
        }}>
          {/* https://www.framer.com/api/motion/component/#layout-animation */}
          <motion.h1 layout className="fake-logo">FRAMER MOTION ADVANCE</motion.h1>
        </div>
        <div style={{ flex: 3, textAlign: "end" }} >
          <a href="#signin" onClick={() => setIsLoggedIn("signin")}>SIGN IN</a>
          <Link to="/">APP</Link>
          <Link to="/GridGallery">GRID GALLERY</Link>
          <Link to="/BlogPosts">BLOG POSTS</Link>
          <Link to="/ItemListings">LIST</Link>
        </div>
      </motion.header>
      
      <AnimateSharedLayout>
        <AnimatePresence>
          {loggedIn && <>
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="modal"
            >
              <motion.div layout className="card">
                <AnimatePresence exitBeforeEnter>
                  {loggedIn === "signin" && (
                    <SignIn key="signin" setIsLoggedIn={setIsLoggedIn} />
                  )}
                  {loggedIn === "signup" && (
                    <SignUp key="signup" setIsLoggedIn={setIsLoggedIn} />
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoggedIn("")}
              className="overlay"       
            />
          </>}
        </AnimatePresence>
      </AnimateSharedLayout>

      {/* https://www.framer.com/api/motion/animate-presence/ */}
      <AnimatePresence className="App" exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={App} />
          <Route exact path="/GridGallery" component={GridGallery} />
          <Route exact path="/BlogPosts" component={BlogPosts} />
          <Route exact path="/ItemListings" component={ItemListings} />
        </Switch>
      </AnimatePresence>
      
      {/* https://www.framer.com/api/motion/animate-shared-layout/ */}
      <AnimateSharedLayout>
        <AnimatePresence>
          {isLoading && <Loading setIsLoading = {setIsLoading}/>}
        </AnimatePresence>
        <motion.footer 
          layoutId="footer"
          onClick={() => setIsLoading(true)}
        >
          <motion.h1 
            layoutId="logo" 
            className="fake-logo"
          >
            Animating Loading Feature
          </motion.h1>
        </motion.footer>
      </AnimateSharedLayout>
    </>
  );
};

export default Routes;