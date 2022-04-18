import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import home1 from '../../../images/home1.jpg';
import auth from '../../../firebase.init';

const Register = () => {
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    //const agree = event.target.terms.checked;

    createUserWithEmailAndPassword(email, password);
    navigate('/home');
  };
  return (
    <div className='login-container'>
      <section>
        <div className='imgBx'>
          <img src={home1} alt='' />
        </div>
        <div className='contentBx'>
          <div className='formBx'>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
              <div className='inputBx'>
                <span>Username</span>
                <input type='text' name='name' />
              </div>
              <div className='inputBx'>
                <span>Email</span>
                <input type='email' name='email' />
              </div>
              <div className='inputBx'>
                <span>Password</span>
                <input type='password' name='password' />
              </div>
              <div className='agree'>
                <label htmlFor='checkbox'>
                  <input type='checkbox' name='terms' id='checkbox' onClick={()=>setAgree(!agree)}/>
                  Agree terms and conditions
                </label>
              </div>
              <div className='inputBx'>
                <input 
                disabled={!agree}
                type='submit' 
                value='Sign up' />
              </div>
              <div className='inputBx'>
                <p>
                  Already have an account? <Link to='/login'>Sign in</Link>
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

