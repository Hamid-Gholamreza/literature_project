import React, {useEffect, useState} from "react";
import background from '../images/search-poem-background.jpg';
import axios from "axios";



function SearchPoem(props) {
    
    const [formData, setFormData] = useState({
        searchedItem: '',
      });
    
    const [results, setResults] = useState([]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        };

    
    const handleSearch = async (e) => {
        e.preventDefault();
        console.log(formData.searchedItem);
        try {
            const response = await axios.get(`http://localhost:8000/verses?text=${formData.searchedItem}`);
            const responseArray = [...Object.entries(response.data)];
            setResults(responseArray);
        }
        catch(error) {
            console.log('error happened');
        }

    };



    return(
        <div>
            <div className="search-poem-background">
                <img src={background} alt="" />
            </div>
            <div className="search-poem-container">
                <div className="search-box">
                    <input 
                    type="text"
                    name="searchedItem"
                    value={formData.searchedItem}
                    onChange={handleInputChange}
                    placeholder="قسمتی از شعر خود را وارد نمایید" />
                    <button onClick={handleSearch}>جستجو</button>
                </div>
                <div className="results-container">
                {results.length > 0 ? (
                results.map((obj, index) => {
                    const [stringIndex, poemData] = obj;
                    console.log(poemData);
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