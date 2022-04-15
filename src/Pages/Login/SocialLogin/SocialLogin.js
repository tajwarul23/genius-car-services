import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import GitHub from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const auth =getAuth(app);




const SocialLogin = () => {
    const navigate=useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorElement;
    if (error || error1) {
        
         errorElement= 
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
          
        
      }

      if (user || user1) {
        return (
         navigate('/home')
        );
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={()=>{signInWithGoogle()}} className='btn btn-primary d-block mx-auto w-50'>
                    <img src={google} alt="" />
                    Google Sign In
                </button>
                <button className='btn btn-primary d-block mx-auto w-50 mt-3'>
                    <img style={{width :'30px', padding:'5px'}} src={facebook} alt="" />
                    Facebook Sign In
                </button>
                <button onClick={()=>{signInWithGithub()}} className='btn btn-primary d-block mx-auto w-50 mt-3'>
                    <img src={GitHub} alt="" />
                    GitHub Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;