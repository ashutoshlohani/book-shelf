import React from 'react';

import { client } from '../utils/api-client';
// import { FaSpinner, FaSearch, FaTimes } from 'react-icons/fa';

import '../styles/spinner.styles.scss';
import '../styles/search-bar.styles.scss';
import NavBar from '../components/navbar';

const Discover = () => {
   const [status, setStatus] = React.useState('idle');
   const [booksData, setBooksData] = React.useState();
   const [error, setError] = React.useState();
   const [query, setQuery] = React.useState();
   const [queried, setQueried] = React.useState(false);

   // const isLoading = status === 'loading';
   const isSuccess = status === 'success';
   const isError = status === 'error';

   React.useEffect(() => {
      if (!queried) {
         return;
      }
      // setStatus('loading');
      client(`/volumes?q=${encodeURIComponent(query)}&maxResults=3`).then(
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
         <NavBar />
         <form action='' className='search-bar' onSubmit={handleSubmit}>
            <input
               type='search'
               name='search'
               pattern='.*\S.*'
               placeholder='  Search for books, author....'
               required
            />
            <button className='search-btn' type='submit'>
               <span>Search</span>
            </button>
         </form>

         {/* <form onSubmit={handleSubmit}>
            <label htmlFor='search'>Search Books :</label>
            <br />
            <input id='search' type='text' placeholder='Book, author ....' />
            <br />
            <button type='submit'>
               {isLoading ? (
                  <FaSpinner className='spinner' />
               ) : isError ? (
                  <FaTimes aria-label='error' />
               ) : (
                  <FaSearch aria-label='search' />
               )}
            </button>
         </form> */}

         {isError ? (
            <div>
               <p>There was an error:</p>
               <pre>{error.message}</pre>
            </div>
         ) : null}

         {isSuccess ? (
            booksData?.items?.length ? (
               <div>
                  {booksData.items.map(d => {
                     console.log(d);

                     const BookName = d.volumeInfo.title;
                     const Author = d.volumeInfo.authors
                        ? d.volumeInfo.authors[0]
                        : 'Not Available';
                     const Year = d.volumeInfo.publishedDate;
                     const Description = d.volumeInfo.description;
                     const Img = d.volumeInfo.imageLinks
                        ? d.volumeInfo.imageLinks.smallThumbnail
                        : '';

                     return (
                        <div key={d.id}>
                           <h1>Book Name:{BookName}</h1>
                           <p>Author:{Author}</p>
                           <p>Year:{Year}</p>
                           <p>Description:{Description}</p>
                           <img alt='' src={Img} />
                           <hr />
                        </div>
                     );
                  })}
               </div>
            ) : (
               <p>No books found. Try another search.</p>
            )
         ) : null}
      </>
   );
};

export default Discover;
