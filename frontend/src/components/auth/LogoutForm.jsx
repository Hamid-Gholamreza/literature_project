import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import picture from '../../images/logout-background.jpg';


function LogoutForm(props) {

    const handleLogout = async() => {
        try {
            localStorage.removeItem('jwtToken');
            await axios.delete('http://localhost:8000/auth/users/me/');
        }
        catch(error) {
            console.error('Error logging out', error);
        }
    }
    handleLogout();
    return (
        <div className="logout">
            <div className="notFound-background">
                <img src={picture} alt="" />
            </div>          
            <div className="logout-container">
                <h1>خروج شما از سیستم با موفقیت انجام شد</h1>
                <p>سنگ را در ناله می‌آرد وداع دوستان&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;بیستون فریاد‌ها در ماتم فرهاد کرد</p>
                <button><Link to={'/login'}>ورود مجدد</Link></button>
            </div>
        </div>
    )
}

export default LogoutForm;