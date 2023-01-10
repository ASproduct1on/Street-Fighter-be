import { unsetLoginSession } from "../../services/authService";
import React from 'react';
import './signOut.css';

export default function SignOut({ isSignedIn, onSignOut}) {
    const signOut = () => {
        unsetLoginSession();
        onSignOut();
    }

    if(isSignedIn) {
        return (
            <div onClick={signOut} id="sign-out">Sign out</div>
        )
    }

    return null;
}