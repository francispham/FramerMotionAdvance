import React from 'react';
import { motion } from 'framer-motion';

export function SignUp({ setIsLoggedIn }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <h3>Sign Up</h3>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" />
      <label htmlFor="password">Password</label>
      <input id="password" type="text" />
      <br />
      <button>Sign Up</button>
      <p>
        Already have an account?{" "}
        <a href="#signin" onClick={() => setIsLoggedIn("signin")}>Sign In</a>
      </p>
    </motion.div>
  );
};

export function SignIn({ setIsLoggedIn }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <h3>Sign In</h3>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" />
      <label htmlFor="password">Password</label>
      <input id="password" type="text" />
      <label htmlFor="confirmPassword">Password Confirm</label>
      <input id="confirmPassword" type="text" />
      <br />
      <button>Sign In</button>
      <p>
        Need an account? <a href="#signup" onClick={() => setIsLoggedIn("signup")}>Sign Up</a>
      </p>
    </motion.div>
  );
};