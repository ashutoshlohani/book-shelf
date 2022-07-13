import { Outlet, Link } from 'react-router-dom';
import { signOutUser } from '../utils/firebase.config';
import { HiOutlineLogout } from 'react-icons/hi';
import '../styles/navbar.styles.scss';

const NavBar = () => {
   return (
      <>
         <div className='navbar'>
            <div className='logo'>
               <Link to='/' className='logo-text'>
                  Book
                  <span>Shelf</span>
               </Link>
            </div>
            <div className='menu-items'>
               <Link to='/' className='nav-links'>
                  Discover
               </Link>
               <Link to='/readingList' className='nav-links'>
                  Reading List
               </Link>
               <Link to='/finishedBooks' className='nav-links'>
                  Finished Books
               </Link>
            </div>
            <div className='user'>
               <div className='user-details'>
                  <div className='user-image'></div>
                  <div className='user-name'>Lorem Ipsum</div>
               </div>
               <div className='logout'>
                  <button onClick={signOutUser} className='logout-button'>
                     Logout <span style={{ marginLeft: '0.5rem' }}>{<HiOutlineLogout />}</span>
                  </button>
               </div>
            </div>
         </div>
         <Outlet />
      </>
   );
};

export default NavBar;
