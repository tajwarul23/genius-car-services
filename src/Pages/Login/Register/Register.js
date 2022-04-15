import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { Button} from 'react-bootstrap';
import app from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
// import auth from '../../../firebase.init';

const auth=getAuth(app)


const Register = () => {
    const[agree,setAgree]=useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const navigate =useNavigate();
    

    const navigateLogin=event=>{
        event.preventDefault();
        navigate('/login')
    }

   
    const handleRegister = async (event)=>{
        event.preventDefault();
        const name =event.target.name.value;
        const email =event.target.email.value;
        const password =event.target.password.value;
        
       
        await createUserWithEmailAndPassword(email,password);
        await updateProfile({ displayName:name });
        console.log('Updated profile');
        navigate('/home');
        
        
        

    }

    return (
        <div className='register-form'>
            <h2 className='text-primary' style={{textAlign:'center'}}>Please Register</h2>
            <form action="" onSubmit={handleRegister}>
            <input type="text" name="name" id="name" placeholder='Your Name' required/>
            <input type="email" name="email" id="email" placeholder='Email Address' required />
            <input type="password" name="password" id="password"  placeholder='Password' required/>
            <input style={{cursor:'pointer'}} onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" required />
            <label  className={agree? 'ps-2 text-primary':'ps-2 text-danger'} htmlFor='terms'>{agree?'Thank You For Accepting Our  Terms and Conditions ':'Accept Terms and Condition'}</label><br />
            <Button disabled={!agree} className='mt-2 mb-2' variant="primary" type="submit">
                    Register
                </Button>
            <p>Already Have an account? <span style={{cursor:"pointer"}} className='text-danger' onClick={navigateLogin}>Please Login</span></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;