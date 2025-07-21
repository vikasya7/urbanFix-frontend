import React, { useContext, useState } from 'react'

import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';






const Login =  () => {

     const[error,setError]=useState({});
     const {loginUser}= useContext(AuthContext);
     const navigate = useNavigate();
     const[username,setUsername]=useState('');
     const[password,setPassword]=useState('');

      const handleSubmit=async (e)=>{
        e.preventDefault();
       
        const newError={};

      
        if (!username.trim()) {
        newError.username = "username is required";
        } 
         if (!password.trim()) {
         newError.password = "Password is required";
        } 
        
        

        if(Object.keys(newError).length>0){
            setError(newError);
        }
        else{
            setError({});
        }

        try {
            await loginUser({username,password})
            navigate("/");
            
        } catch (error) {
            console.log("something wrong",error.message);
            
            
        }
    }
     
  return (
     <div className='flex flex-col justify-center items-center mt-52 gap-4 ' >
             <h1 className='text-6xl font-bold ' >Login</h1>
            <form  onSubmit={handleSubmit} className='flex flex-col gap-4' >


                 

                   {/* email */}
                <div className='flex flex-col' >

                <div className='flex' >
                    <label  className='flex justify-center w-11  items-center bg-accent rounded-tl-[10px] rounded-bl-[10px]'  htmlFor="username-input">@</label>
                    <input value={username} onChange={(e)=>setUsername(e.target.value)} className='w-72 h-10 flex-grow-1 py-3 px-3 rounded-tr-[10px] rounded-br-[10px] bg-input focus:border-text focus:outline-none hover:border-2 border-accent '  type="username" name='username' id='username-input' placeholder='Username' />
                </div>
                {error.username && <p className='text-red-500 text-sm' >{error.username}</p> }

                </div>
                     
                    {/* password */}
                <div className='flex flex-col'  >
                <div  className='flex' >
                    <label  className='flex justify-center items-center bg-accent rounded-tl-[10px] rounded-bl-[10px]'  htmlFor="password-input"><FaLock  className='w-11 fill-base ' /></label>
                    <input  value={password} onChange={(e)=>setPassword(e.target.value)}  className='w-72 h-10 flex-grow-1 py-3 px-3 rounded-tr-[10px] rounded-br-[10px] bg-input focus:border-text focus:outline-none hover:border-2 border-accent '  type="password" name='password' id='password-input' placeholder='Password' />
                </div>
                {error.password && <p className='text-red-500 text-sm'>{error.password}</p>}
                </div>
                      
               


                <button type='submit' className='mt-10 text-white bg-accent px-4 py-3 rounded-[1000px] hover:bg-text '>Login</button>
          
                

              </form>
              <p className="mt-4">
               Don't have an account? <Link to="/signup" className="text-accent hover:underline">Sign up</Link>
              </p>
                  

        </div>
  )
}

export default Login
