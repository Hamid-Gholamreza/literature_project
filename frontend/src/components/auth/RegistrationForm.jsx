import React, {useState} from "react";
import { Link } from "react-router-dom";
import picture from '../../images/login.jpeg';
import axios from "axios";


function RegistrationForm(props) {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        re_password: '',
    });

    const [status, setStatus] = useState(null);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value
        })};

    const handleRegistration = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://khayyam-website.liara.run/auth/users/', formData);
            if (response.status === 201) {
                console.log('hi')
                let alert = document.querySelector('.registration-alert');
                alert.classList.add('registration-success-alert');
                const paragraph = document.createElement('p');
                paragraph.textContent = 'ثبت نام با موفقیت انجام شد';
                alert.appendChild(paragraph);
                setStatus(response.status);
                setTimeout(() => {
                    alert.classList.remove('registration-success-alert');
                    alert.removeChild(paragraph);
                }, 3000);
                window.history.replaceState(null, null, '/login');
                window.location.reload();
            }
        }
        catch(error) {
            document.querySelector('.registration-alert').style.display = 'block';
            let alert = document.querySelector('.registration-alert');
            alert.classList.remove('registration-success-alert');
            alert.classList.add('registration-fail-alert');
            const paragraph = document.createElement('p');
            paragraph.classList.add('alert-message');
            paragraph.textContent = '';
            paragraph.textContent = 'نام کاربری و کلمه عبور را به دقت وارد کنید';
            alert.appendChild(paragraph);
            setTimeout(() => {
                alert.classList.remove('registration-fail-alert');
                alert.removeChild(paragraph);
            }, 5000);
            console.error('Registration failed:', error.message);
        }
    }

    
        return(
            <div className="background">
                <img src={picture} alt="picture" className="login-picture" />
                <div className="header-home">
                    <Link to='/search-poem'>جستجو در اشعار</Link>
                    <Link to='/home'>صفحه اصلی</Link>
                </div>
                <div className="form">
                    <div className="switch-form">                        
                        <Link to={'/login'} className="links" id="login">ورود</Link>
                        <Link to={'/register'} className="links selected-register" id="register">ثبت نام</Link>
                    </div>
                    <form onSubmit={handleRegistration} >
                        <div className="field-container">
                            <div>
                                <label  htmlFor="username" className="register">نام کاربری</label>
                            </div>
                            <div className="field-div">
                                <input type="text" className="register-field" placeholder="نام کاربری" name="username" value={formData.username} onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className="field-container">
                            <div>
                                <label htmlFor="email" className="register">ایمیل</label>
                            </div>
                            <div className="field-div">
                                <input type="email" className="register-field" placeholder="ایمیل" name="email" value={formData.email} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="field-container">
                            <div>
                                <label htmlFor="password" className="register">کلمه عبور</label>
                            </div>
                            <div className="field-div">
                                <input type="password" className="register-field" name="password" placeholder="کلمه عبور" value={formData.password} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="field-container">
                            <div>
                                <label htmlFor="re_password" className="register">تکرار کلمه عبور</label>
                            </div>
                            <div className="field-div">
                                <input type="password" className="register-field" name="re_password" placeholder="تکرار کلمه عبور" value={formData.re_password} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="field-container">
                            <input type="submit" value="ثبت نام" className="submit-register" id="submit-register"/>
                        </div>
                    </form>
                </div>
                <div className="registration-alert">
                </div>
            </div>
        )
    }

export default RegistrationForm;


{/* <div>
{status === 404 ? (
  <NotFound404 />
) : (
  <div>
  <div>
      <div>
          <img src={picture} alt="poem background" className="poem-background" />
      </div>
      <div className="poem-container">
          <div className="poem-header">
              {header}
          </div>
          <div className="poem-text">
              {poem}
          </div>
          <div className="button-container">
              <button><Link to={`/poem/${parseInt(id) - 1}`}>شعر قبلی</Link></button>
              <button><Link to={`/home`}>صفحه اصلی</Link></button>
              <button><Link to={`/poem/${parseInt(id) + 1}`}>شعر بعدی</Link></button>
          </div>
      </div>
  </div>
</div>
)}
</div> */}
