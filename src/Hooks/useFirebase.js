import React, { useEffect, useState } from 'react'; import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification, onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);


    //Clear Error
    useEffect(() => {
        setTimeout(() => {
            setError('');
        }, 5000)
    }, [error]);

    //Email Sign In
    const signInWithEmail = e => {
        e.preventDefault();
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Set Name And Profile image
    const setNameAndImage = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => { })
            .catch((error) => {
                setError(error.message);
            });
    }

    //Email Verify
    const emailVerify = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert(`An Email is sent to ${email}`);
            });
    }

    //Get Current User Signed In
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false);
        });
        return unsubscribe;
    }, [])

    //Sign Out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                setError(error.message)
            });
    }

    //Reset Password
    const passwordReset = e => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("A password Reset Email has been sent to your email");
            })
            .catch((error) => {
                setError(error.message)
            });
    }


    //Sign Up With Email Password
    const signUp = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setNameAndImage();
                emailVerify();
                alert('User has been Created Successfully')
            })
            .catch((err) => {
                setError(err.message);
            });
    }


    //GetName
    const getName = e => {
        setName(e?.target?.value);
    }

    //GetEmail
    const getEmail = e => {
        setEmail(e?.target?.value);
    }

    //GetPassword
    const getPassword = e => {
        setPassword(e?.target?.value);
    }

    //GetPhoto
    const getphoto = e => {
        setPhoto(e?.target?.value);
    }


    return {
        signInWithEmail,
        logOut,
        user,
        setUser,
        error,
        setError,
        password,
        setPassword,
        signUp,
        getName,
        getEmail,
        getPassword,
        getphoto,
        loading,
        passwordReset,
    }
};

export default useFirebase;