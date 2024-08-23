import React from 'react';
import '../Auth/Style.css';
import logo from '../assets/enaam 4.png';
import pakflag from '../assets/pakflag.png';

const Register = () => {
  return (
    <div style={{}} className='form-container'>
      <div className='header'>
        <div style={{}} className='logo'><img src={logo} alt='logo' /></div>
      </div>
      <div style={{alignItems:'center',justifyContent:'center'}}  className='form'>
        <div className='form-content'>
            <div className='text'>Create Account</div>
          <div className='form-fields'>
            <label>Email</label>
            <div className='inputField'>
              <input type='email' placeholder='Email'/>
            </div>
            
            <label style={{marginTop:'15px'}}>Password</label>
            <div className='inputField'>
              <input type='password' placeholder='Password' />
            </div>
          </div>

          <label style={{marginTop:'15px', marginBottom:'5px'}}>Phone Number</label>
            <div className='inputField'>
              <img src={pakflag} alt='pakflag' />
              <input type='text' placeholder='Your Number' style={{borderLeft:'2px solid #000'}}/>
            </div>

          <div className='form-button'>
            <button>Done</button>
          </div>
          <div className='register-text'>
            I already have an account.  <span><a href='/login'>Login</a></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register


