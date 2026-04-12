import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const AuthData = {
        user,
        setUser,
        createUser
    }
    return (
        <AuthContext value={AuthData}>{children}</AuthContext>
    );
};

export default AuthProvider;