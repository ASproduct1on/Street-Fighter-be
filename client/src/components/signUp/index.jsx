import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from 'material-ui';
import { Button } from '@material-ui/core';

import { createUser } from '../../services/domainRequest/userRequest';
import { setLoginSession } from '../../services/authService';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function SignUp({ setIsLoggedIn }) {
    const classes = useStyles();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const onLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const onPhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }
    

    const onSubmit = async () => {
        const data = await createUser({ email, password, firstName, lastName, phoneNumber });
        if(data && !data.error) {
            setLoginSession(data);
            setIsLoggedIn(true);
        }
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField key="first-name" onChange={onFirstNameChange} id="standard-basic" label="Standard" placeholder="First Name"/>
            <TextField key="last-name" onChange={onLastNameChange} id="standard-basic" label="Standard" placeholder="Last Name"/>
            <TextField key="email" onChange={onEmailChange} id="standard-basic" label="Standard" placeholder="Email"/>
            <TextField key="phone" onChange={onPhoneNumberChange} id="standard-basic" label="Standard" placeholder="Phone Number"/>
            <TextField key="password" onChange={onPasswordChange} id="standard-basic" label="Standard" placeholder="Password" type="password"/>
            <Button onClick={onSubmit} variant="contained" color="primary">Sign Up</Button>
        </form>
    )
}