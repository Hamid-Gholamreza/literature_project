import React, { useState, useHistory } from 'react';
import { Link } from 'react-router-dom';
import picture from '../../images/login.jpeg';
import axios from 'axios';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [status, setStatus] = useState(null);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://khayyam-website.liara.run/auth/jwt/create',
        formData
      );
      const token = response.data;

      let alert = document.querySelector('.alert');
      alert.classList.remove('login-fail-alert');
      alert.classList.add('login-success-alert');
      const paragraph = document.createElement('p');
      paragraph.textContent = 'ورود با موفقیت انجام شد';
      alert.appendChild(paragraph);

      setTimeout(() => {
        alert.classList.remove('login-success-alert');
        alert.removeChild(paragraph);
    }, 3000);

      localStorage.setItem('jwtToken', token);
      window.history.replaceState(null, null, '/home');
      window.location.reload();
    } 
    catch (error) {
      console.error('Login failed:', error.message);
      let alert = document.querySelector('.alert');
      alert.classList.remove('login-success-alert');
      alert.classList.add('login-fail-alert');
      const paragraph = document.createElement('p');
      paragraph.textContent = 'نام کاربری یا رمز عبور اشتباه است';
      alert.appendChild(paragraph);
      setTimeout(() => {
        alert.classList.remove('login-fail-alert');
        alert.removeChild(paragraph);
    }, 5000);
      setStatus(error.response.status);
    }
  };

  return (
    <div>
      <div>
        <img src={picture} alt="picture" className="login-picture" />
          <div className="header-home">
            <Link to='/search-poem'>جستجو در اشعار</Link>
            <Link to='/home'>صفحه اصلی</Link>
          </div>
      </div>
      <div className="form">
        <div className="switch-form">
          <Link to={'/login'} className="links selected-login" id="login">
            ورود
          </Link>
          <Link to={'/register'} className="links" id="register">
            ثبت نام
          </Link>
        </div>

        <form onSubmit={handleLogin}>
          <div className="field-container">
            <div>
              <label htmlFor="username">نام کاربری</label>
            </div>
            <div>
              <input
                type="text"
                className="input-field"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="نام کاربری"
              />
            </div>
          </div>
          <div className="field-container">
            <div>
              <label htmlFor="password">کلمه عبور</label>
            </div>
            <div>
              <input
                type="password"
                className="input-field"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="کلمه عبور"
              />
            </div>
          </div>
          <div className="field-container">
            <input type="submit" value="ورود" />
          </div>
          {/* <div className="field-container forget-password">
            <p>
              رمز عبور را فراموش کرده اید؟    
              <Link to={'/forget-password'}>فراموشی رمز عبور</Link>
            </p>
          </div> */}
        </form>
      </div>
      <div className='alert'>
          
      </div>
    </div>
  );
}

export default LoginForm;
