import React, { useState, useEffect, createContext, useContext } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const provider = new GoogleAuthProvider();

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  //To track user's sign in and sign out
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  //Sign User In With Google
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //Sign User Out
  const signUserOut = () => {
    signOut(auth)
      .then(() => {
        toast("Sign Out Success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <authContext.Provider value={{ user, signIn, signUserOut }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return useContext(authContext);
};
