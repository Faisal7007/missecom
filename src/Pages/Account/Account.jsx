import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Slices/authSlice';
import './Account.scss'; 
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogin = () => {
    // Validate username and password (e.g., make an API call)
    // If successful, dispatch setUser action to update auth state
    dispatch(setUser({ name: username }));
  };
  const handleForgotPassword = () => {
    navigate('/forgot-password'); 
  };
  const handleSignUp = () => {
    navigate('/sign-up');
  };
  return (
    <div className='account'>
    <div className="account-container">
      <h2 className="account-header">Account</h2>
      <div>

      
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="input-field"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="input-field"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
      </div>
      <div>
      <p id='frgt' onClick={handleForgotPassword} >forgot password?</p>
      <p id='sgnup'onClick={handleSignUp}>Sign Up!</p>
      </div>
      
    </div>
    </div>
  );
};

export default Account;
