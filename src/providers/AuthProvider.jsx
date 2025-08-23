import React, { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../FireBase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Sign up
  const createUserWithPass = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // Sign in
  const signInWithEmail = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("login user", currentUser.email);
        setUser(currentUser);
      } else {
        console.log("user is signout");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Sign out
  const handleSignout = () => {
    return signOut(auth);
  };

  const authInformation = {
    user,
    handleSignout,
    createUserWithPass,
    signInWithEmail,
  };

  return <AuthContext.Provider value={authInformation}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
