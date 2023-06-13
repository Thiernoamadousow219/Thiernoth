import { useState } from "react";
import {createAuthUserWithEmailAndPassword,
     createUserDocumentFromAuth} from '../../routes/utils/firebase/firebase'
import FormInput from "../form-input/form-input.component";
import '../form-input/form-input.styles.scss';
import Button from '../button/button.component';
import './sign-up.styles.scss';
const defaultFields = {
    displayName:"",
    email : "",
    password : "",
    confirmPassword : "",
}

const SignUpForm = () => {

    const [formFields, setformFields] = useState(defaultFields);
    const {displayName,email,password,confirmPassword} = formFields;

    const handleChange = (event) => {
        const {name,value} = event.target;
        setformFields({...formFields,[name] : value})
    };
    const resetFormField = () => {
        setformFields(defaultFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert ('les mots de passes sont pas conforme veuillez saisir à nouveau')
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            console.log(user);

            await createUserDocumentFromAuth(user, {displayName});
            resetFormField();
            
        } catch (error) {
            if (error.code ==='auth/email-already-in-use') {
                alert("ce E-mail existe deja veuillez changer d'E-mail.");
            }else{
                console.log('error')
            }
        }
    }
return (
        <div className="sign-up-container">
            <h2>Je n'ai pas de compte</h2>
            <span>Connectez vous avec votre Email et votre mot de pass</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                type="text" 
                label="Nom complet"
                onChange={handleChange} 
                name="displayName" 
                value={displayName}
                required/>
                <FormInput 
                type="text" 
                label='Email'
                onChange={handleChange} 
                name="email" 
                value={email} 
                required/>
                <FormInput 
                type="password"
                label="Password" 
                onChange={handleChange} 
                name="password" 
                value={password} 
                required/>
                
                <FormInput
                type="password"
                label="Password Confirmer"
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
                required/>
                <Button type="submit"> Enregistrer </Button>
            </form>
        </div>
    )

};

export default SignUpForm;