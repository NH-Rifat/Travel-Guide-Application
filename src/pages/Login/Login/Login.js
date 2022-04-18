import React, { useRef, useState } from 'react';
import './Login.css';

import home1 from '../../../images/home1.jpg';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Loading/Loading';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }
  // if (loading || sending) {
  //   return <Loading></Loading>
  // }

  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
    } else {
      toast('please sent Email');
    }
  };

  return (
    <div className='login-container'>
      <section>
        <div className='imgBx'>
          <img src={home1} alt='' />
        </div>
        <div className='contentBx'>
          <div className='formBx'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className='inputBx'>
                <span>Email</span>
                <input ref={emailRef} type='email' name='name' />
              </div>
              <div className='inputBx'>
                <span>Password</span>
                <input ref={passwordRef} type='password' name='password' />
              </div>
              <div className='inputBx'>
                <p>{errorElement}</p>
              </div>
              <div className='inputBx'>
                <input type='submit' value='Sign in' />
              </div>
              <div className='inputBx'>
                <p>
                  Don't have an account? <Link to='/register'>Sign up</Link>
                </p>
              </div>
              <div className='inputBx'>
                <p>
                  Forget Password?
                  <button className='reset' onClick={resetPassword}>
                    Reset Password
                  </button>
                </p>
              </div>
            </form>
            <div className='or'>
              <div className='left'></div>
              <div className='middle'>or</div>
              <div className='right'></div>
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
