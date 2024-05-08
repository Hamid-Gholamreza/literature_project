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
                    <form action="">
                    <div className="field-container" id="forget-password">
                            <div>
                                <label htmlFor="" id="forget-password-label"> لطفا ایمیل خود را وارد کنید</label>
                            </div>
                            <div>
                                <input type="email" className="input-field" />
                            </div>
                        </div>
                        <div className="field-container">
                            <input type="submit" value="ارسال لینک" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default ForgetPassword