import React, { useRef } from "react";
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import ProfilePage from "./Profile";

const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // handling the email change
  const handleURL = (e) => {
    setURL(e.target.value);
    setSubmitted(false);
  };

  // handling the password change
  // const handlePassword = (e) => {
  // setPassword(e.target.value);
  // setSubmitted(false);
  // };

  // handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
registerUser();
navigate('/profile')
    }
  };

  // showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />

        <label className="label">Profile Pic(URL)</label>
        <input onChange={handleURL} className="input"
          value={url} type="URL" />

        {/* <label className="label">Password</label>
<input onChange={handlePassword} className="input"
value={password} type="password" /> */}

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
      {/* {<ProfilePage name = {name}/>} */}
    </div>

  );
