import * as React from 'react';
import { onAuthStateChangedListner } from '../utils/firebase.config';

export const UserAuthContext = React.createContext({
   currentUser: null,
   setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = React.useState(null);
   const value = { currentUser, setCurrentUser };

   React.useEffect(() => {
      const unsubscribe = onAuthStateChangedListner(user => {
         setCurrentUser(user);
      });
      return unsubscribe;
   }, []);

   return <UserAuthContext.Provider value={value}>{children}</UserAuthContext.Provider>;
};
