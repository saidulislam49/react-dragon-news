import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)


    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            console.log('Current user: ', currentUser);
            setUser(currentUser);
        })
    }, [])
    const authInfo = {
        user,
        logIn,
        createUser,
        logOut,
    }
    return (    
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;