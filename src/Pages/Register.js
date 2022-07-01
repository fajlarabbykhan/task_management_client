import React, { useState } from 'react';
import { Link } from "react-router-dom"

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const register = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4000/register`, {

            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            })
        })
    }

    return (
        <div className=' text-center bg-[#1a0d26e6] w-full h-screen fixed py-5 '>
            <h2 className='text-2xl text-white'>Register Now </h2>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm  shadow-2xl bg-base-100">
                        <div className="card-body ">
                            <form onSubmit={register} className='place-items-center'>
                                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Your email please" className="input input-bordered m-5 border-rose-600 p-5" />
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Create password" className="input input-bordered border-rose-600 m-5 p-5" />

                                <h1 className='text-center m-5'>Already have an Account - <Link to='/' className=' underline'>Login</Link></h1>

                                <button type="submit" className="btn btn-primary">Register</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;