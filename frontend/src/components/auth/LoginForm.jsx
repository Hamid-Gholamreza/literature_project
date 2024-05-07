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

                    <form action="">
                        <div className="field-container">
                            <div>
                                <label htmlFor="">نام کاربری</label>
                            </div>
                            <div>
                                <input type="text" className="input-field" />
                            </div>
                        </div>
                        <div className="field-container">
                            <div>
                                <label htmlFor="">کلمه عبور</label>
                            </div>
                            <div>
                                <input type="password" className="input-field" />
                            </div>
                        </div>
                        <div className="field-container">
                            <input type="submit" value="ورود" />
                        </div>
                        <div className="field-container forget-password">
                            <p>رمز عبور را فراموش کرده اید؟ &nbsp; &nbsp;<Link to={'/forget-password'}>فراموشی رمز عبور</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;