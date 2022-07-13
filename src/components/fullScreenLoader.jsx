import { FaSpinner } from 'react-icons/fa';
import '../styles/spinner.styles.scss';

const styles = {
   hight: '50vh',
   width: '50vw',
   backgroundColor: '#000',
};

const FullScreenLoder = () => {
   return (
      <div>
         <FaSpinner className='spinner' style={{ styles }} />
      </div>
   );
};

export default FullScreenLoder;
