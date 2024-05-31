import React, {Component} from "react";
import { Link } from "react-router-dom";



function NotFound404() {
    return (
        <div className="not-found-container">
            <h1>گفتند یافت می‌نشود جسته‌ایم ما&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
گفت آن که یافت می‌نشود، آنم آرزوست</h1>
            <button><Link to={'/home'}>بازگشت به صفحه اصلی</Link></button>
        </div>
    )
}

export default NotFound404