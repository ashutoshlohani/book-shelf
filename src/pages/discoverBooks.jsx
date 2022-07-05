import React from 'react';
import { client } from '../utils/api-client';
import NavBar from '../components/navbar';

const Discover = () => {
   const [booksData, setBooksData] = React.useState([]);
   const [query, setQuery] = React.useState();

   React.useEffect(() => {
      if (!query) {
         return;
      }
      client(`/volumes?q=${encodeURIComponent(query)}&maxResults=3`).then(data => {
         setBooksData(data.items);
      });
   }, [query]);

   function handleSubmit(event) {
      event.preventDefault();
      setQuery(event.target.elements.xxx.value);
   }

   return (
      <>
         <NavBar />
         <hr />
         <form onSubmit={handleSubmit}>
            <input id='xxx' type='text' placeholder='Search for a book' />
            <button type='submit'>Search</button>
         </form>
         <hr />
         {booksData.map(bookdata => {
            const BookName = bookdata.volumeInfo.title;
            const Author = bookdata.volumeInfo.authors[0];
            const Year = bookdata.volumeInfo.publishedDate;
            const Description = bookdata.volumeInfo.description;
            const Img = bookdata.volumeInfo.imageLinks.smallThumbnail;

            return (
               <div key={bookdata.id}>
                  <h1>Book Name:{BookName}</h1>
                  <p>Author:{Author}</p>
                  <p>Year:{Year}</p>
                  <p>Description:{Description}</p>
                  <img alt='' src={Img} />
                  <hr />
               </div>
            );
         })}
      </>
   );
};

export default Discover;
