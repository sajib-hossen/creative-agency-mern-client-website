import { useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import firebaseIntialize from "../pages/Login/Firebase/FirebaseIntialize";
firebaseIntialize();

const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  //   new user register system
  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        // ..
      })

      .finally(() => setIsLoading(false));
  };

  //   login user system

  const loginUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //   user  observer on the state

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, []);

  //   user log out system

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })

      .finally(() => setIsLoading(false));
  };

  return {
    users,
    error,
    logOut,
    isLoading,
    loginUser,
    registerUser,
  };
};

export default useFirebase;
