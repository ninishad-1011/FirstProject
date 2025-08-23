import React, { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile as firebaseUpdateProfile,
} from "firebase/auth";
import { auth } from "../FireBase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  // Sign up
  const createUserWithPass = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // Sign in
  const signInWithEmail = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };


  const updateUserProfile = (name) => {
    if (!auth.currentUser) return Promise.reject("No user logged in");

    return firebaseUpdateProfile(auth.currentUser, { displayName: name })
      .then(() => setUser({ ...auth.currentUser }));
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setloading(false);
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
    updateUserProfile,
  };

  return <AuthContext.Provider value={authInformation}>{

    loading?<div className="flex items-center justify-center min-h-screen bg-blue-950">
  <span className="text-white text-3xl font-bold animate-pulse">
    Loading......
  </span>
</div>
:children
  }</AuthContext.Provider>;
};

export default AuthProvider;
