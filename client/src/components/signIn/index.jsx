import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from 'material-ui';
import { Button } from '@material-ui/core';

import './signIn.css';
import { login } from '../../services/domainRequest/auth';
import { setLoginSession } from '../../services/authService';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function SignIn({ setIsLoggedIn }) {
    const classes = useStyles();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onSubmit = async () => {
        const data = await login({ email, password });
        if(data && !data.error) {
            setLoginSession(data);
            setIsLoggedIn(true);
        }
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField onChange={onEmailChange} id="standard-basic" label="Standard" placeholder="Email"/>
            <TextField onChange={onPasswordChange} id="standard-basic" label="Standard" placeholder="Password" type="password"/>
            <Button onClick={onSubmit} variant="contained" color="primary">Sign In</Button>
        </form>
    )
}