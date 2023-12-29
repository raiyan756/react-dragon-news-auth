import React, { useContext } from 'react';
import login from '../../assets/user.png'
import { FaGoogle } from "react-icons/fa";
import {  NavLink } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';

const Rightside = () => {
    const{user}=useContext(AuthContex)
   
    return (
        <div>{
            user?
            <h1>This is right</h1>
            :
            <p>Fuck</p>
            }
           
            <div className='flex mx-auto '>
                <img className='h-10 mr-3' src={login} alt="" />
                {
                    user?
                    <NavLink to={"/login"}><button className='btn'>Log in</button></NavLink>
                    :
                   <p>signout</p>
                }
               
                
            </div>
            <div>
                <p>Log in With </p>
                <div className=' flex mx-auto'>
                <FaGoogle />
                Find us on Google
                </div>
            </div>
        </div>
    );
};

export default Rightside;