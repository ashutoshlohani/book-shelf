import React from 'react';
import { client } from '../utils/api-client';
import BookCard from '../components/book-card.component';
import SearchBar from '../components/search-bar.component';

const Discover = () => {
   const [status, setStatus] = React.useState('idle');
   const [booksData, setBooksData] = React.useState();
   const [error, setError] = React.useState();
   const [query, setQuery] = React.useState();
   const [queried, setQueried] = React.useState(false);

   const isLoading = status === 'loading';
   const isSuccess = status === 'success';
   const isError = status === 'error';

   React.useEffect(() => {
      if (!queried) {
         return;
      }
      setStatus('loading');
      client(`/volumes?q=${encodeURIComponent(query)}&maxResults=10`).then(
         responseData => {
            setBooksData(responseData);
            setStatus('success');
         },
         errorData => {
            setError(errorData);
            setStatus('error');
         }
      );
   }, [queried, query]);

   function handleSubmit(event) {
      event.preventDefault();
      setQueried(true);
      setQuery(event.target.elements.search.value);
   }

   return (
      <>
         <SearchBar handleSubmit={handleSubmit} isLoading={isLoading} isError={isError} />

         {isError ? (
            <div>
               <p>There was an error:</p>
               <pre>{error.message}</pre>
            </div>
         ) : null}

         {isSuccess ? (
            booksData?.items?.length ? (
               <BookCard booksData={booksData} />
            ) : (
               <p>No books found. Try another search.</p>
            )
         ) : null}
      </>
   );
};

export default Discover;
