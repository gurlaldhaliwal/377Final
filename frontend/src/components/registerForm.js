import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://cowshmplnpofhhmdzqvd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvd3NobXBsbnBvZmhobWR6cXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwNTYxNDYsImV4cCI6MjA0OTYzMjE0Nn0.ccK7TIssBPTO0Yxf6l289jegxwYiHlM8xJ9sDz9AUQg';
const supabase = createClient(supabaseUrl, supabaseKey);

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email) {
            setMessage('Name and email are required');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/register-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            const result = await response.json();

            if (result.error) {
                throw new Error(result.error || 'Failed to register user via server');
            } else {
                setMessage('User registered successfully');
                setName('');
                setEmail('');
                return;
            }
        } catch (serverError) {

            console.error('Server failed, trying Supabase:', serverError);
            try {
                const { data, error } = await supabase
                    .from('registered_users')
                    .insert([{ name, email }]);

                if (error) {
                    setMessage(`Supabase Error: ${error.message}`);
                } else {
                    setMessage('User registered successfully with Supabase');
                    setName('');
                    setEmail('');
                }
            } catch (error) {
                setMessage(`Error: ${error.message}`);
            }
        }
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
