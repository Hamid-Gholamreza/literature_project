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

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value
        })};

    const handleRegistration = async (e) => {
        e.preventDefault();

        try {
            // if (formData.password !== formData.re_password) {
            //     console.error('Passwords do not match');
            //     return;
            //   }
            const response = await axios.post('http://127.0.0.1:8000/auth/users', formData);
            console.log(response.data);
        }
        catch(error) {
            console.error('Registration failed:', error.message);
        }
    }


        return(
            <div className="background">
                <img src={picture} alt="picture" className="login-picture" />
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
            </div>
        )
    }

export default RegistrationForm;