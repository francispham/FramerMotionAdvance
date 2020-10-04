import React, { useState } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import useWindowScrollPosition from '@rehooks/window-scroll-position';

import { 
  App, GridGallery, BlogPosts, ItemListings
} from './Pages';

import './styles.css';
import { 
  Loading, SignIn, SignUp, RouteTransition, AnimatedSwitch 
} from './Components';

const Routes = () => {
  const [loggedIn, setIsLoggedIn] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);

  const { y } = useWindowScrollPosition({
    throttle: 500
  });

  return <Router>
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

    <AnimatedSwitch>
      <RouteTransition exact path="/"><App /></RouteTransition>
      <RouteTransition exact path="/GridGallery"><GridGallery /></RouteTransition>
      <RouteTransition exact path="/BlogPosts"><BlogPosts /></RouteTransition>
      <RouteTransition exact path="/ItemListings"><ItemListings /></RouteTransition>
    </AnimatedSwitch>
    
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
  </Router>;
};

export default Routes;