import React, { useState } from 'react';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email) {
            setMessage('Name and email are required');
            return;
        }

        fetch('http://localhost:3000/api/register-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.error) {
                    setMessage(result.error || 'Failed to register user');
                } else {
                    setMessage('User registered successfully');
                    setName('');
                    setEmail('');
                }
            })
            .catch(() => setMessage('Error connecting to the server'));
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RegisterForm;
