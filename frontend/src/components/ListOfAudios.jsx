import React from "react";
import { Link } from "react-router-dom";
import picture from '../images/list-of-audios-background.jpg';


function ListOfAudios(props) {
    return(
        <div>
            <div className="list-of-audios-background">
                <img src={picture} alt="poem background" className="list-of-audios-img" />
            </div>
            <div className="list-of-audios-container">
                <Link to={'/audio/khayyam'}>فایل های صوتی رباعیات خیام</Link>
                <Link to={'/audio'}>فایل های صوتی مثنوی مولوی</Link>
                <Link to={'/audio'}>فایل های صوتی غزلیات حافظ</Link>
                <Link to={'/audio'}>فایل های صوتی شاهنامه فردوسی</Link>            
            </div>
        </div>
    );
}

export default ListOfAudios;