import * as React from 'react';
import { onAuthStateChangedListner } from '../utils/firebase.config';

export const UserAuthContext = React.createContext({
   currentUser: null,
   setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
   // TODO
   // state for user auth - not-login : idle ### auhenticating user data : loading ### user sucessfuly authenticated : log-in
   // const [userState, setUserState] = React.useState(null);

   const [currentUser, setCurrentUser] = React.useState(null);

   const value = { currentUser, setCurrentUser };

   React.useEffect(() => {
      const unsubscribe = onAuthStateChangedListner(user => {
         setCurrentUser('authenticated');
      });
      return unsubscribe;
   }, [currentUser]);

   return <UserAuthContext.Provider value={value}>{children}</UserAuthContext.Provider>;
};
