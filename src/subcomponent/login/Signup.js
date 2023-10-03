import React, { useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            // User successfully registered
        } catch (err) {
            setError(err.message);
        }
    };


    return (
        <div className='signup'>
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Middle Name"
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button onClick={handleSignup}>Sign Up</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                <Link to='/login'>Login</Link>

            </div >
        </div>
    );
};

export default Signup;
