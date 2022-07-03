import * as React from 'react';
import './styles/App.scss';

function Form({ onSubmit, buttonText }) {
   function handleSubmit(event) {
      event.preventDefault();
      const { username, password } = event.target.elements;

      onSubmit({
         username: username.value,
         password: password.value,
      });
   }

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor='username'>Username</label>
            <input id='username' />
         </div>
         <div>
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' />
         </div>
         <div>
            <button type='submit'>{buttonText}</button>
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
         <h1>Sign in</h1>
         <h3>
            New user?
            <span onClick={changeState}>Register here 👈</span>
         </h3>
         <Form onSubmit={login} buttonText='Submit' />
         <span>---------- or ---------</span>
         <div>
            <button>Continue with Google</button>
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
         <h1>Create an account</h1>
         <h3>
            Already a user?
            <span onClick={changeState}>Sign in 👈</span>
         </h3>
         <Form onSubmit={register} buttonText='Register' />
         <span>---------- or ---------</span>
         <div>
            <button>Continue with Google</button>
         </div>
      </div>
   );
}

function App() {
   const [state, setState] = React.useState('login');

   return (
      <div className='landing-page'>
         <div className='left-side'>
            <h1>Book shelf Logo</h1>
            <p>Sign in or register</p>
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
