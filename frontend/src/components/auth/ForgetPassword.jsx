import React, {Component} from "react";
import picture from '../../images/login.jpeg'


class ForgetPassword extends Component {
    render() {
        return(
            <div>
                <div>
                    <img src={picture} alt="password picture" className="login-picture" />
                </div>
                <div className="form">
                </div>
            </div>
        )
    }
}


export default ForgetPassword