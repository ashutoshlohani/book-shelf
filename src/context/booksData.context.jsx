// import * as React from 'react';
// import { client } from '../utils/api-client';

// export const BooksDataContext = React.createContext();

// export const BooksDataProvider = ({ children }) => {
//    const [booksData, setBooksData] = React.useState();
//    const [error, setError] = React.useState();

//    React.useEffect(() => {
//       client(`/volumes?q=${encodeURIComponent('ram')}&maxResults=5`).then(
//          responseData => {
//             setBooksData(responseData);
//          },
//          errorData => {
//             setError(errorData);
//          }
//       );
//    }, []);

//    const value = { booksData, error };

//    return <BooksDataContext.Provider value={value}>{children}</BooksDataContext.Provider>;
// };
