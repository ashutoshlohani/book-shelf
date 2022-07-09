import { FaSpinner, FaSearch, FaTimes } from 'react-icons/fa';
import '../styles/spinner.styles.scss';
import '../styles/search-bar.styles.scss';

const SearchBar = ({ handleSubmit, isLoading, isError }) => {
   return (
      <form onSubmit={handleSubmit} className='search-container'>
         <input
            className='input-container'
            id='search'
            type='text'
            placeholder='Search for book, author...'
         />
         <button type='submit' className='button-container'>
            {isLoading ? (
               <FaSpinner className='spinner' />
            ) : isError ? (
               <FaTimes aria-label='error' />
            ) : (
               <FaSearch aria-label='search' />
            )}
         </button>
      </form>
   );
};

export default SearchBar;
