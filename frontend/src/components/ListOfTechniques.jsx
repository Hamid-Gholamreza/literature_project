import React from "react";
import { Link } from "react-router-dom";
import background from '../images/list-of-techniques-background.png';




function ListOfTechniques(props) {


    const token = localStorage.getItem('jwtToken')
    const isAuthorized = !!token;
    let headerMenu;

    if (isAuthorized) {
        headerMenu = <div className="header-home">
                        <Link to='/logout'>خروج</Link>
                        <Link to='/search-poem' id="search">جستجو در اشعار</Link>
                        <Link to='/home' id="search">صفحه اصلی</Link>
                    </div>
    }
    else {
        headerMenu = <div className="header-home">
        <Link to='/register'>ثبت نام</Link>
        <Link to='/login'>ورود</Link>
        <Link to='/home'>صفحه اصلی</Link>
    </div>
    }



    return (
        <div>
            <div className="list-of-techniques-background">
                <img src={background} alt="" />
            </div>
            {headerMenu}
            <div className="list-of-techniques-container">
                <Link to={'/technique/khayyam'}>تکنیک های اشعار خیام</Link>
                <Link to={'/technique/molavi'}>تکنیک های اشعار مولوی</Link>
                <Link to={'/technique/hafez'}>تکنیک های اشعار حافظ</Link>
                <Link to={'/technique/ferdosi'}>تکنیک های اشعار فردوسی</Link>
            </div>
        </div>
    );
}

export default ListOfTechniques;