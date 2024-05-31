import React, {Component} from "react";
import { Link } from "react-router-dom";
import picture from '../images/list-of-links-background.jpg';


class ListOfPoems extends Component {
 
    render() {

        const linkCount = 178;

        const links = Array.from({ length: linkCount }, (_, index) => (
          <Link key={index} to={`http://localhost:3000/poem/${index + 1}`} className="poem-link">رباعی شماره {index+1}</Link>
        ));

        return(
            <div>
                <div>
                    <img src={picture} alt="poem background" className="list-of-poems-background" />
                </div>
                <div className="links-container">
                    {links}
                </div>
            </div>
        );
    }
}

export default ListOfPoems;