import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function SearchPoem(props) {

    const token = localStorage.getItem('jwtToken');
    const isAuthorized = !!token;
    let headerMenu;

    if (isAuthorized) {
        headerMenu = <div className="search-header">
                        <Link to='/logout'>خروج</Link>
                        <Link to='/search-poem' id="search">جستجو در اشعار</Link>
                        <Link to={'/home'} className="header-homepage">صفحه اصلی</Link>
                    </div>
    }

    else {
        headerMenu = <div className="header-menu search-header">
        <Link to='/register'>ثبت نام</Link>
        <Link to='/login'>ورود</Link>
        <Link to='/search-poem'>جستجو در اشعار</Link>
        <Link to={'/home'} className="header-homepage">صفحه اصلی</Link>
    </div>
    }

    
    const [formData, setFormData] = useState({
        searchedItem: '',
      });
    
    const [results, setResults] = useState([]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        };
    
    
    const links = () => {
        const resultContainer = document.querySelector('.results-container');
        resultContainer.style.display = 'grid';
        resultContainer.style.gridTemplateColumns = '1fr 1fr';
    }

    
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://khayyam-website.liara.run/verses?text=${formData.searchedItem}`);
            document.querySelector('#results-container').classList.remove('hidden');
            const responseArray = [...Object.entries(response.data)];
            setResults(responseArray);
        }
        catch(error) {
            console.log('error happened', error);
        }

    };

    return(
        <div>
            <div className="search-poem-container">
                {headerMenu}
                <div className="search-box">
                    <input 
                     type="text"
                     name="searchedItem"
                     value={formData.searchedItem}
                     onChange={handleInputChange}
                     placeholder="قسمتی از شعر خود را وارد نمایید" />
                    <button onClick={handleSearch}>جستجو</button>
                </div>
                <div className="results-container hidden" id="results-container">
                {results.length > 0 ? (
                results.map((obj, index) => {
                    const [stringIndex, poemData] = obj;
                    return <p key={index} className="search-result">
                        {poemData.poem_id.title} - {poemData.poem_id.artist} - {poemData.text}
                        </p>
                        }
                    )
                    ) : (
                    <p className="search-not-found">نتیجه ای پیدا نشد</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchPoem;