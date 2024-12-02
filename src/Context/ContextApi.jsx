import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  updateProfile,
  updatePassword,
  deleteUser,
  updateEmail,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

export const AuthContext = createContext(null);
export const AssetContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

// AuthProvider Component for Authentication
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const createUserGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign out user
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Google sign-in
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // update user profile
  const updateUserProfile = (updatedUserData) => {
    return updateProfile(auth.currentUser, updatedUserData);
  };

  // update password
  const updateUserPassword = (newPassword) => {
    return updatePassword(auth.currentUser, newPassword);
  };

  // udpate account email
  // const updateUserEmail = (updatedEmail) => {
  //   return updateEmail(auth.currentUser, updatedEmail);
  // };

  // verification email send to user email
  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // delete user profile or account
  const deleteUserAccount = () => {
    return deleteUser(auth.currentUser);
  };

  // send password reset email
  const passwordChange = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Auth state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser ? "Logged in" : "Not logged in");
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        createUser,
        createUserGoogle,
        loginUser,
        signOutUser,
        loginWithGoogle,
        updateUserProfile,
        updateUserPassword,
        // updateUserEmail,
        passwordChange,
        emailVerification,
        deleteUserAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// AssetProvider Component for Cart, Wish List, and Product Data
const AssetProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [wishData, setWishData] = useState([]);
  const [product, setProduct] = useState([]);

  return (
    <AssetContext.Provider
      value={{
        cartData,
        setCartData,
        wishData,
        setWishData,
        product,
        setProduct,
      }}
    >
      {children}
    </AssetContext.Provider>
  );
};

// Export the combined providers
const CombinedProvider = ({ children }) => (
  <AuthProvider>
    <AssetProvider>{children}</AssetProvider>
  </AuthProvider>
);

export default CombinedProvider;
