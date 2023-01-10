import * as React from 'react';
import SignInUpPage from '../signInUpPage';
import { isSignedIn } from '../../services/authService';
import Fight from '../fight';
import SignOut from '../signOut';

class StartScreen extends React.Component {
    state = {
        isSignedIn: false
    };

    componentDidMount() {
        this.setIsLoggedIn(isSignedIn());
    }

    setIsLoggedIn = (isSignedIn) => {
        this.setState({ isSignedIn });
    }

    render() {
        const { isSignedIn } = this.state;
        if (!isSignedIn) {
            return <SignInUpPage setIsLoggedIn={this.setIsLoggedIn} />
        }

        return (
            <>
                <Fight />
                <SignOut isSignedIn={isSignedIn} onSignOut={() => this.setIsLoggedIn(false)} />
            </>
        );
    }
}

export default StartScreen;