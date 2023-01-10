import * as React from 'react';
import './signInUpPage.css';
import SignIn from '../signIn';
import SignUp from '../signUp';

const signPages = {
    signIn: 0,
    signUp: 1
};

class SignInSignUpPage extends React.Component {
    state = {
        index: signPages.signUp
    };

    setIndex = (index) => {
        this.setState({ index });
    }

    render() {
        const { index } = this.state;

        return (
            <div id="sign-in-up">
                <div id="form-wrapper">
                    <div className="header">
                        <div onClick={() => this.setIndex(signPages.signIn)} className={`${index === signPages.signIn ? 'active' : ''}`}>Sign In</div>
                        <div onClick={() => this.setIndex(signPages.signUp)} className={`${index === signPages.signUp ? 'active' : ''}`}>Sign Up</div>
                    </div>
                    {index === signPages.signIn ? <SignIn setIsLoggedIn={this.props.setIsLoggedIn} /> : <SignUp setIsLoggedIn={this.props.setIsLoggedIn}/>}
                </div>
            </div>
        );
    }
}


export default SignInSignUpPage;