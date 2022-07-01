import React from 'react';
import { Link } from "react-router-dom"
const Welcome = () => {
    return (
        <div className=' text-center bg-[#1a0d26e6] w-full h-screen fixed py-5 '>
            <h2 className='text-2xl text-white'>Welcome To Task Management Web Tool</h2>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm  shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form className='place-items-center'>
                                <input type="text" placeholder="Your email please" className="input input-bordered m-5 border-rose-600 p-5" />
                                <input type="text" placeholder="Enter password" className="input input-bordered border-rose-600 m-5 p-5" />

                                <h1 className='text-center m-5'>Have no Account - <Link to='/register' className=' underline'>Register</Link></h1>

                                <button className="btn btn-primary">Login</button>

                            </form>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Welcome;