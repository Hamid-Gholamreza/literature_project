import React, {Component, useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import picture from '../images/poem-background.jpeg'
import { Link } from "react-router-dom";
import axios from 'axios';
import NotFound404 from "./NotFound404";



function Poem(props) {
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/verses/${id}`);
                setData(response.data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
        };
        fetchData();
    }, [id]);
    console.log(data);


    return (
        <div>
          {data ? (
            <div>
                <div>
                    <img src={picture} alt="poem background" className="poem-background" />
                </div>
                <div className="poem-container">
                    <div className="poem-header">
                        <h1>{data[0].poem_id.title}</h1>
                    </div>
                    <div className="poem-text">        
                             <div className="text-container">
                                 <p className="poem first">{data[0].text}</p>
                                 <p className="poem second">{data[1].text}</p>
                             </div>
                             <div className="text-container">
                                 <p className="poem first">{data[2].text}</p>
                                 <p className="poem second">{data[3].text}</p>
                             </div>
                         </div>
                         <div className="button-container">
                             <button><Link to={`/poem/${parseInt(id) - 1}`}>شعر قبلی</Link></button>
                             <button><Link to={`/poem/${parseInt(id) + 1}`}>شعر بعدی</Link></button>
                         </div>
                </div>
            </div>
          ) : (
            <p>در حال دریافت</p>
          )}
        </div>
      );
}


export default Poem;