import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import background from '../images/homepage-background.jpg';
import axios from "axios";


function HomePage(props) {
    const [data, setData] = useState(null);
    const [random, setRandom] = useState(null);



    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(`https://khayyam-website.liara.run/random`);
                console.log(response);
                let dataArray = [...Object.entries(response.data)];
                setData(response.data);
                handleVerses(dataArray);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
        };
        fetchData();
    }, []);


    const handleVerses = async (dataArray) => {
        const verses = dataArray.map((obj, index) => {
            const [data1, response] = obj;
            return (
                <div key={index}>
                    <p key={index}>{response.text}</p>
                </div>
            );

            
        });

        let poemLines = parseInt(dataArray.length) / 2;
        const randomContainer = document.querySelector('.random-container');
        randomContainer.style.display = 'grid';
        randomContainer.style.gridTemplateColumns = '1fr 1fr';
        randomContainer.style.gridTemplateRows =`repeat(${poemLines}, 1fr)`;
        setRandom(verses);
    }

    
    const token = localStorage.getItem('jwtToken')
    const isAuthorized = !!token;
    let headerMenu;

    if (isAuthorized) {
        headerMenu = <div className="header-home">
                        <Link to='/logout'>خروج</Link>
                        <Link to='/search-poem' id="search">جستجو در اشعار</Link>
                    </div>
    }
    else {
        headerMenu = <div className="header-home">
        <Link to='/register'>ثبت نام</Link>
        <Link to='/login'>ورود</Link>
        <Link to='/search-poem'>جستجو در اشعار</Link>
    </div>
    }


    return (
        <div className="home">
            <div className="homepage-background">
                <img src={background} alt="" />
            </div>
            {headerMenu}
            <h1 className="title-homepage">کافه شعر</h1>
                {data ? (
                    <div className="random-container">
                        {random}
                    </div>
                ) : (
                    <div className="random-container">
                        <p>در حال دریافت</p>
                    </div>
                )}

            <div id="home-container">
                <div className="section left">
                    <Link to={'/list-of-poems'}>اشعار</Link>
                </div>
                <div className="section">
                    <Link to={'/list-of-audios'}>فایل های صوتی</Link>
                </div>
                <div className="section right">
                    <Link to={'/list-of-techniques'}>تکنیک ها</Link>
                </div>
            </div>
        </div>
    )
}


export default HomePage;