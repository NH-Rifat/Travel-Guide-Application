import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import SocialLogin from '../SocialLogin/SocialLogin';

import home1 from '../../../images/home1.jpg';

const Register = () => {
  return (
    <div className='login-container'>
      <section>
        <div className='imgBx'>
          <img src={home1} alt='' />
        </div>
        <div className='contentBx'>
          <div className='formBx'>
            <h2>Register</h2>
            <form action='#'>
              <div className='inputBx'>
                <span>Username</span>
                <input type='text' name='name' />
              </div>
              <div className='inputBx'>
                <span>Email</span>
                <input type='email' name='name' />
              </div>
              <div className='inputBx'>
                <span>Password</span>
                <input type='password' name='password' />
              </div>
              <div className='agree'>
                <label htmlFor='checkbox'>
                  <input type='checkbox' name='checkbox' id='checkbox' />
                  Agree terms and conditions
                </label>
              </div>
              <div className='inputBx'>
                <input type='submit' value='Sign up' />
              </div>
              <div className='inputBx'>
                <p>
                Already have an account? <Link to="/login">Sign in</Link>
                </p>
              </div>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;