import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className='Blog-section'>
      <div className='semantic_context'>
        <div className='semantic_tag'>
          <h2>Difference between authorization and authentication</h2>
          <p>
            Authentication in the form of a key. The lock on the door only
            grants access to someone with the correct key in much the same way
            that a system only grants access to users who have the correct
            credentials. Authorization, in the form of permissions. Once inside,
            the person has the authorization to access the kitchen and open the
            cupboard that holds the pet food. The person may not have permission
            to go into the bedroom for a quick nap.
          </p>
        </div>
        <div className='context_api'>
          <h2>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p>
            FirebaseAuthentication makes it easier to get your users signed-in
            without having to understand the complexities behind implementing
            your own authentication system. To sign a user into your app, you
            first get authentication credentials from the user. These
            credentials can be the user's email address and password, or an
            OAuth token from a federated identity provider. Then, you pass these
            credentials to the Firebase Authentication SDK.
          </p>
        </div>
        <div className='context_api'>
          <h2>
            What other services does firebase provide other than authentication?
          </h2>
          <p>
            Firebase Authentication integrates tightly with other Firebase
            services, and it leverages industry standards like OAuth 2.0 and
            OpenID Connect, so it can be easily integrated with your custom
            backend. Basically ,The Firebase Authentication SDK provides methods
            that allow users to sign in with their Google, Facebook, Twitter,
            and GitHub accounts. Authenticate users by sending SMS messages to
            their phones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
