import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import background from '../images/homepage-background.jpg';
import axios from "axios";


function HomePage(props) {
    const [data, setData] = useState(null);
    const [random, setRandom] = useState(null);
    // const [numOfVerses, setNumOfVerses] = useState(null);



    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/random`);
                let dataArray = [...Object.entries(response.data)];
                setData(response.data);
                handleVerses(dataArray);
                // setNumOfVerses(response.data.length);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
        };
        fetchData();
    }, []);

    // const handleVerses = async () => {
    //     const array = Object.entries(data);
    //     console.log(array);
    // }

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
        headerMenu = <div className="header-menu">
                        <Link to='/logout'>خروج</Link>
                        <Link to='/login'>حساب کاربری</Link>
                        <Link to='search-poem' id="search">جستجو در اشعار</Link>
                    </div>
    }
    else {
        headerMenu = <div className="header-menu">
        <Link to='/register'>ثبت نام</Link>
        <Link to='/login'>ورود</Link>
        <Link to='/search-poem'>جستجو در اشعار</Link>
    </div>
    }

    // handleVerses();

    return (
        <div className="home">
            <div className="homepage-background">
                <img src={background} alt="" />
            </div>
            {headerMenu}
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
                <div className="section top-left">
                    <Link to={'/list-of-poems'}>اشعار</Link>
                </div>
                <div className="section top-right">
                    <Link to={'/list-of-audios'}>فایل های صوتی</Link>
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