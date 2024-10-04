import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import the function
import { auth } from '../../../../firebase'; 
import mimo from '../../../../assets/icons/mimo.png'
import mimo2 from '../../../../assets/icons/mimo2.png'
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User logged in:', user.uid);
      navigate('/'); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="container-login">
        <div className='block1'></div>
        <div className='block2'></div>
        <div className='block3'></div>
        <div className='block4'></div>
        <div className='mimo-png'><img src={mimo2} alt="" /></div>
        <div className="login-card-container">
          <div className="login-card">
            <div className="login-card-logo">
              <img src={mimo} alt="logo" />
            </div>
            <div className="login-card-header">
              <h1>Welcome back!</h1>
            </div>
            <form className="login-card-form" onSubmit={handleSignIn}>
              <div className="form-item">
                <span className="form-item-icon material-symbols-rounded"></span>
                <input
                  type="text"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                  required
                />
              </div>
              <div className="form-item">
                <span className="form-item-icon material-symbols-rounded"></span>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <div className="form-item-other">
                <div className="checkbox">
                  <input type="checkbox" id="rememberMeCheckbox" defaultChecked />
                  <label htmlFor="rememberMeCheckbox">Remember me</label>
                </div>
              </div>
              <button type="submit">Sign In</button>
            </form>
            <div className="login-card-footer">
              Don't have an account? <a href="/signup">Create a free account.</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;