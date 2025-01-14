import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(email,password);
    }

    const authInfo = {createUser}
    return (    
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;