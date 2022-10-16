import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../firebase/firebaseConfig.init';


const auth = getAuth(app)

const RegisterReactBootstrap = () => {
    const [passwordError, setPasswordError] = useState('')
    const [success, setSuccess] = useState(false)
    const handleRegister = event => {

        event.preventDefault()
        setSuccess(false)

        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide atleast two uppercase!!')
            return
        }
        if (password.length < 6) {
            setPasswordError('Please provide atleast six charactures!!')
            return
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setPasswordError('Please add atleast one special charactures!!')
            return
        }
        setPasswordError('')
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setSuccess(true)
                console.log(user)
                event.target.reset()
            })
            .catch(error => {
                console.error('error ', error)
                setPasswordError(error.message)
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Register!!</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{passwordError}</p>
                {success && <p className='text-success'>User created successfully</p>}
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account? Please <small><Link to='/login'>Login</Link></small></p>
        </div>
    );
};

export default RegisterReactBootstrap;