import React, {Component} from "react";
import { Link } from "react-router-dom";
import picture from '../../images/login.jpeg'


class RegistrationForm extends Component {

    render() {
        return(
            <div>
                <div>
                    <img src={picture} alt="picture" className="login-picture" />
                </div>
                <div className="form">
                    <div className="switch-form">                        
                        <Link to={'/login'} className="links" id="login">ورود</Link>
                        <Link to={'/register'} className="links selected-register" id="register">ثبت نام</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegistrationForm;