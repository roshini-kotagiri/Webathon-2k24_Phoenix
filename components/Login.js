import React from 'react';
import { useForm } from 'react-hook-form';

function Admin() {
  const { register, setError, handleSubmit } = useForm();
  const centerDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Ensure content fills viewport height
  };
  function submitFormHandler(userObj) {
    console.log(userObj);
  }

  return (
    <div>
      <h1 className='text-info text-center'>User Login</h1>
    <div className="login-container">
    
      <div className="login-form-wrapper">
     
        <form className="w-45 mx-auto bg-light" onSubmit={handleSubmit(submitFormHandler)}>
          <div className="mx-auto p-4 border justify-content-center">
            
            
            
            <div className="mt-4">
              <label htmlFor="email" className="form-label mx-4">Email</label>
              <input type="email" id="email" {...register('email', { required: true })} />
            </div>
            <div className="mt-4">
              <label htmlFor="aadhar" className="form-label mx-4">Aadhar</label>
              <input
                type="tel"
                maxLength="12"
                pattern="[1-9]{1}[0-9]{11}" // Ensures 12 digits starting with 1-9
                id="aadhar"
                {...register('aadhar', { required: true })}
              />
            </div>
            
            <div className="mt-4">
              <label htmlFor="password" className="form-label mx-4">Password</label>
              <input type="password"  id="password" {...register('password', { required: true })} />
            </div>
            <button className="btn btn-success d-flex mx-auto mt-4 text-center">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Admin;