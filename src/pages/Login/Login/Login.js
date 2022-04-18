import React, { useState } from 'react';
import './Login.css';

import home1 from '../../../images/home1.jpg';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.pathname || '/';
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  const handleEmail=()=>{
    setEmail(email);
  }
  const handlePassword=()=>{
    setPassword(password);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password);
    console.log('login');
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
                <input onBlur={handleEmail} type='email' name='name' />
              </div>
              <div className='inputBx'>
                <span>Password</span>
                <input onBlur={handlePassword} type='password' name='password' />
              </div>
              <div className='inputBx'>
                <input type='submit' value='Sign in' />
              </div>
              <div className='inputBx'>
                <p>
                  Don't have an account? <Link to='/register'>Sign up</Link>
                </p>
              </div>
            </form>
            <div className='or'>
              <div className='left'></div>
              <div className='middle'>or</div>
              <div className='right'></div>
            </div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
