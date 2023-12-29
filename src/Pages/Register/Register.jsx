import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';

const Register = () => {
   const{createUser}=useContext(AuthContex)
console.log(createUser);
    const handleRegister=e=>{
        e.preventDefault();
    const form=new FormData(e.currentTarget)
    
    const email=form.get('email');
    const password=form.get('password')
    const name= form.get('name');
    console.log(email,password,name);
    createUser(email,password)
    .then(result=>{
        console.log(result.user);
    })
    .catch(error=>console.error(error))
   
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <p>Dont have an Account? Please <NavLink to={"/Login"}>Login</NavLink></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;