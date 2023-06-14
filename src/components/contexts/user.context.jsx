import {createContext ,useState ,useEffect} from 'react';
import { createUserDocumentFromAuth, onAuthStateListened } from '../../routes/utils/firebase/firebase';

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : () => null,
    
});

export const UserProvider = ({children}) => {
    const [currentUser , setCurrentUser] = useState(null);
    const value = {currentUser , setCurrentUser};
    
    useEffect(() => {
        const unsubscribe = onAuthStateListened((user) => {
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}