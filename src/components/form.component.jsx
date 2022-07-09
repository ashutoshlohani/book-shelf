import React from 'react';
import {
   signInUserWithEmail,
   signInUserWithGooglePopup,
   registerUserWithEmail,
} from '../utils/firebase.config';
import { FaSpinner } from 'react-icons/fa';
import '../styles/form.styles.scss';
import '../styles/spinner.styles.scss';

function Form({ onSubmit, buttonText }) {
   const [visible, setVisible] = React.useState(false);

   function handleSubmit(event) {
      event.preventDefault();
      const { email, password } = event.target.elements;

      onSubmit({
         email: email.value,
         password: password.value,
      });

      setVisible(true);
   }

   return (
      <form onSubmit={handleSubmit}>
         <div className='input-container'>
            <label htmlFor='email'>Email</label>
            <br />
            <input id='email' type='email' required />
         </div>
         <div className='input-container'>
            <label htmlFor='password'>Password</label>
            <br />
            <input id='password' type='password' required />
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

export function LoginForm({ changeState }) {
   async function login(formData) {
      const { email, password } = formData;
      try {
         await signInUserWithEmail(email, password);
      } catch (error) {
         console.log(`error: ${error}`);
         if (error.code === 'auth/user-not-found') {
            alert('You are not registered with this email! Please register.');
         } else if (error.code === 'auth/wrong-password') {
            alert('Wrong password! Please enter correct password.');
         } else {
            console.error(error);
         }
      }
   }

   async function handleSignInWithGoogle() {
      await signInUserWithGooglePopup();
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
               <button onClick={handleSignInWithGoogle}>
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

export function RegisterForm({ changeState }) {
   async function register(formData) {
      const { email, password } = formData;
      try {
         await registerUserWithEmail(email, password);
      } catch (error) {
         if (error.code === 'auth/email-already-in-use') {
            alert('Email already in use! Please try again with another email.');
         } else if (error.code === 'auth/weak-password') {
            alert('Password should be at least 6 characters');
         } else {
            console.error(error);
         }
      }
   }

   async function handleSignInWithGoogle() {
      await signInUserWithGooglePopup();
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
               <button onClick={handleSignInWithGoogle}>
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
