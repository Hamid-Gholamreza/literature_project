import React, {Component} from "react";
import { Link } from "react-router-dom";
import picture from '../../images/login.jpeg'


class LoginForm extends Component {
    render() {
        return(
            <div>
                <div>
                    <img src={picture} alt="picture" className="login-picture" />
                </div>
                <div className="form">
                    <div className="switch-form">
                        <Link to={'/login'} className="links selected-login" id="login">ورود</Link>
                        <Link to={'/register'} className="links" id="register">ثبت نام</Link>
                    </div>
                        <label htmlFor="">نام کاربری</label>
                        <div className="input">
                            <input type="text" />
                        </div>
                        <label htmlFor="">رمز عبور</label>
                        <div className="input">
                        <input type="password" />
                        </div>
                        <button className="submit-button">ورود</button>
                        <p className="forget-password">رمز عبور را فراموش کرده اید؟<Link>فراموشی رمز عبور</Link></p>
                </div>
            </div>
        )
    }
}

export default LoginForm;