import { useState } from "react"


import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import { useEffect } from "react";
import initializeAuthentication from "../components/Firebase/Firebase.init";


initializeAuthentication()


const useFirebase = () => {
  const [user, setUser] = useState({});
  const [enterPassword, setEnterPassword] = useState('')
  const [error, setError] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(false)



  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)

      .catch(error => {
        setError(error.message);
      })
  }
  const handleRegistration = e => {
    e.preventDefault();
    if (password.length < 6) {
      setError('password must be at least 6 character')
      return
    }
    isLogin ? processLogin(email, password) : createNewUser(email, password);
  }
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setError('')
      })
      .catch(error => {
        setError(error.message)
      })

  }
  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setError('')
      })
      .catch(error => {
        setError(error.message)
      })
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }
  const handlePassWordChange = e => {
    setPassword(e.target.value);
  }
  const toggleLogIn = e => {
    setIsLogin(e.target.checked);

  }

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        sessionStorage.clear();
        window.location.reload();
      })
  }
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        sessionStorage.setItem('user', JSON.stringify(user.displayName));
      }
    })
  }, [])


  return {
    user,
    error,
    isLogin,
    enterPassword,
    signInUsingGoogle,
    handleEmailChange,
    handlePassWordChange,
    setEnterPassword,
    handleRegistration,
    toggleLogIn,


    logout
  }
}

export default useFirebase;