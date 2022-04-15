import { async } from '@firebase/util';
import { getAuth } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const auth=getAuth(app)
const Login = () => {
    const location =useLocation()

    let from =location?.state?.form?.pathname || '/';
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const EmailRef = useRef("");
    const PassRef =useRef("");
    const navigate =useNavigate();

    const handleSubmit =event =>{
        event.preventDefault();
        const email=EmailRef.current.value;
        const password =PassRef.current.value;

        signInWithEmailAndPassword(email,password)
    }

    if(user){
        navigate(from ,{replace:true})
    }
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
      );
        const resetPassword= async()=>{
            const email=EmailRef.current.value;
           if(email){
            await sendPasswordResetEmail(email);
            toast("Sent Mail")
           }
           else{
            toast("Please Enter Your Email Address")
           }
        }
    if (error ) {
        
        errorElement= 
           <p className='text-danger'>Error: {error?.message} </p>
         
       
     }
    
    return (
        <div className='container w-50 mx-auto '>
            <h2 className='text-primary text-center mt-5'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={EmailRef} type="email" placeholder="Enter email" required />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={PassRef} type="password" placeholder="Password" required/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to Genius Car? <Link style={{cursor:"pointer"}} className='text-danger' to='/register' >Please Register</Link></p>
            {/* <p>Forget Password? <Link style={{cursor:"pointer"}} className='text-danger' onClick={resetPassword} >Reset Password</Link></p> */}
            <p>Forget Password?</p>
            <button className='btn btn-link text-decoration-none text-primary pe-auto' onClick={resetPassword} >Reset Password</button>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;