import React from "react";
import { Link } from "react-router-dom";
import picture from '../images/not-found-background.jpg';




function NotFound404(props) {
    return (
        <div className="notFound">
            <div className="notFound-background">
                <img src={picture} alt="" />
            </div>          
            <div className="notFound-container">
                <p>گفتند یافت می‌نشود جسته‌ایم ما&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                گفت آن که یافت می‌نشود، آنم آرزوست</p>
                <button><Link to={'/home'}>بازگشت به صفحه اصلی</Link></button>
            </div>
        </div>
    )
}

export default NotFound404;



        // <div className="not-found-container">

        // </div>