import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import picture from '../images/poem-background.jpeg'
import { Link } from "react-router-dom";
import axios from 'axios';
import NotFound404 from "./NotFound404";



function Poem(props) {
    const [data, setData] = useState(null);
    const [poem, setPoem] = useState(null);
    const [header, setHeader] = useState(null);
    const [status, setStatus] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(`https://khayyam-website.liara.run/verses/${id}`);
                let dataArray = [...Object.entries(response.data)];
                setData(response.data);
                handleVerses(dataArray);
              } catch (error) {
                if (error.response.status === 404) {
                  setStatus(error.response.status);
                }
              }
        };
        fetchData();
    }, [id]);

    const handleVerses = async (dataArray) => {
      const verses = dataArray.map((obj, index) => {
        const [data1, response] = obj;
        setHeader(response.poem_id.title);
        return (dataArray.length <12 ?
          <div key={index}>
            <p key={index}>{response.text}</p>
          </div> :
            <div key={index}>
                <p key={index} className="size-change">{response.text}</p>
            </div>
        );
      });

      
      let poemLines = parseInt(dataArray.length) / 2;

      if (poemLines > 27) {
        document.querySelector('.poem-background').style.height = '2800px';
        document.querySelector('.poem-container').style.top = '5%';
      }
      else if (poemLines > 17 && poemLines <27) {
        document.querySelector('.poem-background').style.height = '1600px';
        document.querySelector('.poem-container').style.top = '7%';
        document.querySelector('.poem-container').style.height = '85%';
      }
      else if (poemLines > 12 && poemLines <= 16) {
        document.querySelector('.poem-background').style.height = '1300px';
        document.querySelector('.poem-container').style.top = '10%';
      }
      else if (poemLines > 27) {
        document.querySelector('.poem-background').style.height = '1900px';
        document.querySelector('.poem-container').style.top = '7%';
      }
      const poemContainer = document.querySelector('.poem-text');
      poemContainer.style.display = 'grid';
      poemContainer.style.gridTemplateColumns = '1fr 1fr';
      poemContainer.style.gridTemplateRows =`repeat(${poemLines}, 1fr)`;
      setPoem(verses);
    }

        return (
          <div>
            {status === 404 ? (
              <NotFound404 />
            ) : (
              <div>
              <div>
                  <div className="poem-background">
                      <img src={picture} alt="poem background" />
                  </div>
                  <div className="poem-container">
                      <div className="poem-header">
                          {header}
                      </div>
                      <div className="poem-text">
                          {poem}
                      </div>
                      <div className="button-container">
                          <button><Link to={`/poem/${parseInt(id) - 1}`}>شعر قبلی</Link></button>
                          <button><Link to={`/home`}>صفحه اصلی</Link></button>
                          <button><Link to={`/poem/${parseInt(id) + 1}`}>شعر بعدی</Link></button>
                      </div>
                  </div>
              </div>
            </div>
          )}
        </div>
      );
    };


export default Poem;