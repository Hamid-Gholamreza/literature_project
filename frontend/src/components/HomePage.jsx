import React, {Component} from "react";
import { Link } from "react-router-dom";
import background from '../images/homepage-background.jpg';


class HomePage extends Component {
    render() {
        return (
            <div className="home">
                <div className="homepage-background">
                    <img src={background} alt="" />
                </div>
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
}


export default HomePage;