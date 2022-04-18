import React from 'react';
import './SocialLogin.css';

import facebook from '../../../images/facebook.png';
import google from '../../../images/google.png';
import github from '../../../images/github.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>;
  }
  if (user) {
    navigate('/home');
  }
  return (
    <div className='social'>
      <div className='social-login'>
        <div className=''>
          {errorElement}
          <div className='google social'>
            <button onClick={() => signInWithGoogle()}>
              <img src={google} alt='' />
              <span>Google Sign in</span>
            </button>
          </div>
          <div className='github social'>
            <button>
              <img src={github} alt='' />
              <span>Github Sign in</span>
            </button>
          </div>
          <div className='faceBook social'>
            <button>
              <img src={facebook} alt='' />
              <span>Facebook Sign in</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
