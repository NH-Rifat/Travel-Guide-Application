import React from 'react';
import './SocialLogin.css';

import facebook from '../../../images/facebook.png';
import google from '../../../images/google.png';
import github from '../../../images/github.png';

const SocialLogin = () => {
  return (
    <div className='social-login'>
      <div className=''>
        <div className='google social'>
          <button>
          <img src={google} alt="" />
          <span>Google Sign in</span>
          </button>
        </div>
        <div className='github social'>
          <button>
          <img src={github} alt="" />
          <span>Github Sign in</span>
          </button>
        </div>
        <div className='faceBook social'>
          <button>
          <img src={facebook} alt="" />
          <span>Facebook Sign in</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
