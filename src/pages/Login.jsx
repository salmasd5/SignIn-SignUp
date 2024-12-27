import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/login', values);
            if (response.status === 201) {
                localStorage.setItem('token', response.data.token);
                navigate('/');
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
            <div className="bg-white shadow-lg rounded-lg px-8 py-6 border w-80">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Welcome Back!</h2>
                <form onSubmit={handleSumbit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            name="email"
                            onChange={handleChanges}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            name="password"
                            onChange={handleChanges}
                        />
                    </div>
                    <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                        Login
                    </button>
                </form>
                <div className="text-center mt-4">
                    <span className="text-gray-600">Don t have an account? </span>
                    <Link to="/register" className="text-indigo-500 hover:underline">Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
