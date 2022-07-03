import * as React from 'react';
import './styles/App.scss';
import { FaSpinner } from 'react-icons/fa';

function Form({ onSubmit, buttonText }) {
   const [visible, setVisible] = React.useState(false);

   function handleSubmit(event) {
      event.preventDefault();
      const { username, password } = event.target.elements;

      onSubmit({
         username: username.value,
         password: password.value,
      });

      setVisible(true);
   }

   return (
      <form onSubmit={handleSubmit}>
         <div className='input-container'>
            <label htmlFor='username'>Username</label>
            <br />
            <input id='username' />
         </div>
         <div className='input-container'>
            <label htmlFor='password'>Password</label>
            <br />
            <input id='password' type='password' />
         </div>
         <div className='button-container'>
            <button type='submit'>
               {buttonText}
               {visible && <FaSpinner className='spinner' />}
            </button>
         </div>
      </form>
   );
}

function LoginForm({ changeState }) {
   function login(formData) {
      console.log('login', formData);
   }

   return (
      <div className='form-container'>
         <div className='top'>
            <h1>Sign in</h1>
            <h3>
               New user?{'  '}
               <span onClick={changeState}>Register here 👈</span>
            </h3>
         </div>
         <div className='middle'>
            <Form onSubmit={login} buttonText='Submit' />
         </div>
         <div className='bottom'>
            <div className='or'>
               <hr />
               <span>Or</span>
               <hr />
            </div>

            <div>
               <button>
                  <img
                     alt='google'
                     src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'
                  />
                  Continue with Google
               </button>
            </div>
         </div>
      </div>
   );
}

function RegisterForm({ changeState }) {
   function register(formData) {
      console.log('register', formData);
   }

   return (
      <div className='form-container'>
         <div className='top'>
            <h1>Create an account</h1>
            <h3>
               Already a user?{'  '}
               <span onClick={changeState}>Sign in 👈</span>
            </h3>
         </div>
         <div className='middle'>
            <Form onSubmit={register} buttonText='Register' />
         </div>
         <div className='bottom'>
            <div className='or'>
               <hr />
               <span>Or</span>
               <hr />
            </div>
            <div>
               <button>
                  <img
                     alt='google'
                     src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'
                  />
                  Continue with Google
               </button>
            </div>
         </div>
      </div>
   );
}

function App() {
   const [state, setState] = React.useState('login');

   return (
      <div className='landing-page'>
         <div className='left-side'>
            <div className='logo-continer'>
               <h1>BookShelf</h1>
               <p>Find your next book from our shelf</p>
            </div>
         </div>

         <div className='right-side'>
            {state === 'login' ? (
               <LoginForm changeState={() => setState('register')} />
            ) : (
               <RegisterForm changeState={() => setState('login')} />
            )}
         </div>
      </div>
   );
}

export default App;
