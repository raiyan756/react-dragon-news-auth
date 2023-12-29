import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider';


const Pr = ({ children }) => {
  const { data,loading } = useContext(AuthContex); // Using useContext with YourContext
  if(loading){
    return <span class="loading loading-spinner loading-lg"></span>
  }
  
  if (data) {
    return children;
  }
  return <Navigate to="/Register" />;
};

export default Pr;
