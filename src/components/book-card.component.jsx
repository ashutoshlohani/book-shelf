import '../styles/book-card.styles.scss';

const BookCard = ({ booksData }) => {
   return (
      <div>
         {booksData.items.map(d => {
            const BookName = d.volumeInfo.title;
            const Author = d.volumeInfo.authors ? d.volumeInfo.authors[0] : 'Not Available';
            const Year = d.volumeInfo.publishedDate;
            const Description = d.volumeInfo.description;
            const Img = d.volumeInfo.imageLinks ? d.volumeInfo.imageLinks.thumbnail : '';

            return (
               <div key={d.id} className='card-body'>
                  <div className='img-container'>
                     <img alt='' src={Img} />
                  </div>
                  <div className='details-container'>
                     <h1>{BookName}</h1>
                     <div className='author-and-year'>
                        <h3>{Author}</h3>
                        <h4>{Year}</h4>
                     </div>
                     <div className='desc'>
                        <p>{Description}</p>
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default BookCard;