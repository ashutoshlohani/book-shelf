import * as React from 'react';
// import { Routes, Route } from 'react-router-dom';
import { UserAuthContext } from './context/userAuth.context';

import LandingPage from './pages/LandingPage';
import Discover from './pages/discoverBooks';

function App() {
   const { currentUser } = React.useContext(UserAuthContext);

   if (currentUser) {
      return <Discover />;
   } else {
      return <LandingPage />;
   }
}

export default App;
