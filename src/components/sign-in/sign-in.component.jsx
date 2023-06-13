import { useState } from "react";
import {
     signIncreateAuthUserWithEmailAndPassword,
     createUserDocumentFromAuth,
     signInWithGooglePopup} from '../../routes/utils/firebase/firebase'
import FormInput from "../form-input/form-input.component";
import '../form-input/form-input.styles.scss';
import Button from '../button/button.component';
import './sign-in.styles.scss';

const defaultFields = {
    email : "",
    password : "",
}

const SignInForm = () => {

    const [formFields, setformFields] = useState(defaultFields);
    const {email,password} = formFields;

    const handleChange = (event) => {
        const {name,value} = event.target;
        setformFields({...formFields,[name] : value})
    };

    const resetFormField = () => {
        setformFields(defaultFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signIncreateAuthUserWithEmailAndPassword(email,password);
            console.log(response);
            resetFormField();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                alert("Mote de passe pour ce E-mail est incorrect");
                break;
                case "auth/user-not-found":
                alert("Votre adresse E-mail incorrect");     
                break;       
                default:     
                console.log(error);
            }
        }

    };

    const signInwithGoogle = async() => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

return (
        <div className="sign-up-container">
            <h2>Vous avez déjà un compte</h2>
            <span>Connectez vous avec votre Email et votre mot de pass</span>
            <form onSubmit={handleSubmit}>

                <FormInput 
                    type="text" 
                    label='Email'
                    onChange={handleChange} 
                    name="email" 
                    value={email} 
                />

                <FormInput 
                    type="password"
                    label="Password" 
                    onChange={handleChange} 
                    name="password" 
                    value={password} 
                />
                <div className="buttons-container">
                    <Button type='submit'> Sign-in </Button>
                    <Button type='button' buttonType={'google'} onClick={signInwithGoogle}> Google sign in </Button>
                </div>
                
            </form>
        </div>
    )

};

export default SignInForm;