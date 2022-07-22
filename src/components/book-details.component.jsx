// import Discover from '../pages/discoverBooks';
import '../styles/book-details.styles.scss';

const BookDetails = ({ book }) => {
   console.log(book);
   return (
      <>
         <div className='container'>
            <div>image</div>
            <div>details</div>
         </div>
      </>
   );
};

export default BookDetails;
