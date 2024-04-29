import { auth } from "../firebase/credencialesFirebase";
import {createContext, useContext  } from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider, 
    signInWithPopup,
    signOut

} from "firebase/auth";
export const authContext = createContext();

export const useAuth = () =>{
    const context = useContext(authContext)
    if(!context){
        console.log("error al crear el contexto ");
    }
    return context;
};

export function AuthProvider({ children }) {
    return <authContext.Provider>{children}</authContext.Provider>;
}