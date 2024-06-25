import React, {Component} from "react";
import { Link } from "react-router-dom";
import picture from '../images/list-of-links-background.jpg';


class ListOfPoems extends Component {
 
    render() {

        const linkCount = 174;

        const links = Array.from({ length: linkCount }, (_, index) => (
          <Link key={index} to={`http://localhost:3000/poem/${index + 1}`}>رباعی شماره {index+1}</Link>
        ));

        const token = localStorage.getItem('jwtToken');
        const isAuthorized = !!token;
        let headerMenu;
    
        if (isAuthorized) {
            headerMenu = <div className="header-menu">
                            <Link to='/logout'>خروج</Link>
                            <Link to='/profile'>حساب کاربری</Link>
                            <Link to='/search-poem' id="search">جستجو در اشعار</Link>
                            <Link to={'/home'} className="header-homepage">صفحه اصلی</Link>
                        </div>
        }
    
        else {
            headerMenu = <div className="header-menu">
            <Link to='/register'>ثبت نام</Link>
            <Link to='/login'>ورود</Link>
            <Link to='/search-poem'>جستجو در اشعار</Link>
            <Link to={'/home'} className="header-homepage">صفحه اصلی</Link>
            </div>
        }

        return(
            <div>
                <div className="list-of-poems-background">
                    {headerMenu}
                    <img src={picture} alt="poem background"/>
                </div>
                <div className="list-of-poems-container">
                    {links}
                </div>
            </div>
        );
    }
}

export default ListOfPoems;