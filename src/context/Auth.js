import { createContext,useContext,useEffect,useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
import { auth } from "../firebase/firebase";

const userAuthContext = createContext();
export function UserAuthContextProvider({children}){
    const [user, setUser] = useState({});
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }
    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }
    function logOut(){
        return signOut(auth);
    }
    function googleSignIn(){
        let googleAuthProv = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProv);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
            console.log("Auth",currentuser);
            setUser(currentuser)
        })
        return () => {
            unsubscribe();
        };
    }, [])
    return(
        <userAuthContext.Provider value={{user,signUp,logIn,logOut,googleSignIn}}>
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth(){
    return useContext(userAuthContext)
}