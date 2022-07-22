import * as React from 'react';
import { UserAuthContext } from './context/userAuth.context';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import NavBar from './components/navbar.component';

import Discover from './pages/discoverBooks';
import ReadingList from './pages/ReadingList';
import FinishedBooks from './pages/FinishedBooks';

// import FullScreenLoder from './components/fullScreenLoader';
import BookDetails from './components/book-details.component';

function App() {
   const { currentUser } = React.useContext(UserAuthContext);

   if (currentUser) {
      return (
         <Routes>
            <Route path='/' element={<NavBar />}>
               <Route index element={<Discover />} />
               <Route path='/readingList' element={<ReadingList />} />
               <Route path='/finishedBooks' element={<FinishedBooks />} />
               <Route path='/book/*' element={<BookDetails />} />
            </Route>
         </Routes>
      );
   } else {
      return <LandingPage />;
   }
}

export default App;
