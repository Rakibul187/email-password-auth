import React from 'react';
import { Link } from 'react-router-dom';

const LoginBootstrap = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const emeil = form.email;
        const password = form.password
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Login!!</h3>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Example label</label>
                    <input type="email" name='email' class="form-control" id="formGroupExampleInput" placeholder="Your Email" required />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Another label</label>
                    <input type="password" name='password' class="form-control" id="formGroupExampleInput2" placeholder="Your Password" required />
                </div>
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
            <p>New to this website? Please Register <small><Link to='/register'>Register</Link></small></p>
        </div>
    );
};

export default LoginBootstrap;