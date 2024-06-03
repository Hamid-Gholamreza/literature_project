import React, {Component} from "react";
import { Link } from "react-router-dom";
import background from '../images/homepage-background.jpg';


function HomePage(props) {
    
    const token = localStorage.getItem('jwtToken')
    const isAuthorized = !!token;
    let headerMenu;

    if (isAuthorized) {
        headerMenu = <div className="header-menu">
                                <Link to='/logout'>خروج</Link>
                                <Link to='/login'>حساب کاربری</Link>
                            </div>
    }
    else {
        headerMenu = <div className="header-menu">
        <Link to='/register'>ثبت نام</Link>
        <Link to='/login'>ورود</Link>
    </div>       
    }

    return (
        <div className="home">
            <div className="homepage-background">
                <img src={background} alt="" />
            </div>
            {headerMenu}
            <div id="home-container">
                <div className="section top-left">
                    <Link to={'/list-of-poems'}>اشعار</Link>
                </div>
                <div className="section top-right">
                    <Link>فایل های صوتی</Link>
                </div>
                <div className="section bottom-left">
                    <Link>تکنیک ها</Link>
                </div>
                <div className="section bottom-right">
                    <Link>همه فایل ها</Link>
                </div>
            </div>
        </div>
    )
}


export default HomePage;