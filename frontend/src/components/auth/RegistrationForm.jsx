import React, {Component} from "react";
import { Link } from "react-router-dom";
import picture from '../../images/login.jpeg'


class RegistrationForm extends Component {

    render() {
        return(
            <div className="background">
                <img src={picture} alt="picture" className="login-picture" />
                <div className="form">
                    <div className="switch-form">                        
                        <Link to={'/login'} className="links" id="login">ورود</Link>
                        <Link to={'/register'} className="links selected-register" id="register">ثبت نام</Link>
                    </div>
                    <div className="registration">
                        <label htmlFor="">نام کاربری</label>
                        <div className="input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="registration">
                        <label htmlFor="">شماره همراه</label>
                        <div className="input">
                            <input type="phone" />
                        </div>
                    </div>
                    <div className="registration">
                        <label htmlFor="">ایمیل</label>
                        <div className="input">
                            <input type="email" />
                        </div>
                    </div>
                    <div className="registration">
                        <label htmlFor="">پسورد</label>
                        <div className="input">
                            <input type="password" />
                        </div>
                    </div>
                    <button className="submit-button">ثبت نام</button>
                </div>
            </div>
        )
    }
}

export default RegistrationForm;