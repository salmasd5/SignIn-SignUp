import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/register', values);
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white shadow-lg rounded-lg px-8 py-6 border w-80">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Create Account</h2>
                <form onSubmit={handleSumbit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-medium">Username</label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            name="username"
                            onChange={handleChanges}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            name="email"
                            onChange={handleChanges}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            name="password"
                            onChange={handleChanges}
                        />
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                        Register
                    </button>
                </form>
                <div className="text-center mt-4">
                    <span className="text-gray-600">Already have an account? </span>
                    <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
