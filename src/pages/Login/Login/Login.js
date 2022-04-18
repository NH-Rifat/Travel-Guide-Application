import React from 'react';
import './Login.css';

import home1 from '../../../images/home1.jpg';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login-container'>
      <section>
        <div className='imgBx'>
          <img src={home1} alt='' />
        </div>
        <div className='contentBx'>
          <div className='formBx'>
            <h2>Login</h2>
            <form action='#'>
              <div className='inputBx'>
                <span>Email</span>
                <input type='email' name='name' />
              </div>
              <div className='inputBx'>
                <span>Password</span>
                <input type='password' name='password' />
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
