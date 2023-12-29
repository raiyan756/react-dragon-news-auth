import React, { useContext } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';

const Login = () => {
  const location=useLocation();
  const navigate=useNavigate();
    const {signIn}=useContext(AuthContex)
    console.log(signIn);
    const handleLogin=e=>{

        e.preventDefault();
    const formData=new FormData(e.currentTarget)
    console.log(formData.get('email'));
    const email=formData.get('email')
    const password=formData.get('password')
    
    signIn(email,password)
    .then(result=>{
        console.log(result.user);
    })
    navigate(location?.state?location.state:"/")
    .catch(error=>{
        console.error(error);
    })
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
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
          <button className="btn btn-primary">Login</button>
          <p>Dont have an Account? Please <NavLink to={"/Register"}>Register</NavLink></p>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;