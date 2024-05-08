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
                    <form action="">
                        <div className="field-container">
                            <div>
                                <label  htmlFor="" className="register">نام کاربری</label>
                            </div>
                            <div className="field-div">
                                <input type="text" className="register-field" />
                            </div>
                        </div>
                        <div className="field-container">
                            <div>
                                <label htmlFor="" className="register">شماره همراه</label>
                            </div>
                            <div className="field-div">
                                <input type="text" className="register-field" />
                            </div>
                        </div>
                        <div className="field-container">
                            <div>
                                <label htmlFor="" className="register">ایمیل</label>
                            </div>
                            <div className="field-div">
                                <input type="email" className="register-field" />
                            </div>
                        </div>
                        <div className="field-container">
                            <div>
                                <label htmlFor="" className="register">کلمه عبور</label>
                            </div>
                            <div className="field-div">
                                <input type="password" className="register-field" />
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
}

export default RegistrationForm;