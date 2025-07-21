import React, { useState, useContext } from 'react';
import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const SignUp = () => {
    const { registerUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirmPass] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const newError = {};

        if (!fullname.trim()) newError.fullname = "This field is required";
        if (!email.trim()) newError.email = "Email is required";
        else if (!emailRegex.test(email)) newError.email = "Enter a valid email";
        if (!password.trim()) newError.password = "Password is required";
        if (confirmpass !== password) newError.confirmpass = "Passwords don't match";

        if (Object.keys(newError).length > 0) {
            setError(newError);
            return;
        }

        try {
            await registerUser({ fullname, email, password, username });
            toast.success("Signup successful! Welcome aboard 👋");
            navigate("/"); // or to dashboard if needed
        } catch (err) {
            toast.error(err?.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className='flex flex-col justify-center items-center mt-52 gap-4'>
            <h1 className='text-6xl font-bold'>Signup</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

                {/* Fullname */}
                <div className='flex flex-col'>
                    <div className='flex'>
                        <label className='flex justify-center items-center bg-accent rounded-tl-[10px] rounded-bl-[10px]'>
                            <IoMdPerson className='w-11 fill-base' />
                        </label>
                        <input
                            value={fullname}
                            onChange={(e) => setFullName(e.target.value)}
                            className='w-72 h-10 py-3 px-3 rounded-tr-[10px] rounded-br-[10px] bg-input focus:outline-none hover:border-2 border-accent'
                            type="text"
                            placeholder='Fullname'
                        />
                    </div>
                    {error.fullname && <p className='text-red-500 text-sm'>{error.fullname}</p>}
                </div>

                {/* Username */}
                <div className='flex flex-col'>
                    <div className='flex'>
                        <label className='flex justify-center items-center w-11 bg-accent rounded-tl-[10px] rounded-bl-[10px]'>@</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='w-72 h-10 py-3 px-3 rounded-tr-[10px] rounded-br-[10px] bg-input focus:outline-none hover:border-2 border-accent'
                            type="text"
                            placeholder='Username'
                        />
                    </div>
                </div>

                {/* Email */}
                <div className='flex flex-col'>
                    <div className='flex'>
                        <label className='flex justify-center w-11 items-center bg-accent rounded-tl-[10px] rounded-bl-[10px]'>@</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-72 h-10 py-3 px-3 rounded-tr-[10px] rounded-br-[10px] bg-input focus:outline-none hover:border-2 border-accent'
                            type="email"
                            placeholder='Email'
                        />
                    </div>
                    {error.email && <p className='text-red-500 text-sm'>{error.email}</p>}
                </div>

                {/* Password */}
                <div className='flex flex-col'>
                    <div className='flex'>
                        <label className='flex justify-center items-center bg-accent rounded-tl-[10px] rounded-bl-[10px]'>
                            <FaLock className='w-11 fill-base' />
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-72 h-10 py-3 px-3 rounded-tr-[10px] rounded-br-[10px] bg-input focus:outline-none hover:border-2 border-accent'
                            type="password"
                            placeholder='Password'
                        />
                    </div>
                    {error.password && <p className='text-red-500 text-sm'>{error.password}</p>}
                </div>

                {/* Confirm Password */}
                <div className='flex flex-col'>
                    <div className='flex'>
                        <label className='flex justify-center items-center bg-accent rounded-tl-[10px] rounded-bl-[10px]'>
                            <FaLock className='w-11 fill-base' />
                        </label>
                        <input
                            value={confirmpass}
                            onChange={(e) => setConfirmPass(e.target.value)}
                            className='w-72 h-10 py-3 px-3 rounded-tr-[10px] rounded-br-[10px] bg-input focus:outline-none hover:border-2 border-accent'
                            type="password"
                            placeholder='Confirm Password'
                        />
                    </div>
                    {error.confirmpass && <p className='text-red-500 text-sm'>{error.confirmpass}</p>}
                </div>

                <button type='submit' className='mt-10 text-white bg-accent px-4 py-3 rounded-[1000px] hover:bg-text'>
                    Signup
                </button>
            </form>

            <p className="mt-4">
                Already have an account? <Link to="/login" className="text-accent hover:underline">Login</Link>
            </p>
        </div>
    );
};

export default SignUp;



