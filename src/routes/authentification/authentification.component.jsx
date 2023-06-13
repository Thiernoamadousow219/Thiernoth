import SignUpForm from "../../components/sign-up/sign-up.component";
import SignInForm from "../../components/sign-in/sign-in.component";

import './authentification.styles.scss';
const Auth = () => {

    return (
        <div className="authentification-container">            
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
}

export default Auth;