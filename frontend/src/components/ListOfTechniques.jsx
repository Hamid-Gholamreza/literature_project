import React from "react";
import { Link } from "react-router-dom";
import background from '../images/list-of-techniques-background.png';




function ListOfTechniques(props) {
    return (
        <div>
            <div className="list-of-techniques-background">
                <img src={background} alt="" />
            </div>
            <div className="list-of-techniques-container">
                <Link to={'/technique/khayyam'}>تکنیک های اشعار خیام</Link>
            </div>
        </div>
    );
}

export default ListOfTechniques;