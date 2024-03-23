import React from 'react';
import { useForm } from 'react-hook-form';

function Login() {
  const centerDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Ensure content fills viewport height
  };

  const { register, setError, handleSubmit } = useForm();

  function submitFormHandler(userObj) {
    console.log(userObj);
  }

  return (
    <div className="container" style={centerDivStyle}>
      <h1 className="display-1 text-info text-center">User Registration</h1>
      <form className="w-45 ml-4 mx-auto bg-light" onSubmit={handleSubmit(submitFormHandler)}>
        <div className="mx-auto p-4 border justify-content-center">
          <div className="d-flex mx-auto mt-4">
            <label htmlFor="username" className="form-label mx-4 ">Username  </label>
            <input type="text" id="username" {...register('username', { required: true })} />
          </div>
          <div className="mt-4">
            <label htmlFor="phoneno" className="form-label mx-4">Phone Number</label>
            <input
              type="text"
              id="phoneno"
              title="Invalid phone number: 10 digits starting with 1-9"
              pattern="[1-9]{1}[0-9]{9}"
              {...register('phoneno', { required: true })}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="dob" className="form-label mx-4">DOB</label>
            <input type="date" id="dob" {...register('dob', { required: true })} />
          </div>
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
            <label htmlFor="address" className="form-label mx-4">Address</label>
            <input type="text" id="address" {...register('address', { required: true })} />
          </div>
          <div className="mt-4">
            <label htmlFor="pincode" className="form-label mx-4">Pincode</label>
            <input type="text" pattern="[1-9]{1}[0-9]{5}" id="pincode" {...register('pincode', { required: true })} />
          </div>
          <button className="btn btn-success d-flex mx-auto mt-4 text-center">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
