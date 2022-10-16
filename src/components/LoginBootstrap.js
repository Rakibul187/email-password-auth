import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebaseConfig.init';

const auth = getAuth(app)

const LoginBootstrap = () => {

    const [success, setSuccess] = useState(false)
    const [userEmail, setUserEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        setSuccess(false)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSuccess(true)
            })
            .catch(error => {
                console.error('error: ', error)
            })
    }

    const HandleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email)
        console.log(email)
    }

    const handleForgetPassword = () => {
        if (!userEmail) {
            alert('Please enter your email address')
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password reset email send, please check your email!!')
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Login!!</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Your Email</label>
                    <input onBlur={HandleEmailBlur} type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Your Password</label>
                    <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Your Password" required />
                </div>
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
            {success && <p className='text-success'>Seccesfully Login to the website!!</p>}
            <p>New to this website? Please Register <small><Link to='/register'>Register</Link></small></p>
            <p>Forgot Password? <button onClick={handleForgetPassword} type="button" className="btn btn-link">Reset Password</button>
            </p>
        </div>
    );
};

export default LoginBootstrap;