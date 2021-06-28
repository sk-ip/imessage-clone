import {Button} from "@material-ui/core";
import React from 'react';
import {auth, provider} from './firebase';
import './Login.css';

function Login() {

    const siginIn = () => {
        auth.signInWithPopup(provider)
        .catch((error) => {
            alert(error.message);
        });
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="" alt=""/>
                <h1>iMessage</h1>
            </div>
            <Button onClick={siginIn}>Sign In</Button>
        </div>
    );
}

export default Login;