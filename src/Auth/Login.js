import React from 'react';
import '../Auth/Style.css';
import logo from '../assets/enaam 4.png';
import pakflag from '../assets/pakflag.png';

const Login = () => {
  return (
    <div style={{}} className='form-container'>
      <div className='header'>
        <div style={{}} className='logo'><img src={logo} alt='logo' /></div>
      </div>
      <div style={{alignItems:'center',justifyContent:'center'}}  className='form'>
        <div className='form-content'>
            <div className='text'>Login</div>
          <div className='form-fields'>
            <label>Phone Number</label>
            <div className='inputField'>
              <img src={pakflag} alt='pakflag' />
              <input type='text' placeholder='Your Number' style={{borderLeft:'2px solid #000'}}/>
            </div>
            
            <label style={{marginTop:'15px'}}>Password</label>
            <div className='inputField'>
              <input type='password' placeholder='Password' />
            </div>
            <span className='forgotPassword'><a href='/'>Forgot Password?</a></span>
          </div>

          <div className='form-button'>
            <button>Login</button>
          </div>
          <div className='register-text'>
            Don't have an account? <span><a href='/register'>Register</a></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login


